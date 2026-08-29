"use client";

import { useState } from "react";
import type { ReactNode } from "react";
import Image from "next/image";

type Lang = "ja" | "en";

const profile = {
  name: "松岡功樹(Koki Matsuoka)",
  email: "i5k0o9k@gmail.com",
  university: "Nagoya University",
  github: "https://github.com/matsuokakoki",
  linkedin: "https://www.linkedin.com/in/koki-matsuoka-nagoya-japan/",
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
    badge: "Computer Science Student / Software Engineer",
    heroTitle: "実運用を支えるソフトウェアとAIをつくる",
    heroLead:
      "名古屋大学でコンピュータ科学を学びながら、バックエンド・インフラ、Observability、フルスタック開発、建設分野のLLM評価・適応に取り組んでいます。作って終わりではなく、実際に使われる環境へ届け、計測し、改善することを大切にしています。",
    primaryCta: "Experienceを見る",
    secondaryCta: "Contact",
    location: "Japan / Aichi",
    status: "Open to internships and global opportunities",

    aboutTitle: "About",
    aboutText:
      "バックエンド・インフラからフルスタック開発、AI/MLまで、実際の利用者と運用課題に向き合いながら経験を広げています。大学OpenCourseWareや個人塾の業務システムを継続運用し、LINEヤフーでは大規模ログ基盤のObservability改善に従事しました。建設分野では、LLMの評価基盤とドメイン適応を定量的に検証しています。",
educationTitle: "Education",
education: {
  school: "名古屋大学",
  period: "2024年4月 – 2029年3月卒業予定",
  degree: "情報学部 コンピュータ科学科 学士課程",
  location: "愛知県名古屋市",
},

    features: [
      {
        num: "01",
        title: "Production Ownership",
        body: "設計・開発だけでなく、本番導入と継続運用まで責任を持つ",
      },
      {
        num: "02",
        title: "Observability",
        body: "ログとメトリクスからシステムを理解し、改善につなげる",
      },
      {
        num: "03",
        title: "Applied AI",
        body: "LLMを評価指標と実験結果に基づいて実用課題へ適用する",
      },
      {
        num: "04",
        title: "Global Collaboration",
        body: "英語と異文化経験を生かし、多様なチームで協働する",
      },
    ],

    experienceTitle: "Technical Experience",
    experiences: [
      {
    role: "NUOCW Web運用スタッフ",
    org: "名古屋大学 / サーバーサイド班",
        period: "2025年 – 現在",
        points: [
          "OpenCourseWareのバックエンド・インフラを保守・改善し、SSL証明書関連の運用自動化とサーバー移行を支援",
          "講義Markdownの変更を検知してデータベースへ同期する仕組みを開発",
          "Embeddingを用いた講義推薦システムに参加し、リクエスト追跡、レイテンシ、SQL実行、結果件数を記録するAPI Observability項目を設計",
        ],
        tags: ["Backend", "Infrastructure", "Embeddings", "API Observability", "Automation"],
      },
      {
    role: "出席管理システム開発",
    org: "個人塾",
    period: "2024年 – 現在",
        points: [
          "出席・生徒管理Webシステムを一人で設計・開発し、1年以上継続運用",
          "JavaScriptとFirebase / Firestoreを用いて手作業の業務をデジタル化し、現在は60人以上の生徒・講師が毎日利用",
        ],
        tags: ["Full Stack", "JavaScript", "Firebase", "Firestore", "Production"],
      },
      {
        role: "Software Engineer Intern / Observability・ログ基盤",
        org: "LINEヤフー株式会社",
        period: "2026年8月 – 2026年9月",
        points: [
          "10万台をはるかに超えるサーバーを対象とする監査ログ確認用Splunkダッシュボードを構築・最適化し、本番Splunk環境へデプロイ。ログ配送遅延を考慮しつつ処理時間を73%削減",
          "MCPを用いたAIエージェントとSplunkの連携をPoCとして検証し、認証・セキュリティ制約を整理した上で、OSS本体を改変せずCodex CLIからHTTP経由のログ検索を実現",
          "ログ配送システムのステートレス化とPaaS / CaaS移行を負荷試験・ログ欠損比較で評価し、スケーラビリティ、可用性、コスト、移行リスクを文書化",
        ],
        tags: ["Splunk", "SPL", "Observability", "MCP", "Codex CLI", "PaaS / CaaS"],
      },
      {
        role: "建設AI LLM評価・リーダーボード",
        org: "個人研究プロジェクト",
        period: "2026年",
        points: [
          "商用利用可能な5つのベンチマークを用いたAEC / BIM向けLLM評価基盤を設計し、GPUクラスタ上でオープンウェイトモデルを評価",
          "APIモデル・オープンモデル双方の評価フロー、結果管理、新モデルを継続追加する運用方式を設計",
          "1,000件超のベンチマークタスクについてトークン使用量と評価コストを試算し、モデル選定と継続運用の判断材料を作成",
        ],
        tags: ["Python", "vLLM", "Hugging Face", "GPU Cluster", "LLM Evaluation"],
      },
      {
        role: "IFC / BIM特化LLMファインチューニング",
        org: "個人研究プロジェクト",
        period: "2026年",
        points: [
          "Gemma 3 1B InstructをLoRAでIFC / BIM領域へ適応し、33,600件の学習データで学習",
          "学習とは別の900件で評価した結果、ROUGE-Lを68%改善（0.0973 → 0.1636）、BLEUを2.9倍に向上（0.0174 → 0.0502）",
        ],
        tags: ["Python", "Gemma 3", "LoRA", "PEFT", "Hugging Face", "LLM Evaluation"],
      },
      {
        role: "hayo - グループ待ち合わせ支援アプリ",
        org: "ハッカソン",
        period: "2026年",
        points: [
          "グループメンバーの位置情報と到着状況を共有するアプリを開発",
          "東海予選4位・全国15位を獲得",
        ],
        tags: ["Hackathon", "Location Sharing", "Team Development"],
      },
      {
        role: "大学構内施設検索Webアプリ",
        org: "大学チーム開発 / 6人チーム",
        period: "2026年",
        points: [
          "Next.js、TypeScript、Supabase / PostGIS、MapLibre GL JSを用いた位置情報ベースの大学構内施設検索アプリを開発",
        ],
        tags: ["Next.js", "TypeScript", "Supabase", "PostGIS", "MapLibre GL JS"],
      },
    ],

    internationalTitle: "International Experience",
    international: [
      {
        title: "Asia Undergraduate Summit",
        org: "National University of Singapore",
        period: "2026",
        points: [
          "Top 3プロジェクトに選出",
          "Loop to Lifeを開発し、2026年12月にラオスで2週間の現地実施を予定",
        ],
      },
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
    skills: ["Python", "Go", "C++", "C", "JavaScript", "TypeScript"],
  },
  {
    name: "Web開発",
    skills: ["Next.js", "React", "TypeScript", "Tailwind CSS", "HTML", "CSS"],
  },
  {
    name: "インフラ / バックエンド",
    skills: ["Linux", "Docker", "Git / GitHub", "Splunk / SPL", "Ansible", "REST API", "Firebase / Firestore", "PostgreSQL / PostGIS", "SQLite"],
  },
  {
    name: "AI / ML",
    skills: ["Hugging Face", "vLLM", "LoRA / PEFT", "RAG", "Embeddings", "MCP"],
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
    badge: "Computer Science Student / Software Engineer",
    heroTitle: "Building production software and applied AI",
    heroLead:
      "I study computer science at Nagoya University and work across backend infrastructure, observability, full-stack development, and LLM evaluation for construction. I care about shipping systems into real use, measuring how they perform, and improving them continuously.",
    primaryCta: "View Experience",
    secondaryCta: "Contact",
    location: "Japan / Aichi",
    status: "Open to internships and global opportunities",

    aboutTitle: "About",
    aboutText:
      "My experience spans backend infrastructure, full-stack product development, and applied AI/ML. I maintain production systems for a university OpenCourseWare platform and a tutoring school, improved observability for large-scale logging infrastructure at LINE Yahoo, and evaluate and adapt LLMs for construction-domain tasks using quantitative benchmarks.",

    educationTitle: "Education",
    education: {
      school: "Nagoya University",
      period: "Apr 2024 – Expected Mar 2029",
      degree: "B.S. in Computer Science, School of Informatics",
      location: "Nagoya, Japan",
    },

    features: [
      {
        num: "01",
        title: "Production Ownership",
        body: "Taking responsibility from design and implementation through deployment and ongoing operation",
      },
      {
        num: "02",
        title: "Observability",
        body: "Using logs and metrics to understand systems and drive measurable improvements",
      },
      {
        num: "03",
        title: "Applied AI",
        body: "Applying LLMs to practical problems through benchmarks and evidence-based experimentation",
      },
      {
        num: "04",
        title: "Global Collaboration",
        body: "Working across languages and cultures with an open, international perspective",
      },
    ],

    experienceTitle: "Technical Experience",
    experiences: [
      {
        role: "NUOCW Web Operations Staff",
        org: "Nagoya University / Server-side Team",
        period: "2025 – Present",
        points: [
          "Maintain OpenCourseWare backend and infrastructure; automated SSL certificate operations and supported server migration",
          "Built Markdown change detection that synchronizes lecture updates to a database",
          "Contributed to an embedding-based course recommendation system and designed API observability fields for request tracing, latency, SQL execution, and result counts",
        ],
        tags: ["Backend", "Infrastructure", "Embeddings", "API Observability", "Automation"],
      },
      {
        role: "Student Attendance Management System Development",
        org: "Private Tutoring School",
        period: "2024 – Present",
        points: [
          "Solely designed and built an attendance and student-management web system, and have maintained it for more than one year",
          "Digitized manual workflows with JavaScript and Firebase / Firestore; the system is used daily by more than 60 students and instructors",
        ],
        tags: ["Full Stack", "JavaScript", "Firebase", "Firestore", "Production"],
      },
      {
        role: "Software Engineer Intern, Observability / Logging Infrastructure",
        org: "LINE Yahoo Corporation",
        period: "Aug 2026 – Sep 2026",
        points: [
          "Built and optimized a self-service Splunk audit-log dashboard across well over 100K servers; deployed it to the production Splunk environment and reduced processing time by 73% while accounting for delivery latency",
          "Prototyped AI agent-Splunk integration via MCP, covering architecture, authentication constraints, security review, and HTTP-based log search from Codex CLI without modifying upstream OSS",
          "Evaluated a stateless redesign and PaaS / CaaS migration of a log-routing system through load tests and log-loss comparisons, documenting scalability, availability, cost, and migration risks",
        ],
        tags: ["Splunk", "SPL", "Observability", "MCP", "Codex CLI", "PaaS / CaaS"],
      },
      {
        role: "Construction AI LLM Evaluation & Leaderboard",
        org: "Personal Research Project",
        period: "2026",
        points: [
          "Designed an AEC / BIM LLM evaluation framework across five commercially usable benchmarks and ran open-weight model evaluations on a GPU cluster",
          "Designed workflows for API and open models, result tracking, and the ongoing addition of newly released models",
          "Estimated token usage and evaluation cost across more than 1,000 benchmark tasks to guide model selection and sustainable leaderboard operation",
        ],
        tags: ["Python", "vLLM", "Hugging Face", "GPU Cluster", "LLM Evaluation"],
      },
      {
        role: "IFC / BIM Domain-Specific LLM Fine-Tuning",
        org: "Personal Research Project",
        period: "2026",
        points: [
          "Adapted Gemma 3 1B Instruct to the IFC / BIM domain with LoRA using 33,600 training examples",
          "On 900 separate evaluation examples, improved ROUGE-L by 68% (0.0973 → 0.1636) and increased BLEU by 2.9× (0.0174 → 0.0502)",
        ],
        tags: ["Python", "Gemma 3", "LoRA", "PEFT", "Hugging Face", "LLM Evaluation"],
      },
      {
        role: "hayo - Group Meetup Support App",
        org: "Hackathon",
        period: "2026",
        points: [
          "Built an app for sharing group members' locations and arrival status",
          "Placed 4th in the Tokai regional round and 15th nationwide",
        ],
        tags: ["Hackathon", "Location Sharing", "Team Development"],
      },
      {
        role: "Campus Facility Search Web App",
        org: "University Team Project / 6-member Team",
        period: "2026",
        points: [
          "Built a location-based campus facility search app using Next.js, TypeScript, Supabase / PostGIS, and MapLibre GL JS",
        ],
        tags: ["Next.js", "TypeScript", "Supabase", "PostGIS", "MapLibre GL JS"],
      },
    ],

    internationalTitle: "International Experience",
    international: [
      {
        title: "Asia Undergraduate Summit",
        org: "National University of Singapore",
        period: "2026",
        points: [
          "Selected as a Top 3 project",
          "Developing Loop to Life, with a two-week field implementation planned in Laos in Dec 2026",
        ],
      },
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
        skills: ["Python", "Go", "C++", "C", "JavaScript", "TypeScript"],
      },
      {
        name: "Web Development",
        skills: ["Next.js", "React", "TypeScript", "Tailwind CSS", "HTML", "CSS"],
      },
      {
        name: "Infrastructure / Backend",
        skills: ["Linux", "Docker", "Git / GitHub", "Splunk / SPL", "Ansible", "REST APIs", "Firebase / Firestore", "PostgreSQL / PostGIS", "SQLite"],
      },
      {
        name: "AI / ML",
        skills: ["Hugging Face", "vLLM", "LoRA / PEFT", "RAG", "Embeddings", "MCP"],
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
