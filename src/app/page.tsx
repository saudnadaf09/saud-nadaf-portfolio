import { Github, Linkedin, Mail, Download, ShieldCheck } from "lucide-react";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Section from "@/components/Section";
import ProjectsGrid from "@/components/ProjectsGrid";
import ContactForm from "@/components/ContactForm";
import { profile, skills, experience, education, certifications, achievements, leadership } from "@/data";

export default function Home() {
  return (
    <>
      <Navbar />
      <main id="main">
        <section id="home" className="mx-auto grid max-w-page items-center gap-14 px-5 pb-12 pt-14 md:grid-cols-[1.15fr_1fr] md:pt-20">
          <div>
            {profile.availability && (
              <p className="settle inline-flex items-center gap-2 rounded-full border border-line bg-surface px-3 py-1 text-sm text-muted">
                <ShieldCheck size={14} className="text-accent" /> {profile.availability}
              </p>
            )}
            <h1 className="settle settle-2 mt-5 font-display text-5xl font-semibold leading-tight md:text-7xl">
              <span className="bg-gradient-to-r from-ink via-ink to-accent bg-clip-text text-transparent">{profile.name}</span>
              <span className="mt-3 block text-2xl font-normal text-muted md:text-3xl">{profile.title}</span>
            </h1>
            <p className="settle settle-3 mt-6 max-w-xl text-lg text-muted">{profile.intro}</p>
            <div className="settle settle-3 mt-8 flex flex-wrap gap-3">
              <a href="#projects" className="btn btn-primary">View projects</a>
              <a href={profile.resume} download className="btn btn-ghost"><Download size={16} /> Download resume</a>
              <a href={profile.github} target="_blank" rel="noopener noreferrer" className="btn btn-ghost"><Github size={16} /> GitHub</a>
              <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="btn btn-ghost"><Linkedin size={16} /> LinkedIn</a>
              <a href={`mailto:${profile.email}`} className="btn btn-ghost"><Mail size={16} /> Email</a>
            </div>
            <ul className="settle settle-3 mt-10 flex flex-wrap gap-2" aria-label="Focus areas">
              {profile.focus.map((f) => <li key={f} className="tag">{f}</li>)}
            </ul>
          </div>
          <div className="settle settle-2 relative mx-auto w-full max-w-md">
            <div className="animate-glow absolute -inset-6 rounded-full bg-accent/25 blur-3xl" aria-hidden="true" />
            <div className="relative overflow-hidden rounded-2xl border border-line shadow-[0_0_60px_-15px_rgba(32,184,121,0.55)]">
              <Image src="/saud.jpg" alt="Portrait of Saud Nadaf" width={900} height={970} priority className="h-auto w-full" />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-bg/50 via-transparent to-transparent" />
            </div>
            <div className="animate-float absolute -bottom-4 -left-3 flex items-center gap-2 rounded-xl border border-line bg-surface/90 px-3 py-2 text-sm backdrop-blur">
              <ShieldCheck size={16} className="text-accent" /> Build. Secure. Innovate.
            </div>
          </div>
        </section>

        <Section id="about" title="About">
          <div className="max-w-2xl space-y-4 text-muted">
            {profile.about.map((t) => <p key={t}>{t}</p>)}
            <p>Based in {profile.location}.</p>
          </div>
        </Section>

        <Section id="expertise" title="Expertise" intro="Tools and technologies listed on my resume.">
          <div className="grid gap-5 md:grid-cols-2">
            {skills.map((g) => (
              <div key={g.group} className="card">
                <h3 className="font-display text-lg font-semibold">{g.group}</h3>
                <ul className="mt-3 flex flex-wrap gap-1.5">
                  {g.items.map((i) => <li key={i} className="tag">{i}</li>)}
                </ul>
              </div>
            ))}
          </div>
        </Section>

        <Section id="projects" title="Projects" intro="Open a project to see features, stack and status.">
          <ProjectsGrid />
        </Section>

        <Section id="experience" title="Experience & training">
          <ol className="space-y-4">
            {experience.map((e) => (
              <li key={e.role} className="card">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <h3 className="font-display text-lg font-semibold">{e.role}</h3>
                  <span className="tag">{e.type}</span>
                </div>
                <p className="mt-1 text-sm text-muted">{e.org}{e.date && `, ${e.date}`}</p>
                {e.detail && <p className="mt-2 text-sm text-muted">{e.detail}</p>}
              </li>
            ))}
          </ol>
        </Section>

        <Section id="education" title="Education">
          <div className="grid gap-5 md:grid-cols-2">
            {education.map((e) => (
              <div key={e.degree} className="card">
                <h3 className="font-display text-lg font-semibold">{e.degree}</h3>
                <p className="mt-1 text-sm text-muted">{e.school}</p>
                <p className="text-sm text-muted">{e.date} &middot; {e.note}</p>
              </div>
            ))}
          </div>
        </Section>

        <Section id="certifications" title="Certifications">
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {certifications.map((c) => (
              <div key={c.issuer} className="card">
                <h3 className="font-display text-lg font-semibold">{c.issuer}</h3>
                <ul className="mt-3 space-y-1.5 text-sm text-muted">
                  {c.items.map((i) => <li key={i}>{i}</li>)}
                </ul>
              </div>
            ))}
          </div>
        </Section>

        <Section id="achievements" title="Achievements & research">
          <ul className="space-y-4">
            {achievements.map((a) => (
              <li key={a.title} className="card">
                <h3 className="font-medium">{a.title}</h3>
                <p className="mt-1 text-sm text-muted">{a.detail}</p>
              </li>
            ))}
          </ul>
        </Section>

        <Section id="leadership" title="Leadership">
          <div className="grid gap-5 md:grid-cols-2">
            {leadership.map((l) => (
              <div key={l.title} className="card">
                <h3 className="font-medium">{l.title}</h3>
                <p className="mt-1 text-sm text-muted">{l.detail}</p>
              </div>
            ))}
          </div>
        </Section>

        <Section id="contact" title="Contact" intro="For internships, projects or collaboration.">
          <div className="grid gap-8 md:grid-cols-[1fr_1.4fr]">
            <div className="space-y-3 text-sm">
              <p><a className="text-accent hover:underline" href={`mailto:${profile.email}`}>{profile.email}</a></p>
              <p><a className="text-muted hover:text-accent" href={profile.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a></p>
              <p><a className="text-muted hover:text-accent" href={profile.github} target="_blank" rel="noopener noreferrer">GitHub</a></p>
            </div>
            <ContactForm />
          </div>
        </Section>
      </main>
      <footer className="border-t border-line py-8 text-center text-sm text-muted">
        &copy; {new Date().getFullYear()} {profile.name}
      </footer>
    </>
  );
}
