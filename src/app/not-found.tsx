import Link from "next/link";

export default function NotFound() {
  return (
    <main className="mx-auto flex min-h-screen max-w-page flex-col items-start justify-center px-5">
      <h1 className="font-display text-4xl font-semibold">Page not found</h1>
      <p className="mt-3 text-muted">This page or project doesn't exist. Go back to the portfolio.</p>
      <Link href="/" className="btn btn-primary mt-6">Back to home</Link>
    </main>
  );
}
