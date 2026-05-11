"use client";

import { useMemo, useState } from "react";
import type { ReactNode } from "react";
import Image from "next/image";

type Lang = "ja" | "en";

const profile = {
  name: "松岡功樹(Koki Matsuoka)",
  email: "i5k0o9k@gmail.com",
  university: "Nagoya University",
};

const content = {
  ja: {
    nav: [
      "About",
      "Education",
      "Experience",
      "International",
      "Activities",
      "Skills",
      "Awards",
      "Contact",
    ],
    badge: "Computer Science Student / Software Developer",
    heroTitle: "幅広い好奇心、学習意欲、国際性",
    heroLead:
      "名古屋大学で情報学を学びながら、Web開発、サーバー運用、DX、国際交流に取り組んでいます。実用性のあるシステムを作り、改善し続けることを大切にしています。",
    primaryCta: "Experienceを見る",
    secondaryCta: "Contact",
    location: "Japan / Aichi",
    status: "Open to internships and global opportunities",

    aboutTitle: "About",
    aboutText:
      "将来はグローバルなIT企業で、社会に大きな影響を与えるプロダクト開発に関わることを目指しています。フロントエンド、バックエンド、データベース、サーバー運用、英語でのコミュニケーションを、授業だけでなく実践を通して学んでいます。",
educationTitle: "Education",
education: {
  school: "名古屋大学",
  period: "2024年4月 – 現在",
  degree: "情報学部",
  location: "日本",
},

    experienceTitle: "Technical Experience",
    experiences: [
      {
    role: "NUOCW Web運用スタッフ",
    org: "名古屋大学 / サーバーサイド班",
    period: "2025年 – 現在",
        points: [
          "大学Webインフラとバックエンドシステムの保守・改善を担当",
          "SSL証明書更新の自動化、新サーバー移行、運用信頼性向上に貢献",
          "講義公開システムのAPI開発やサーバーメンテナンスを支援",
        ],
        tags: ["Server Operations", "Backend", "API", "Automation", "SSL"],
      },
      {
    role: "出席管理システム開発",
    org: "個人塾",
    period: "2024年 – 現在",
        points: [
          "Webベースの出席管理システムをゼロから設計・開発",
          "出席管理と事務作業のデジタル化により業務効率を改善",
          "データベース設計、フロントエンド、バックエンドロジックを含むフルスタック実装を担当",
          "現在、60人以上の生徒・講師が毎日利用",
        ],
        tags: ["Web App", "Firebase", "Frontend", "Backend", "DX"],
      },
      {
    role: "大学構内施設探索アプリ開発",
    org: "大学チーム開発 / 6人チーム",
    period: "2026年",
  points: [
      "大学構内の施設探索を効率化する位置情報Webアプリを6人チームで企画・開発",
      "Geolocation API、MapLibre GL JS、Supabase + PostGISを用いて現在地表示と最寄り施設検索を実装",
      "設備情報や清潔度評価を統合し、課題設定から設計・開発・改善まで経験",
  ],
  tags: ["Next.js", "TypeScript", "MapLibre GL JS", "Supabase", "PostGIS", "Geolocation API"],
},
{
    role: "IFC/BIM向けLLMファインチューニング",
    org: "個人研究プロジェクト",
    period: "2026年",
  points: [
      "建築情報モデルIFCに特化したLLM適応を目的に、Gemma 3 1Bの軽量ファインチューニング基盤を構築",
      "Hugging Faceデータセットを分析し、4bit量子化とLoRAを用いたColab / Tesla T4向け学習構成を設計",
      "学習エラーの解析、LoRA adapter生成、生成回答の定性評価まで含む実験サイクルを実装",
  ],
  tags: ["LLM", "Gemma", "LoRA", "PEFT", "Hugging Face", "Google Colab"],
},
    ],

    internationalTitle: "International Experience",
    international: [
      {
        title: "University of Oregon Short-term Study",
        org: "United States",
        period: "Feb 2025 – Mar 2025",
        points: [
          "5週間の短期研修に参加",
          "ディスカッション型授業や研究室訪問を経験",
          "教員と英語で交流し、アメリカの学術環境について理解を深めた",
        ],
      },
      {
        title: "NUS Student Support Staff",
        org: "Nagoya University",
        period: "Dec 2025",
        points: [
          "National University of Singaporeの学生の名古屋滞在を2週間サポート",
          "終日のワークショップにも参加",
        ],
      },
      {
        title: "International Exchange Circle ACE",
        org: "Nagoya University",
        period: "2024 – Present",
        points: [
          "外国人留学生との英語コミュニケーションと文化交流に参加",
          "学生活動を通して異なる背景を持つ人々とのつながり作りに貢献",
        ],
      },
    ],

    activitiesTitle: "Activities",
activities: [
  {
    title: "大阪・関西万博 ボランティア",
    period: "2025年9月",
    body: "大規模な国際イベントの運営を通して、多様な来場者とのコミュニケーションを経験しました。",
  },
  {
    title: "SusHi Tech Tokyo 2026 ボランティア",
    period: "2026年4月",
    body: "東京で開催された国際的なイノベーションイベントの運営を支援し、スタートアップやグローバルIT企業への関心を深めました。",
  },
],

    skillsTitle: "Skills",
skillGroups: [
  {
    name: "プログラミング言語",
    skills: ["Python", "Go", "C++", "C", "JavaScript"],
  },
  {
    name: "Web開発",
    skills: ["Next.js", "React", "TypeScript", "Tailwind CSS", "HTML", "CSS"],
  },
  {
    name: "バックエンド / データベース",
    skills: ["Firebase", "Firestore", "Supabase", "API開発"],
  },
  {
    name: "インフラ / ツール",
    skills: ["Git", "GitHub", "サーバー運用", "自動化", "SSL"],
  },
  {
    name: "コミュニケーション",
    skills: ["日本語", "英語", "異文化コミュニケーション"],
  },
],

    awardsTitle: "Awards & Qualifications",
awards: [
  {
    title: "応用情報技術者試験 合格",
    period: "2025年",
    body: "セキュリティ、ネットワーク、データベース、ソフトウェア開発などの実践的なIT知識を証明する国家試験に合格しました。",
  },
  {
    title: "TOEFL iBT",
    period: "2026年",
    body: "スコア: 93",
  },
  {
    title: "TOEIC Listening & Reading",
    period: "2026年",
    body: "スコア: 935",
  },
],

    contactTitle: "Contact",
    contactLead:
      "Contact me here",
    emailLabel: "Email",
    githubLabel: "GitHub",
    linkedinLabel: "LinkedIn",
  },

  en: {
    nav: [
      "About",
      "Education",
      "Experience",
      "International",
      "Activities",
      "Skills",
      "Awards",
      "Contact",
    ],
    badge: "Computer Science Student / Software Developer",
    heroTitle: "Broad Curiosity, Eagerness to Learn, Global Mindset",
    heroLead:
      "I am an Informatics student at Nagoya University, working on web development, server operations, digital transformation, and international communication. I care about building systems that are actually used and continuously improved.",
    primaryCta: "View Experience",
    secondaryCta: "Contact",
    location: "Japan / Aichi",
    status: "Open to internships and global opportunities",

    aboutTitle: "About",
    aboutText:
      "My goal is to work at a global technology company and contribute to products with meaningful social impact. Through hands-on experience, I have been learning frontend development, backend systems, databases, server operations, and English communication.",

    educationTitle: "Education",
    education: {
      school: "Nagoya University",
      period: "Apr 2024 – Present",
      degree: "Bachelor of Informatics",
      location: "Japan",
    },

    experienceTitle: "Technical Experience",
    experiences: [
      {
        role: "NUOCW Web Operations Staff",
        org: "Nagoya University / Server-side Team",
        period: "2025 – Present",
        points: [
          "Maintain and improve university web infrastructure and backend systems",
          "Automated SSL certificate renewal and contributed to server migration and operational reliability",
          "Developed APIs for the lecture publishing system and supported server maintenance tasks",
        ],
        tags: ["Server Operations", "Backend", "API", "Automation", "SSL"],
      },
      {
        role: "Student Attendance Management System Development",
        org: "Private Tutoring School",
        period: "2024 – Present",
        points: [
          "Designed and developed a web-based attendance management system from scratch",
          "Improved operational efficiency by digitizing attendance tracking and administrative workflows",
          "Managed full-stack implementation including database design, frontend, and backend logic",
          "The tool is now used by more than 60 students and teachers every day",
        ],
        tags: ["Web App", "Firebase", "Frontend", "Backend", "DX"],
      },
      {
  role: "Location-based Campus Facility Search App Development",
  org: "University Team Project / 6-member Team",
  period: "2026",
  points: [
      "Planned and developed a location-based web app to improve facility search on campus",
      "Implemented current-location display and nearest-facility search using the Geolocation API, MapLibre GL JS, and Supabase + PostGIS",
      "Integrated facility details and cleanliness ratings while experiencing the full process from problem definition to improvement",
  ],
  tags: ["Next.js", "TypeScript", "MapLibre GL JS", "Supabase", "PostGIS", "Geolocation API"],
},
{
  role: "LLM Domain Adaptation for IFC/BIM",
  org: "Personal Research Project",
  period: "2026",
  points: [
      "Built a lightweight fine-tuning pipeline for adapting Gemma 3 1B to IFC and BIM-related tasks",
      "Analyzed Hugging Face datasets and designed a Colab / Tesla T4 training setup using 4-bit quantization and LoRA",
      "Implemented the experiment cycle including training error analysis, LoRA adapter generation, and qualitative response evaluation",
  ],
  tags: ["LLM", "Gemma", "LoRA", "PEFT", "Hugging Face", "Google Colab"],
},
    ],

    internationalTitle: "International Experience",
    international: [
      {
        title: "University of Oregon Short-term Study",
        org: "United States",
        period: "Feb 2025 – Mar 2025",
        points: [
          "Participated in a five-week study program",
          "Joined discussion-based classes and laboratory visits",
          "Communicated with faculty members and explored academic environments in the U.S.",
        ],
      },
      {
        title: "NUS Student Support Staff",
        org: "Nagoya University",
        period: "Dec 2025",
        points: [
          "Supported visiting students from the National University of Singapore during their two-week stay in Nagoya",
          "Joined a full-day workshop",
        ],
      },
      {
        title: "International Exchange Circle ACE",
        org: "Nagoya University",
        period: "2024 – Present",
        points: [
          "Engage in English communication and cultural exchange with international students",
          "Help build connections across different backgrounds through student activities",
        ],
      },
    ],

    activitiesTitle: "Activities",
    activities: [
      {
        title: "Expo 2025 Osaka Volunteer",
        period: "sep 2025",
        body: "Experienced communication with diverse people through supporting a large international event.",
      },
      {
        title: "SusHi Tech Tokyo 2026 Volunteer",
        period: "Apr 2026",
        body: "Supported the operation of a global innovation conference and gained insights into international IT companies.",
      }
    ],

    skillsTitle: "Skills",
    skillGroups: [
      {
        name: "Programming Languages",
        skills: ["Python", "Go", "C++", "C", "JavaScript"],
      },
      {
        name: "Web Development",
        skills: ["Next.js", "React", "TypeScript", "Tailwind CSS", "HTML", "CSS"],
      },
      {
        name: "Backend / Database",
        skills: ["Firebase", "Firestore", "Supabase", "API Development"],
      },
      {
        name: "Infrastructure / Tools",
        skills: ["Git", "GitHub", "Server Operations", "Automation", "SSL"],
      },
      {
        name: "Communication",
        skills: ["Japanese", "English", "Cross-cultural Communication"],
      },
    ],

    awardsTitle: "Awards & Qualifications",
    awards: [
      {
        title: "Applied Information Technology Engineer Examination",
        period: "2025",
        body: "Passed a national exam that validates practical IT knowledge in security, networks, databases, and software. Japanese name: 応用情報技術者試験.",
      },
      {
        title: "TOEFL iBT",
        period: "2026",
        body: "Score: 93",
      },
      {
        title: "TOEIC Listening & Reading",
        period: "2026",
        body: "Score: 935",
      },
    ],

    contactTitle: "Contact",
    contactLead: "Contact me here",
    emailLabel: "Email",
    githubLabel: "GitHub",
    linkedinLabel: "LinkedIn",
  },
};

export default function Home() {
  const [lang, setLang] = useState<Lang>("ja");
  const t = content[lang];
  const currentYear = useMemo(() => new Date().getFullYear(), []);

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
              onClick={() => setLang("ja")}
              className={`px-3 py-1.5 text-xs font-bold text-black transition ${
                lang === "ja" ? "bg-gray-200" : "bg-white"
              }`}
            >
              JP
            </button>
            <button
              onClick={() => setLang("en")}
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
<FeatureCard
  num="01"
  title="Broad Curiosity"
  body="分野を問わず、知りたいという気持ちを大切にする"
/>
<FeatureCard
  num="02"
  title="Love of Learning"
  body="学び続けることを、習慣ではなく喜びにする"
/>
<FeatureCard
  num="03"
  title="Global Perspective"
  body="多様な文化・言語を通じて視野を広げる"
/>
<FeatureCard
  num="04"
  title="Drive to Act"
  body="考えるだけでなく、まず動いてみる"
/>
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
            <ExperienceCard key={item.role} item={item} />
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
                href="https://github.com/"
                target="_blank"
                rel="noreferrer"
                className="border border-black bg-white px-6 py-3 text-center text-sm font-black text-black transition hover:bg-gray-200"
              >
                {t.githubLabel}
              </a>

              <a
                href="https://www.linkedin.com/"
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
}: {
  item: {
    role: string;
    org: string;
    period: string;
    points: string[];
    tags: string[];
  };
}) {
  return (
    <article className="border border-black border-t-4 border-t-blue-950 bg-white p-6 transition hover:bg-blue-950/5">
      <p className="text-sm font-black text-black">{item.period}</p>
      <h3 className="mt-3 text-2xl font-black text-black">{item.role}</h3>
      <p className="mt-2 font-medium text-black">{item.org}</p>

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