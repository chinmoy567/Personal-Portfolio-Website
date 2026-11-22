"use client";

import { useEffect, useState } from "react";
import { nav, site, whatsappHref } from "@/data/site";
import { CloseIcon, MenuIcon } from "./Icons";

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("#home");

  useEffect(() => {
    const ids = nav.map((n) => n.href.slice(1));
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(`#${e.target.id}`);
        });
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) obs.observe(el);
    });
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/5 bg-[#2a363f]/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 md:pl-24 md:pr-8 lg:max-w-none">
        <a href="#home" className="text-xl font-semibold tracking-tight text-white">
          {site.shortName}
          <span className="text-[#8fb4c4]">.</span>
        </a>

        <nav className="hidden md:block" aria-label="Primary">
          <ul className="flex items-center gap-8 text-sm">
            {nav.map((n) => (
              <li key={n.href}>
                <a
                  href={n.href}
                  aria-current={active === n.href ? "true" : undefined}
                  className={`relative py-5 transition-colors hover:text-white ${
                    active === n.href ? "text-white" : "text-[#9fb0bb]"
                  }`}
                >
                  {n.label}
                  {active === n.href && (
                    <span className="absolute inset-x-0 bottom-3 h-px bg-[#8fb4c4]" />
                  )}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden rounded-md bg-[#4d5f6b] px-4 py-2 text-sm text-white transition hover:bg-[#5d7280] sm:inline-block"
          >
            Hire me
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            className="grid h-10 w-10 place-items-center rounded-md bg-[#4d5f6b]/60 text-white md:hidden"
          >
            {open ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </div>

      {open && (
        <div className="absolute inset-x-0 top-16 h-[calc(100dvh-4rem)] bg-[#26323a] px-5 py-8 md:hidden">
          <ul className="space-y-1">
            {nav.map((n) => (
              <li key={n.href}>
                <a
                  href={n.href}
                  onClick={() => setOpen(false)}
                  className="flex items-center justify-between border-b border-white/5 py-4 text-2xl text-white"
                >
                  {n.label}
                  <span className="text-sm text-[#8fb4c4]">→</span>
                </a>
              </li>
            ))}
          </ul>
          <a
            href={whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 block rounded-md bg-[#4d5f6b] py-3 text-center text-white"
          >
            Chat on WhatsApp
          </a>
        </div>
      )}
    </header>
  );
}
