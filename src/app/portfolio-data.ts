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
      "Projects",
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
        siteUrl: "https://ocw.nagoya-u.jp/",
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
        slideDeck: "attendance" as const,
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
        role: "AI開発インターン",
        org: "OneStruction株式会社",
        period: "2026年",
        points: [
          "複数のベンチマークを用いたLLM評価基盤とリーダーボードに取り組み、モデルの比較・結果管理の仕組みを設計",
          "Gemma 3 1BをLoRAで専門領域に追加学習し、評価結果や失敗例を整理。実験の詳細は公開プロジェクトに掲載",
        ],
        tags: ["Python", "LLM Evaluation", "Leaderboard", "LoRA", "Hugging Face"],
      },
      {
        role: "hayo - グループ待ち合わせ支援アプリ",
        org: "ハッカソン",
        period: "2026年",
        points: [
          "4人チームで位置共有と写真ミッションを組み合わせた待ち合わせ支援iOSアプリを開発し、技術選定を主導",
          "THE HACK東海予選で4位に入賞。企画とUX方針の検討にも参加",
        ],
        tags: ["iOS", "Hackathon", "Location Sharing", "Team Development"],
        slideDeck: "hayo" as const,
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
        url: "https://matsuokakoki.github.io/looptolife/",
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
      "Projects",
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
        siteUrl: "https://ocw.nagoya-u.jp/",
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
        slideDeck: "attendance" as const,
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
        role: "AI Development Intern",
        org: "OneStruction Inc.",
        period: "2026",
        points: [
          "Worked on an LLM evaluation framework and leaderboard using multiple benchmarks, including model comparison and result-management workflows",
          "Fine-tuned Gemma 3 1B with LoRA for a specialized domain and documented evaluation results and failure cases; details are listed under Public Projects",
        ],
        tags: ["Python", "LLM Evaluation", "Leaderboard", "LoRA", "Hugging Face"],
      },
      {
        role: "hayo - Group Meetup Support App",
        org: "Hackathon",
        period: "2026",
        points: [
          "Developed an iOS meetup app combining location sharing and photo missions in a four-person team; led technology selection",
          "Placed 4th in THE HACK Tokai regional round and contributed to product planning and UX direction",
        ],
        tags: ["iOS", "Hackathon", "Location Sharing", "Team Development"],
        slideDeck: "hayo" as const,
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
        url: "https://matsuokakoki.github.io/looptolife/",
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
  {
    name: "Mean-Field MPC for Serverless Workloads",
    url: "https://github.com/matsuokakoki/mean-field-mpc",
    ja: [
      "需要予測・mean-fieldモデル・有限サーバーのキューシミュレーションを統合し、バースト性のあるサーバーレスワークロード向けキャパシティ制御を評価。Docker Composeで再現可能な実装を公開",
      "高負荷シナリオでは、リソース使用量が同程度の条件で、EWMAベースのMF-MPCが反応型制御よりシミュレーション上のp95待ち時間を56.7%削減。実サービスでの性能を示す結果ではないことも明記",
    ],
    en: [
      "Combined demand forecasting, a mean-field model, and finite-server queue simulation to study capacity control for bursty serverless workloads; published a reproducible Docker Compose setup",
      "In a high-load simulation with comparable resource use, EWMA-based MF-MPC reduced p95 wait time by 56.7% versus reactive control. This does not establish performance on a live Azure service",
    ],
    tags: ["Python", "Gaussian Process", "Queueing", "Docker"],
  },
  {
    name: "Career Form Autofill",
    url: "https://github.com/matsuokakoki/career-form-autofill",
    ja: [
      "応募フォームのHTML属性・ラベル・周辺テキストから入力欄を推定し、保存済みプロフィールの候補を提示するChrome拡張機能を開発",
      "推定の確度をプレビューし、利用者が選んだ項目だけを入力。自動送信は行わず、LLMによる補助判定でもプロフィール値は送信しない設計",
    ],
    en: [
      "Built a Chrome extension that infers application form fields from HTML attributes, labels, and nearby text, then suggests values from a saved profile",
      "Shows confidence-scored suggestions and fills only user-selected fields. It never auto-submits forms or sends profile values to an optional LLM classifier",
    ],
    tags: ["Chrome Extension", "JavaScript", "UX", "Privacy"],
  },
  {
    name: "Extreme Hanafuda",
    url: "https://github.com/matsuokakoki/hanahuda",
    ja: [
      "2人で対戦できる花札Webゲームを開発し、ブラウザで遊べる形で公開",
      "ゲームのルールをFirebaseから独立したTypeScriptの処理に分け、ゲーム進行とFirestoreを使った状態同期を実装",
    ],
    en: [
      "Built and published a playable two-player Hanafuda web game",
      "Separated game rules into a Firebase-independent TypeScript engine and implemented game progression with Firestore-backed state synchronization",
    ],
    tags: ["TypeScript", "React", "Firebase", "Game Development"],
  },
  {
    name: "IFC/BIM LoRA Experiment",
    url: "https://github.com/matsuokakoki/ifc-bim-llm-finetuning",
    ja: [
      "IFC/BIMに関する質問応答を対象にGemma 3 1BをLoRAで追加学習。学習・評価の手順、測定結果、出力例と失敗ケースを公開",
      "独立した900件で回答損失を評価し、別の50件の生成比較ではROUGE-Lが0.0973から0.1636、BLEUが0.0174から0.0502に変化。これらの指標だけでは事実の正確さを保証できないことも記載",
    ],
    en: [
      "Fine-tuned Gemma 3 1B with LoRA for IFC/BIM question answering and published the training/evaluation workflow, measurements, output examples, and failure cases",
      "Measured answer loss on 900 separate examples; on a separate 50-generation comparison, ROUGE-L changed from 0.0973 to 0.1636 and BLEU from 0.0174 to 0.0502. These metrics alone do not establish factual accuracy",
    ],
    tags: ["Python", "Gemma 3", "LoRA", "LLM Evaluation"],
  },
  {
    name: "Hayo",
    url: "https://github.com/matsuokakoki/hayo",
    ja: [
      "4人チームで位置共有と写真ミッションを組み合わせた待ち合わせ支援iOSアプリを開発。技術選定を主導し、企画とUX方針の検討にも参加",
      "THE HACK東海予選で4位に入賞。技術とユーザー体験の両面からチームで開発を進めた",
    ],
    en: [
      "Developed an iOS meetup app combining location sharing and photo missions in a four-person team. Led technology selection and contributed to product planning and UX direction",
      "Placed 4th in THE HACK Tokai regional round, balancing implementation with the user experience as a team",
    ],
    tags: ["iOS", "SwiftUI", "Firebase", "Hackathon"],
  },
  {
    name: "LLM Benchmark Leaderboard",
    ja: [
      "5つのベンチマークを用いたLLM評価基盤を設計し、GPUクラスタでオープンウェイトモデルを評価",
      "APIモデルとオープンモデルの評価フローや結果管理を設計。1,000件超のタスクについてトークン使用量と評価コストを試算",
    ],
    en: [
      "Designed an LLM evaluation framework using five benchmarks and evaluated open-weight models on a GPU cluster",
      "Designed evaluation and result-management workflows for API and open models, and estimated token usage and cost across more than 1,000 tasks",
    ],
    tags: ["Python", "vLLM", "Hugging Face", "LLM Evaluation"],
  },
] as const;
