import Nav from "@/components/Nav";
import {
  ArrowIcon,
  FacebookIcon,
  GithubIcon,
  LinkedinIcon,
  MailIcon,
  WhatsappIcon,
  XIcon,
} from "@/components/Icons";
import {
  education,
  mailHref,
  projects,
  site,
  skills,
  stats,
  whatsappHref,
} from "@/data/site";

const socials = [
  { label: "GitHub", href: site.links.github, Icon: GithubIcon },
  { label: "LinkedIn", href: site.links.linkedin, Icon: LinkedinIcon },
  { label: "Facebook", href: site.links.facebook, Icon: FacebookIcon },
  { label: "X", href: site.links.x, Icon: XIcon },
];

function SectionTitle({ index, title }: { index: string; title: string }) {
  return (
    <div className="mb-10 flex items-center gap-4">
      <span className="text-xs tracking-widest text-[#8fb4c4]">{index}</span>
      <span className="h-px w-12 bg-white/20" />
      <h2 className="text-2xl font-semibold text-white sm:text-3xl">{title}</h2>
    </div>
  );
}

export default function Home() {
  return (
    <>
      <Nav />

      {/* Left rail (desktop) */}
      <aside className="fixed bottom-0 left-0 top-16 z-40 hidden w-16 flex-col items-center justify-end gap-5 bg-[#3a4851]/60 pb-8 md:flex">
        {socials.map(({ label, href, Icon }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
            className="text-[#9fb0bb] transition hover:text-white"
          >
            <Icon />
          </a>
        ))}
      </aside>

      <main className="md:pl-16">
        {/* HERO */}
        <section
          id="home"
          className="relative flex min-h-dvh flex-col justify-center overflow-hidden px-5 pb-16 pt-28 sm:px-10 lg:px-20"
        >
          <div className="mx-auto grid w-full max-w-6xl gap-10 lg:grid-cols-[1fr_1.4fr] lg:items-center">
            <div className="fade-up text-sm text-[#9fb0bb]">
              <div className="flex items-center gap-3">
                <span>/01</span>
                <span className="h-px w-20 bg-white/20" />
              </div>
              <p className="mt-3 font-medium text-white">Selected work</p>
              <p className="mt-1">{site.location}</p>
              <p>Open to opportunities</p>
            </div>

            <div className="fade-up delay-1">
              <p className="mb-5 inline-flex items-center gap-2 rounded-md bg-[#3d4d57] px-3 py-1.5 text-xs text-[#cfdbe2]">
                <span className="h-1.5 w-1.5 rounded-full bg-[#8fe0b0]" />
                {site.title}
              </p>
              <h1 className="text-4xl font-semibold leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-6xl">
                {site.name}
                <span className="mt-2 block text-[#9fb0bb]">{site.headline}</span>
              </h1>
              <p className="mt-6 max-w-xl text-base leading-relaxed text-[#9fb0bb]">
                {site.intro}
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="#projects"
                  className="rounded-md bg-[#4d5f6b] px-5 py-3 text-sm text-white transition hover:bg-[#5d7280]"
                >
                  View projects
                </a>
                <a
                  href={whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-md border border-white/15 px-5 py-3 text-sm text-white transition hover:bg-white/5"
                >
                  WhatsApp me
                </a>
              </div>
            </div>
          </div>

          {/* Bottom info strip */}
          <div className="fade-up delay-2 mx-auto mt-16 grid w-full max-w-6xl grid-cols-3 gap-px overflow-hidden rounded-lg bg-white/10">
            {stats.map((s) => (
              <div key={s.label} className="bg-[#3a4851]/70 p-4 sm:p-6">
                <p className="text-2xl font-semibold text-white sm:text-3xl">{s.value}</p>
                <p className="mt-1 text-xs text-[#9fb0bb] sm:text-sm">{s.label}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ABOUT */}
        <section id="about" className="px-5 py-20 sm:px-10 lg:px-20">
          <div className="mx-auto max-w-6xl">
            <SectionTitle index="/02" title="About" />
            <div className="grid gap-8 lg:grid-cols-2">
              <p className="text-lg leading-relaxed text-[#cfdbe2]">
                I work on the parts of a product users never see but always feel: APIs,
                databases, authentication, cloud deployment and AI integration. I enjoy
                turning a rough idea into a system that is fast, secure and simple to
                maintain.
              </p>
              <p className="leading-relaxed text-[#9fb0bb]">
                I&apos;m finishing my BSc in Computer Science and Engineering at BAIUST, and I
                build constantly: hackathon apps, full-stack web projects, research code
                and cloud experiments. Everything is public on GitHub, so you can see how
                I work.
              </p>
            </div>
          </div>
        </section>

        {/* PROJECTS */}
        <section id="projects" className="px-5 py-20 sm:px-10 lg:px-20">
          <div className="mx-auto max-w-6xl">
            <SectionTitle index="/03" title="Projects" />
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {projects.map((p) => (
                <a
                  key={p.name}
                  href={p.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex flex-col rounded-lg border border-white/10 bg-[#3a4851]/50 p-6 transition hover:-translate-y-1 hover:border-[#8fb4c4]/50 hover:bg-[#3f4f5a]/70"
                >
                  <div className="flex items-start justify-between gap-3">
                    <h3 className="text-lg font-medium text-white">{p.name}</h3>
                    <ArrowIcon className="mt-1 shrink-0 text-[#9fb0bb] transition group-hover:text-white" />
                  </div>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-[#9fb0bb]">
                    {p.blurb}
                  </p>
                  <ul className="mt-5 flex flex-wrap gap-2">
                    {p.tags.map((t) => (
                      <li
                        key={t}
                        className="rounded bg-[#2a363f] px-2.5 py-1 text-xs text-[#cfdbe2]"
                      >
                        {t}
                      </li>
                    ))}
                  </ul>
                </a>
              ))}
            </div>
            <a
              href={site.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-2 text-sm text-[#8fb4c4] hover:text-white"
            >
              See all repositories on GitHub <ArrowIcon />
            </a>
          </div>
        </section>

        {/* SKILLS */}
        <section id="skills" className="px-5 py-20 sm:px-10 lg:px-20">
          <div className="mx-auto max-w-6xl">
            <SectionTitle index="/04" title="Skills" />
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {skills.map((g) => (
                <div
                  key={g.group}
                  className="rounded-lg border border-white/10 bg-[#3a4851]/40 p-6"
                >
                  <h3 className="mb-4 text-sm uppercase tracking-widest text-[#8fb4c4]">
                    {g.group}
                  </h3>
                  <ul className="flex flex-wrap gap-2">
                    {g.items.map((i) => (
                      <li
                        key={i}
                        className="rounded bg-[#2a363f] px-3 py-1.5 text-sm text-[#cfdbe2]"
                      >
                        {i}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* EDUCATION */}
        <section id="education" className="px-5 py-20 sm:px-10 lg:px-20">
          <div className="mx-auto max-w-6xl">
            <SectionTitle index="/05" title="Education" />
            <ol className="relative space-y-8 border-l border-white/15 pl-6 sm:pl-8">
              {education.map((e) => (
                <li key={e.school} className="relative">
                  <span className="absolute -left-[1.85rem] top-1.5 h-2.5 w-2.5 rounded-full bg-[#8fb4c4] sm:-left-[2.35rem]" />
                  <p className="text-xs tracking-widest text-[#8fb4c4]">{e.period}</p>
                  <h3 className="mt-1 text-lg font-medium text-white">{e.school}</h3>
                  <p className="text-sm text-[#9fb0bb]">{e.degree}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="px-5 pb-24 pt-20 sm:px-10 lg:px-20">
          <div className="mx-auto max-w-6xl">
            <SectionTitle index="/06" title="Contact" />
            <div className="rounded-xl border border-white/10 bg-[#3a4851]/50 p-6 sm:p-10">
              <h3 className="max-w-2xl text-2xl font-semibold text-white sm:text-4xl">
                Have a project or an opportunity? Let&apos;s talk.
              </h3>
              <p className="mt-4 max-w-xl text-[#9fb0bb]">
                The fastest way to reach me is WhatsApp or email. I usually reply within a
                day.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href={whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-md bg-[#4d5f6b] px-6 py-3.5 text-white transition hover:bg-[#5d7280]"
                >
                  <WhatsappIcon /> Message on WhatsApp
                </a>
                <a
                  href={mailHref}
                  className="inline-flex items-center justify-center gap-2 rounded-md border border-white/15 px-6 py-3.5 text-white transition hover:bg-white/5"
                >
                  <MailIcon /> {site.email}
                </a>
              </div>
              <ul className="mt-8 flex gap-5 md:hidden">
                {socials.map(({ label, href, Icon }) => (
                  <li key={label}>
                    <a
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={label}
                      className="text-[#9fb0bb] hover:text-white"
                    >
                      <Icon />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <footer className="border-t border-white/5 px-5 py-8 text-center text-xs text-[#9fb0bb]">
          © {new Date().getFullYear()} {site.name} · {site.domain}
        </footer>
      </main>
    </>
  );
}
