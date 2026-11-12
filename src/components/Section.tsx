import Reveal from "./Reveal";

export default function Section({ id, title, intro, children }: { id: string; title: string; intro?: string; children: React.ReactNode }) {
  return (
    <section id={id} aria-labelledby={`${id}-h`} className="mx-auto max-w-page px-5 py-16 md:py-20">
      <Reveal>
        <span className="mb-4 block h-1 w-10 rounded bg-accent" aria-hidden="true" />
        <h2 id={`${id}-h`} className="font-display text-2xl font-semibold md:text-3xl">{title}</h2>
        {intro && <p className="mt-2 max-w-xl text-muted">{intro}</p>}
      </Reveal>
      <Reveal delay={120} className="mt-8">{children}</Reveal>
    </section>
  );
}
