export const profile = {
  name: "松岡功樹(Koki Matsuoka)",
  email: "i5k0o9k@gmail.com",
  university: "Nagoya University",
  github: "https://github.com/matsuokakoki",
  linkedin: "https://www.linkedin.com/in/koki-matsuoka-nagoya-japan/",
};

export const content = {
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
      "名古屋大学で情報学を学びながら、Web開発、インフラ、AI、国際交流など幅広い分野に取り組んでいます。新しいことを学び、実用性のあるシステムを作り、改善し続けることを大切にしています。",
    primaryCta: "Experienceを見る",
    secondaryCta: "Contact",
    location: "Japan / Aichi",
    status: "Open to internships and global opportunities",

    aboutTitle: "About",
    aboutText:
      "幅広い分野への好奇心を大切にし、Web開発、バックエンド、インフラ、AI、英語でのコミュニケーションを実践を通して学んでいます。将来はグローバルなIT企業で、多様な人々と協働しながら社会に大きな影響を与えるプロダクト開発に関わることを目指しています。",
educationTitle: "Education",
education: {
  school: "名古屋大学",
  period: "2024年4月 – 2028年3月卒業予定",
  degree: "情報学部 コンピュータ科学科 学士課程",
  location: "愛知県名古屋市",
},

    features: [
      {
        num: "01",
        title: "Broad Curiosity",
        body: "分野を限定せず、興味を持ったことを深く知ろうとする",
      },
      {
        num: "02",
        title: "Love of Learning",
        body: "新しい知識や技術を学び続け、成長につなげる",
      },
      {
        num: "03",
        title: "Global Perspective",
        body: "英語と異文化交流を通して視野を広げる",
      },
      {
        num: "04",
        title: "Drive to Act",
        body: "関心を持ったことにまず挑戦し、経験から学ぶ",
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
          "Embeddingを用いた講義推薦システムに参加し、APIの運用・改善に必要な記録項目を設計",
        ],
        tags: ["Backend", "Infrastructure", "Embeddings", "API", "Automation"],
      },
      {
    role: "出席管理システム開発",
    org: "個人塾",
    period: "2024年 – 現在",
        points: [
          "Webベースの出席・生徒管理システムをゼロから一人で設計・開発し、1年以上継続運用",
          "出席管理と事務作業のデジタル化により業務効率を改善",
          "データベース設計、フロントエンド、バックエンドロジックを含むフルスタック実装を担当",
          "現在、60人以上の生徒・講師が毎日利用",
        ],
        tags: ["Full Stack", "JavaScript", "Firebase", "Firestore", "Production"],
      },
      {
        role: "Software Engineer Intern / インフラ",
        org: "LINEヤフー株式会社",
        period: "2026年8月 – 2026年9月",
        points: [
          "大規模なサービスを支えるインフラの運用・改善に取り組み、業務効率と信頼性の向上に貢献",
          "AIを活用した運用支援の可能性を検証し、技術・セキュリティ・運用上の課題を整理",
          "インフラ構成の改善案を評価し、性能、可用性、コスト、移行リスクを比較・文書化",
        ],
        tags: ["Infrastructure", "System Operations", "AI", "Performance", "Reliability"],
      },
      {
        role: "LLM評価・リーダーボード",
        org: "個人研究プロジェクト",
        period: "2026年",
        points: [
          "商用利用可能な5つのベンチマークを用いたLLM評価基盤を設計し、GPUクラスタ上でオープンウェイトモデルを評価",
          "APIモデル・オープンモデル双方の評価フロー、結果管理、新モデルを継続追加する運用方式を設計",
          "1,000件超のベンチマークタスクについてトークン使用量と評価コストを試算し、モデル選定と継続運用の判断材料を作成",
        ],
        tags: ["Python", "vLLM", "Hugging Face", "GPU Cluster", "LLM Evaluation"],
      },
      {
        role: "ドメイン特化LLMファインチューニング",
        org: "個人研究プロジェクト",
        period: "2026年",
        points: [
          "Gemma 3 1B InstructをLoRAで特定領域へ適応し、33,600件の学習データで学習",
          "別形式の900件では回答部分のlossを評価。生成50件の簡易指標ではROUGE-Lが0.0973 → 0.1636、BLEUが0.0174 → 0.0502",
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
    skills: ["Linux", "Docker", "Git / GitHub", "Ansible", "REST API", "Firebase / Firestore", "PostgreSQL / PostGIS", "SQLite"],
  },
  {
    name: "AI / ML",
    skills: ["Hugging Face", "vLLM", "LoRA / PEFT", "RAG", "Embeddings"],
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
      "I study informatics at Nagoya University and explore a wide range of fields, including web development, infrastructure, AI, and international exchange. I value learning new things, building useful systems, and improving them continuously.",
    primaryCta: "View Experience",
    secondaryCta: "Contact",
    location: "Japan / Aichi",
    status: "Open to internships and global opportunities",

    aboutTitle: "About",
    aboutText:
      "I am driven by curiosity across a broad range of fields and learn web development, backend systems, infrastructure, AI, and English communication through hands-on experience. My goal is to work at a global technology company and collaborate with people from diverse backgrounds on products with meaningful social impact.",

    educationTitle: "Education",
    education: {
      school: "Nagoya University",
      period: "Apr 2024 – Expected Mar 2028",
      degree: "B.S. in Computer Science, School of Informatics",
      location: "Nagoya, Japan",
    },

    features: [
      {
        num: "01",
        title: "Broad Curiosity",
        body: "Exploring new subjects deeply without limiting myself to a single field",
      },
      {
        num: "02",
        title: "Love of Learning",
        body: "Continuously learning new knowledge and technologies to grow",
      },
      {
        num: "03",
        title: "Global Perspective",
        body: "Broadening my perspective through English and cross-cultural exchange",
      },
      {
        num: "04",
        title: "Drive to Act",
        body: "Taking on new challenges and learning through experience",
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
          "Contributed to an embedding-based course recommendation system and designed data fields to support API operation and improvement",
        ],
        tags: ["Backend", "Infrastructure", "Embeddings", "API", "Automation"],
      },
      {
        role: "Student Attendance Management System Development",
        org: "Private Tutoring School",
        period: "2024 – Present",
        points: [
          "Solely designed and developed a web-based attendance and student-management system from scratch, and have maintained it for more than one year",
          "Improved operational efficiency by digitizing attendance tracking and administrative workflows",
          "Managed the full-stack implementation, including database design, frontend development, and backend logic",
          "The system is now used daily by more than 60 students and instructors",
        ],
        tags: ["Full Stack", "JavaScript", "Firebase", "Firestore", "Production"],
      },
      {
        role: "Software Engineer Intern, Infrastructure",
        org: "LINE Yahoo Corporation",
        period: "Aug 2026 – Sep 2026",
        points: [
          "Worked on the operation and improvement of infrastructure supporting large-scale services, contributing to greater efficiency and reliability",
          "Explored the use of AI for operational support and identified technical, security, and operational considerations",
          "Evaluated infrastructure improvement options and documented trade-offs in performance, availability, cost, and migration risk",
        ],
        tags: ["Infrastructure", "System Operations", "AI", "Performance", "Reliability"],
      },
      {
        role: "LLM Evaluation & Leaderboard",
        org: "Personal Research Project",
        period: "2026",
        points: [
          "Designed an LLM evaluation framework across five commercially usable benchmarks and ran open-weight model evaluations on a GPU cluster",
          "Designed workflows for API and open models, result tracking, and the ongoing addition of newly released models",
          "Estimated token usage and evaluation cost across more than 1,000 benchmark tasks to guide model selection and sustainable leaderboard operation",
        ],
        tags: ["Python", "vLLM", "Hugging Face", "GPU Cluster", "LLM Evaluation"],
      },
      {
        role: "Domain-Specific LLM Fine-Tuning",
        org: "Personal Research Project",
        period: "2026",
        points: [
          "Adapted Gemma 3 1B Instruct to a specialized domain with LoRA using 33,600 training examples",
          "Evaluated answer-only loss on 900 differently formatted examples. On 50 generated answers, simple ROUGE-L rose from 0.0973 to 0.1636 and BLEU from 0.0174 to 0.0502",
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
        skills: ["Linux", "Docker", "Git / GitHub", "Ansible", "REST APIs", "Firebase / Firestore", "PostgreSQL / PostGIS", "SQLite"],
      },
      {
        name: "AI / ML",
        skills: ["Hugging Face", "vLLM", "LoRA / PEFT", "RAG", "Embeddings"],
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


export const projects = [
  { name: "Career Form Autofill", url: "https://github.com/matsuokakoki/career-form-autofill", ja: "応募フォームの候補を確認してから入力するChrome拡張。送信は行わない。", en: "A Chrome extension that previews suggested form values before the user chooses what to fill; it never submits the form." },
  { name: "Extreme Hanafuda", url: "https://github.com/matsuokakoki/hanahuda", ja: "2人対戦ゲーム。TypeScriptの純粋なゲームロジックとFirebaseの認可・同期を分離。", en: "A two-player game with pure TypeScript rules and Firebase-based authorization and synchronization." },
  { name: "IFC/BIM LoRA Experiment", url: "https://github.com/matsuokakoki/ifc-bim-llm-finetuning", ja: "重複除去後のLoRA実験。改善値と誤答、評価の限界を公開。", en: "A LoRA experiment documenting deduplication, measured improvements, wrong answers, and evaluation limits." },
  { name: "ECG SNN Research Prototype", url: "https://github.com/matsuokakoki/ecg_snn_project", ja: "ECG異常検知のSNN/CNN比較試作。評価プロトコルと結果は整理中。", en: "An ECG SNN/CNN research prototype; the evaluation protocol and results are being reconciled." },
] as const;
