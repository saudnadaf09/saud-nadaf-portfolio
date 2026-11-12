import { NextResponse } from "next/server";

export const runtime = "nodejs";

// Simple in-memory rate limit: 3 messages per IP per 10 minutes.
// (Per server instance. For stronger limits use Upstash or Vercel KV.)
const hits = new Map<string, { n: number; t: number }>();
const WINDOW = 10 * 60 * 1000;
const MAX = 3;

const esc = (s: string) =>
  s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");

export async function POST(req: Request) {
  const ip = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown";
  const now = Date.now();
  const h = hits.get(ip);
  if (h && now - h.t < WINDOW) {
    if (h.n >= MAX) return NextResponse.json({ error: "Too many messages. Try again in a few minutes." }, { status: 429 });
    h.n++;
  } else {
    hits.set(ip, { n: 1, t: now });
  }

  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  if (body.website) return NextResponse.json({ ok: true }); // honeypot filled: pretend success

  const name = String(body.name ?? "").trim();
  const email = String(body.email ?? "").trim();
  const subject = String(body.subject ?? "Other").trim().slice(0, 40);
  const message = String(body.message ?? "").trim();

  if (!name || name.length > 80) return NextResponse.json({ error: "Enter a valid name." }, { status: 400 });
  if (!/^\S+@\S+\.\S+$/.test(email) || email.length > 120) return NextResponse.json({ error: "Enter a valid email." }, { status: 400 });
  if (message.length < 10 || message.length > 2000) return NextResponse.json({ error: "Message must be 10 to 2000 characters." }, { status: 400 });

  const { RESEND_API_KEY, CONTACT_TO_EMAIL, CONTACT_FROM_EMAIL } = process.env;
  if (!RESEND_API_KEY || !CONTACT_TO_EMAIL || !CONTACT_FROM_EMAIL) {
    return NextResponse.json({ error: "Contact form is not configured yet. Please email me directly." }, { status: 503 });
  }

  try {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: { Authorization: `Bearer ${RESEND_API_KEY}`, "Content-Type": "application/json" },
      body: JSON.stringify({
        from: CONTACT_FROM_EMAIL,
        to: [CONTACT_TO_EMAIL],
        reply_to: email,
        subject: `Portfolio: ${subject} from ${name}`.replace(/[\r\n]/g, " "),
        html: `<p><b>${esc(name)}</b> (${esc(email)})</p><p><b>${esc(subject)}</b></p><p>${esc(message).replace(/\n/g, "<br>")}</p>`,
      }),
    });
    if (!res.ok) throw new Error("provider");
    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ error: "Message could not be sent. Please email me directly." }, { status: 502 });
  }
}
