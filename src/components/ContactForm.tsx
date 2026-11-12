"use client";
import { useState } from "react";

type State = "idle" | "loading" | "success" | "error";

export default function ContactForm() {
  const [state, setState] = useState<State>("idle");
  const [msg, setMsg] = useState("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const d = Object.fromEntries(new FormData(form)) as Record<string, string>;
    if (!d.name.trim() || !/^\S+@\S+\.\S+$/.test(d.email) || d.message.trim().length < 10) {
      setState("error");
      setMsg("Enter your name, a valid email and a message of at least 10 characters.");
      return;
    }
    setState("loading");
    try {
      const res = await fetch("/api/contact", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(d) });
      const json = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(json.error || "Message could not be sent.");
      setState("success");
      setMsg("Message sent. I'll reply by email.");
      form.reset();
    } catch (err) {
      setState("error");
      setMsg(err instanceof Error ? err.message : "Message could not be sent. Email me directly instead.");
    }
  }

  return (
    <form onSubmit={onSubmit} noValidate className="card grid gap-4">
      <div className="grid gap-4 md:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-1.5 block text-sm">Name</label>
          <input id="name" name="name" required maxLength={80} autoComplete="name" className="field" />
        </div>
        <div>
          <label htmlFor="email" className="mb-1.5 block text-sm">Email</label>
          <input id="email" name="email" type="email" required maxLength={120} autoComplete="email" className="field" />
        </div>
      </div>
      <div>
        <label htmlFor="subject" className="mb-1.5 block text-sm">Subject</label>
        <select id="subject" name="subject" className="field" defaultValue="Internship">
          <option>Internship</option><option>Project</option><option>Collaboration</option><option>Other</option>
        </select>
      </div>
      <div>
        <label htmlFor="message" className="mb-1.5 block text-sm">Message</label>
        <textarea id="message" name="message" required minLength={10} maxLength={2000} rows={5} className="field" />
      </div>
      {/* Honeypot: hidden from people, bots fill it */}
      <div className="hidden" aria-hidden="true">
        <label>Website<input name="website" tabIndex={-1} autoComplete="off" /></label>
      </div>
      <p className="text-xs text-muted">Your name, email and message are used only to reply to you.</p>
      <div className="flex flex-wrap items-center gap-4">
        <button type="submit" disabled={state === "loading"} className="btn btn-primary disabled:opacity-60">
          {state === "loading" ? "Sending..." : "Send message"}
        </button>
        <p role="status" aria-live="polite" className={`text-sm ${state === "error" ? "text-red-400" : "text-accent"}`}>
          {state === "success" || state === "error" ? msg : ""}
        </p>
      </div>
    </form>
  );
}
