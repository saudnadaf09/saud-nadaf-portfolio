"use client";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  ["Home", "#home"], ["About", "#about"], ["Expertise", "#expertise"], ["Projects", "#projects"],
  ["Experience", "#experience"], ["Education", "#education"], ["Certifications", "#certifications"],
  ["Achievements", "#achievements"], ["Leadership", "#leadership"], ["Contact", "#contact"],
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-bg/90 backdrop-blur">
      <nav aria-label="Main" className="mx-auto flex max-w-page items-center justify-between px-5 py-3">
        <a href="/#home" className="font-display text-lg font-semibold">Saud Nadaf</a>
        <ul className="hidden gap-5 text-sm text-muted xl:flex">
          {links.map(([l, h]) => (
            <li key={h}><a href={`/${h}`} className="transition-colors hover:text-accent">{l}</a></li>
          ))}
        </ul>
        <button
          className="rounded-lg border border-line p-2 xl:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>
      {open && (
        <ul id="mobile-menu" className="border-t border-line bg-surface px-5 py-3 xl:hidden">
          {links.map(([l, h]) => (
            <li key={h}>
              <a href={`/${h}`} onClick={() => setOpen(false)} className="block py-2.5 text-muted hover:text-accent">{l}</a>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}
