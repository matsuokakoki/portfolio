"use client";

import { useState } from "react";
import type { ReactNode } from "react";
import Image from "next/image";
import { content, profile, projects } from "./portfolio-data";
import { SlideViewer } from "./slide-viewer";

type Lang = "ja" | "en";

export default function Home() {
  const [lang, setLang] = useState<Lang>("ja");
  const t = content[lang];
  const currentYear = new Date().getFullYear();

  return (
    <main className="min-h-screen bg-white text-black">
      <header className="sticky top-0 z-50 border-b border-black/10 bg-white/90 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4">
          <a href="#top" className="flex items-center gap-3">
            <div className="grid h-10 w-10 place-items-center border border-black bg-gray-100 text-sm font-black text-black">
              K
            </div>
            <div>
              <p className="text-sm font-bold text-black">{profile.name}</p>
              <p className="text-xs text-black">Portfolio</p>
            </div>
          </a>

          <nav className="hidden items-center gap-5 lg:flex">
            {t.nav.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-sm font-medium text-black underline-offset-4 transition hover:underline"
              >
                {item}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-1 border border-black bg-white p-1">
            <button
              type="button"
              onClick={() => setLang("ja")}
              aria-pressed={lang === "ja"}
              className={`px-3 py-1.5 text-xs font-bold text-black transition ${
                lang === "ja" ? "bg-gray-200" : "bg-white"
              }`}
            >
              JP
            </button>
            <button
              type="button"
              onClick={() => setLang("en")}
              aria-pressed={lang === "en"}
              className={`px-3 py-1.5 text-xs font-bold text-black transition ${
                lang === "en" ? "bg-gray-200" : "bg-white"
              }`}
            >
              EN
            </button>
          </div>
        </div>
      </header>

      <section
        id="top"
        className="border-b border-black/10 bg-[radial-gradient(circle_at_top_right,rgba(23,37,84,0.18),transparent_34%),linear-gradient(to_bottom,#ffffff,#f3f4f6)]"
      >
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-16 md:py-24 lg:grid-cols-[360px_1fr] lg:items-center">
          <aside className="border-2 border-blue-950 bg-gray-100 p-3">
            <div className="relative aspect-[4/5] w-full overflow-hidden border border-blue-950 bg-gray-200">
              <Image
                src="/profile.jpg"
                alt={profile.name}
                fill
                sizes="(max-width: 1023px) calc(100vw - 3.5rem), 332px"
                priority
                className="object-cover"
              />
            </div>

            <div className="border-x border-b border-black bg-white p-4">
              <p className="text-xl font-black text-black">{profile.name}</p>
              <p className="mt-1 text-sm font-medium text-black">
                {profile.university}, Japan
              </p>
              <p className="mt-4 text-sm font-bold text-black">{t.location}</p>
            </div>
          </aside>

          <div>
            <div className="mb-6 inline-block border border-blue-950 bg-blue-950/10 px-4 py-2 text-sm font-bold text-black">
              {t.badge}
            </div>

            <h1 className="max-w-5xl text-5xl font-black leading-tight tracking-tight text-black md:text-7xl">
              {t.heroTitle}
            </h1>

            <p className="mt-6 max-w-3xl text-base leading-8 text-black md:text-lg">
              {t.heroLead}
            </p>

            {/* <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a
                href="#experience"
                className="border border-blue-950 bg-blue-950/10 px-6 py-3 text-center text-sm font-black text-black transition hover:bg-blue-950/20"
              >
                {t.primaryCta}
              </a>
              <a
                href="#contact"
                className="border border-black bg-white px-6 py-3 text-center text-sm font-black text-black transition hover:bg-gray-100"
              >
                {t.secondaryCta}
              </a>
            </div> */}

            <div className="mt-9 grid gap-3 text-sm sm:grid-cols-2">
              <InfoCard label="English" value="TOEFL iBT 93 / TOEIC L&R 935" />
              <InfoCard label="Status" value={t.status} />
            </div>
          </div>
        </div>
      </section>

      <Section id="about" title={t.aboutTitle} tone="gray">
        <div className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr]">
          <LargeCard>
            <p className="text-sm font-black uppercase tracking-[0.25em] text-black">
              Profile
            </p>
            <h2 className="mt-4 text-3xl font-black text-black">
              {profile.name}
            </h2>
            <p className="mt-2 text-black">{profile.university}, Japan</p>
            <p className="mt-5 leading-8 text-black">{t.aboutText}</p>
          </LargeCard>

          <div className="grid gap-4 sm:grid-cols-2">
            {t.features.map((feature) => (
              <FeatureCard key={feature.num} {...feature} />
            ))}
          </div>
        </div>
      </Section>

      <Section id="education" title={t.educationTitle} tone="white">
        <LargeCard>
          <div className="flex flex-col justify-between gap-6 md:flex-row">
            <div>
              <p className="text-sm font-black text-black">{t.education.period}</p>
              <h3 className="mt-3 text-3xl font-black text-black">
                {t.education.school}
              </h3>
              <p className="mt-3 text-lg font-medium text-black">
                {t.education.degree}
              </p>
            </div>

            <div className="border border-black bg-gray-100 p-5 md:min-w-56">
              <p className="text-xs font-black uppercase tracking-[0.25em] text-black">
                Location
              </p>
              <p className="mt-2 font-bold text-black">
                {t.education.location}
              </p>
            </div>
          </div>
        </LargeCard>
      </Section>

      <Section id="experience" title={t.experienceTitle} tone="gray">
        <div className="grid gap-5 lg:grid-cols-2">
          {t.experiences.map((item) => (
            <ExperienceCard key={item.role} item={item} lang={lang} />
          ))}
        </div>
      </Section>

      <Section id="projects" title={lang === "ja" ? "公開プロジェクト" : "Public Projects"} tone="white">
        <div className="grid gap-5 md:grid-cols-2">
          {projects.map((project) => (
            <article
              key={project.name}
              className="border border-black border-t-4 border-t-blue-950 bg-white p-6 transition hover:bg-gray-100"
            >
              <h3 className="text-2xl font-black">{project.name}</h3>
              <ul className="mt-5 space-y-3 text-black">
                {(lang === "ja" ? project.ja : project.en).map((point) => (
                  <li key={point} className="flex gap-3 leading-7">
                    <span className="mt-2.5 h-1.5 w-1.5 shrink-0 bg-black" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-5 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="border border-blue-950 bg-blue-950/10 px-3 py-1 text-xs font-bold text-black"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              {"url" in project && (
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-block border border-black bg-white px-4 py-2 text-sm font-black text-black transition hover:bg-gray-200"
                >
                  {lang === "ja" ? "リポジトリを見る ↗" : "View repository ↗"}
                </a>
              )}
            </article>
          ))}
        </div>
      </Section>
      <Section id="international" title={t.internationalTitle} tone="white">
        <Timeline>
          {t.international.map((item) => (
            <TimelineItem key={item.title}>
              <p className="text-sm font-black text-black">{item.period}</p>
              <h3 className="mt-2 text-2xl font-black text-black">
                {item.title}
              </h3>
              <p className="mt-1 font-medium text-black">{item.org}</p>

              <ul className="mt-5 space-y-3 text-black">
                {item.points.map((point) => (
                  <li key={point} className="flex gap-3 leading-7 text-black">
                    <span className="mt-2.5 h-1.5 w-1.5 shrink-0 bg-black" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
              {"url" in item && (
                <a
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 inline-block text-sm font-bold text-blue-950 underline underline-offset-4"
                >
                  {lang === "ja" ? "Loop2Lifeのサイトを見る ↗" : "Explore Loop2Life ↗"}
                </a>
              )}
            </TimelineItem>
          ))}
        </Timeline>
      </Section>

      <Section id="activities" title={t.activitiesTitle} tone="gray">
        <div className="grid gap-5 md:grid-cols-2">
          {t.activities.map((activity) => (
            <LargeCard key={activity.title}>
              <p className="text-sm font-black text-black">{activity.period}</p>
              <h3 className="mt-3 text-2xl font-black text-black">
                {activity.title}
              </h3>
              <p className="mt-4 leading-8 text-black">{activity.body}</p>
            </LargeCard>
          ))}
        </div>
      </Section>

      <Section id="skills" title={t.skillsTitle} tone="white">
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {t.skillGroups.map((group) => (
            <LargeCard key={group.name}>
              <h3 className="text-xl font-black text-black">{group.name}</h3>

              <div className="mt-5 flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="border border-blue-950 bg-blue-950/10 px-3 py-1 text-xs font-bold text-black"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </LargeCard>
          ))}
        </div>
      </Section>

      <Section id="awards" title={t.awardsTitle} tone="gray">
        <div className="grid gap-5 lg:grid-cols-3">
          {t.awards.map((award) => (
            <LargeCard key={award.title}>
              <p className="text-sm font-black text-black">{award.period}</p>
              <h3 className="mt-3 text-2xl font-black text-black">
                {award.title}
              </h3>
              <p className="mt-4 leading-8 text-black">{award.body}</p>
            </LargeCard>
          ))}
        </div>
      </Section>

      <section id="contact" className="border-t border-black/10 bg-white">
        <div className="mx-auto max-w-7xl px-5 py-20">
          <div className="border-2 border-blue-950 bg-blue-950/10 p-8 md:p-12">
            <div className="max-w-3xl">
              <p className="text-sm font-black uppercase tracking-[0.25em] text-black">
                Contact
              </p>
              <h2 className="mt-4 text-4xl font-black text-black md:text-5xl">
                {t.contactTitle}
              </h2>
              <p className="mt-5 leading-8 text-black">{t.contactLead}</p>
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <a
                href={`mailto:${profile.email}`}
                className="border border-black bg-white px-6 py-3 text-center text-sm font-black text-black transition hover:bg-gray-200"
              >
                {t.emailLabel}: {profile.email}
              </a>

              <a
                href={profile.github}
                target="_blank"
                rel="noreferrer"
                className="border border-black bg-white px-6 py-3 text-center text-sm font-black text-black transition hover:bg-gray-200"
              >
                {t.githubLabel}
              </a>

              <a
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer"
                className="border border-black bg-white px-6 py-3 text-center text-sm font-black text-black transition hover:bg-gray-200"
              >
                {t.linkedinLabel}
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-black/10 bg-white px-5 py-8">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-3 text-sm font-medium text-black md:flex-row">
          <p>
            © {currentYear} {profile.name}. All rights reserved.
          </p>
          <p>Built with Next.js, Tailwind CSS, and Vercel.</p>
        </div>
      </footer>
    </main>
  );
}

function Section({
  id,
  title,
  tone,
  children,
}: {
  id: string;
  title: string;
  tone: "white" | "gray";
  children: ReactNode;
}) {
  return (
    <section
      id={id}
      className={`border-b border-black/10 ${
        tone === "gray" ? "bg-gray-100" : "bg-white"
      }`}
    >
      <div className="mx-auto max-w-7xl px-5 py-20">
        <div className="mb-10 max-w-3xl border-l-4 border-blue-950 pl-5">
          <p className="text-sm font-black uppercase tracking-[0.25em] text-black">
            {id}
          </p>
          <h2 className="mt-4 text-4xl font-black text-black md:text-5xl">
            {title}
          </h2>
        </div>

        {children}
      </div>
    </section>
  );
}

function InfoCard({ label, value }: { label: string; value: string }) {
  return (
    <div className="border border-black bg-gray-100 p-4">
      <p className="text-sm font-black text-black">{label}</p>
      <p className="mt-1 font-bold text-black">{value}</p>
    </div>
  );
}

function FeatureCard({
  num,
  title,
  body,
}: {
  num: string;
  title: string;
  body: string;
}) {
  return (
    <div className="border border-black bg-white p-6 transition hover:bg-gray-200">
      <p className="text-sm font-black text-black">{num}</p>
      <h3 className="mt-4 text-xl font-black text-black">{title}</h3>
      <p className="mt-3 text-sm leading-7 text-black">{body}</p>
    </div>
  );
}

function LargeCard({ children }: { children: ReactNode }) {
  return (
    <div className="border border-black border-t-4 border-t-blue-950 bg-white p-6 transition hover:bg-blue-950/5">
      {children}
    </div>
  );
}

function ExperienceCard({
  item,
  lang,
}: {
  item: {
    role: string;
    org: string;
    period: string;
    points: string[];
    tags: string[];
    repoUrl?: string;
    slideDeck?: "hayo" | "attendance";
  };
  lang: Lang;
}) {
  return (
    <article className="border border-black border-t-4 border-t-blue-950 bg-white p-6 transition hover:bg-blue-950/5">
      <p className="text-sm font-black text-black">{item.period}</p>
      <h3 className="mt-3 text-2xl font-black text-black">{item.role}</h3>
      <p className="mt-2 font-medium text-black">{item.org}</p>
      {item.repoUrl && <a href={item.repoUrl} target="_blank" rel="noreferrer" className="mt-3 inline-block font-bold underline">Source and results →</a>}

      <ul className="mt-5 space-y-3 text-black">
        {item.points.map((point) => (
          <li key={point} className="flex gap-3 leading-7 text-black">
            <span className="mt-2.5 h-1.5 w-1.5 shrink-0 bg-black" />
            <span>{point}</span>
          </li>
        ))}
      </ul>

      <div className="mt-5 flex flex-wrap gap-2">
        {item.tags.map((tag) => (
          <span
            key={tag}
            className="border border-blue-950 bg-blue-950/10 px-3 py-1 text-xs font-bold text-black"
          >
            {tag}
          </span>
        ))}
      </div>
      {item.slideDeck && (
        <SlideViewer deck={item.slideDeck} title={item.role} lang={lang} />
      )}
    </article>
  );
}

function Timeline({ children }: { children: ReactNode }) {
  return (
    <div className="relative">
      <div className="absolute left-4 top-0 hidden h-full w-px bg-black md:block" />
      <div className="space-y-5">{children}</div>
    </div>
  );
}

function TimelineItem({ children }: { children: ReactNode }) {
  return (
    <div className="relative md:pl-12">
      <div className="absolute left-[10px] top-7 hidden h-3 w-3 bg-black md:block" />
      <div className="border border-black bg-white p-6">{children}</div>
    </div>
  );
}
