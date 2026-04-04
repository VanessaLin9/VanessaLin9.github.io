import { useEffect, useState } from "react";

const socialLinks = {
  github: "https://github.com/VanessaLin9",
  linkedin: "https://www.linkedin.com/in/tzu-chi-lin-vanessa/?locale=en_US",
};

function GitHubIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        fill="currentColor"
        d="M12 .5C5.65.5.5 5.65.5 12A11.5 11.5 0 0 0 8.36 22.1c.58.1.79-.25.79-.56v-2.17c-3.18.69-3.85-1.35-3.85-1.35-.52-1.3-1.27-1.65-1.27-1.65-1.03-.7.08-.69.08-.69 1.14.08 1.74 1.17 1.74 1.17 1.01 1.73 2.65 1.23 3.29.94.1-.73.4-1.23.72-1.51-2.54-.29-5.21-1.27-5.21-5.66 0-1.25.45-2.28 1.17-3.08-.12-.29-.5-1.47.11-3.07 0 0 .96-.31 3.14 1.18a10.92 10.92 0 0 1 5.72 0c2.18-1.49 3.14-1.18 3.14-1.18.61 1.6.23 2.78.11 3.07.73.8 1.17 1.83 1.17 3.08 0 4.4-2.68 5.37-5.23 5.65.41.35.77 1.03.77 2.07v3.07c0 .31.21.67.8.56A11.5 11.5 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z"
      />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        fill="currentColor"
        d="M4.98 3.5A2.48 2.48 0 1 0 5 8.46a2.48 2.48 0 0 0-.02-4.96ZM2.75 9.75h4.5v11.75h-4.5V9.75Zm7.32 0h4.31v1.6h.06c.6-1.13 2.07-2.32 4.26-2.32 4.56 0 5.4 3 5.4 6.89v5.58h-4.5v-4.95c0-1.18-.02-2.7-1.65-2.7-1.65 0-1.9 1.29-1.9 2.62v5.03h-4.5V9.75h4.52Z"
      />
    </svg>
  );
}

const localeContent = {
  zh: {
    brandTitle: "Personal Site Prototype",
    buttons: {
      work: "看代表作品",
      story: "看我的故事",
    },
    labels: {
      why: "Why Vanessa",
      howIWork: "How I Work",
      selectedProject: "Selected Project",
      projectOrbit: "Project Orbit",
      lab: "Vanessa's Lab",
      noPublicLink: "目前沒有公開連結，這邊先保留作品說明。",
    },
    slides: [
      {
        id: "intro",
        label: "首頁",
        eyebrow: "Software Engineer / Product Engineer",
        introName: "Hi, I'm Vanessa.",
        title: "把 workflow、整合需求和產品規則，做成真的能用的系統。",
        body: "我是一位具備後端基礎與全端實作經驗的軟體工程師，近期以 Node.js / TypeScript 為主，習慣先拆解流程、定義邊界，再把複雜需求落成可運作的產品功能。",
        subBody:
          "以前在 biomedical labs 做研究，現在則把那種觀察、整理與驗證的習慣帶進工程工作裡，持續做 workflow-oriented 的產品、整合與實用工具。",
        pills: [
          "Node.js / TypeScript",
          "Software Engineer / Product Engineer",
          "ex-Lab Researcher",
          "workflow / integration / product systems",
        ],
        noteTitle: "快速認識 Vanessa",
        noteMeta: "Quick Profile",
        profileRows: [
          {
            label: "Focus",
            value: "workflow-oriented product development",
          },
          {
            label: "Current",
            value: "React dApp, NestJS API, SDK, AI workflow design",
          },
          {
            label: "Strength",
            value: "system boundaries, integration, product logic",
          },
        ],
        noteFooter:
          "習慣從真實需求出發，先整理流程，再做出可迭代的產品。",
      },
      {
        id: "about",
        label: "關於我",
        title: "從 biomedical labs 到 software engineering",
        paragraphs: [
          "研究背景讓我很習慣先觀察、整理脈絡、測試假設，再決定怎麼實作。這個習慣到現在都還在，也變成我做工程時很重要的底色。",
          "我不是只想把功能做出來而已，也會一直想：資料怎麼流、使用者會怎麼理解、這個工具到底會不會真的被用。",
        ],
        principles: [
          {
            title: "Observe",
            body: "先看真實需求與重複痛點，不急著直接開寫。",
          },
          {
            title: "Structure",
            body: "把模糊需求整理成流程、資料模型與實作切點。",
          },
          {
            title: "Ship",
            body: "先做出可用版本，再持續調整產品體驗與穩定性。",
          },
        ],
      },
      {
        id: "work",
        label: "經歷",
        title: "目前的能力輪廓，主要來自兩段工程工作加上更早以前的研究經歷。",
        timeline: [
          {
            meta: "2025 / 07 - Present",
            title: "LAVARAGE",
            body: "在跨國團隊與全英文工作環境中參與 Web3 / DeFi 產品開發，處理 React dApp、NestJS API、資料流程、SDK 串接與 AI support workflow。",
          },
          {
            meta: "2023 / 07 - 2025 / 02",
            title: "TitanSoft",
            body: "以 C# / .NET 維護與重構既有系統，做後端流程調整、第三方整合、unit test 與 E2E test 補強。",
          },
          {
            meta: "2011 - 2020",
            title: "Research Labs",
            body: "在醫學院、醫院與研究機構做生物醫學研究，培養了系統化分析、文件整理與快速學習陌生領域的能力。",
          },
        ],
      },
      {
        id: "projects",
        label: "作品",
        title: "我更想把作品做成一個可以探索、也可以直接點進去看的展示區。",
        projects: [
          {
            id: "trackvest",
            label: "Flagship",
            title: "TrackVest",
            body: "個人記帳與投資系統，從帳戶、資產、交易到總帳資料流都自己規劃。",
            detail:
              "一個正在持續開發中的個人全端產品。重點不只是 CRUD，而是把帳戶、資產、交易、CSV 匯入與 GL 邏輯整理成能長期擴充的產品結構。",
            tags: ["React", "NestJS", "PostgreSQL"],
            x: "47%",
            y: "48%",
            size: "lg",
            links: [
              {
                label: "Web Repo",
                url: "https://github.com/VanessaLin9/trackvest-web",
              },
              {
                label: "API Repo",
                url: "https://github.com/VanessaLin9/trackvest-api",
              },
            ],
          },
          {
            id: "jd-saver",
            label: "Workflow Tool",
            accent: true,
            title: "JD Saver",
            body: "把正在看的職缺頁面直接寫進 Google Sheet 的 Chrome extension，讓求職資料收集流程更順。",
            detail:
              "這個專案很能代表我現在的方向。它是從真實 workflow 長出來的工具，整合 Chrome extension、Google OAuth、Google Sheets API、站點 extractor 與發佈前準備，把麻煩的收集流程整理成一個可重複使用的產品。",
            tags: ["Chrome Extension", "Google Sheets API", "Workflow Automation"],
            x: "26%",
            y: "27%",
            size: "md",
            links: [
              {
                label: "Repo",
                url: "https://github.com/VanessaLin9/job-application-automation",
              },
            ],
          },
          {
            id: "lavi",
            label: "AI Workflow",
            accent: true,
            title: "Lavi",
            body: "內部 AI support agent，處理 Telegram bug intake、向量檢索、重複判斷與 Linear issue sync。",
            detail:
              "這條線很能代表我的 ownership。它不是只串一個 LLM，而是把 realtime flow、background flow、duplicate detection、guardrails 和 issue sync 都整理成完整 workflow。",
            tags: ["OpenClaw", "ChromaDB", "LLM Workflow"],
            x: "74%",
            y: "26%",
            size: "md",
            links: [],
          },
          {
            id: "split-bill",
            label: "Utility",
            title: "Split-Bill",
            body: "為朋友出遊分帳需求而做的純前端工具，重點是簡單、快速、沒有登入門檻。",
            detail:
              "從真實情境長出來的工具型專案，強調使用門檻低、操作直接、沒有登入負擔。這類『小而真的有用』的專案很像我平常做事的風格。",
            tags: ["Vue 3", "Vite", "GitHub Pages"],
            x: "82%",
            y: "64%",
            size: "sm",
            links: [
              {
                label: "Repo",
                url: "https://github.com/VanessaLin9/split-bill",
              },
              {
                label: "Live Demo",
                url: "https://vanessalin9.github.io/split-bill/",
              },
            ],
          },
          {
            id: "board-game-record",
            label: "Full-Stack",
            title: "Board Game Record",
            body: "桌遊紀錄小網站，包含登入、紀錄查詢與玩家管理流程。",
            detail:
              "比較早期的個人獨立全端專案，用 Express、MySQL、Sequelize 和 Handlebars 把登入、遊戲紀錄與玩家管理流程串起來。",
            tags: ["Express", "MySQL", "Sequelize"],
            x: "18%",
            y: "68%",
            size: "sm",
            links: [
              {
                label: "Repo",
                url: "https://github.com/VanessaLin9/GHrecord-P05",
              },
            ],
          },
          {
            id: "simple-twitter",
            label: "Collab",
            title: "Simple Twitter",
            body: "多人協作的 Twitter clone，負責後端功能與資料表邏輯。",
            detail:
              "和團隊遠端協作完成的 full-stack clone project，包含登入、推文互動、追蹤與 Socket.IO 聊天功能，是很好的多人協作練習。",
            tags: ["Node.js", "MySQL", "Socket.IO"],
            x: "60%",
            y: "83%",
            size: "sm",
            links: [
              {
                label: "Repo",
                url: "https://github.com/VanessaLin9/twitter-fullstack-2020",
              },
            ],
          },
          {
            id: "gcal-to-notion",
            label: "Tooling",
            title: "GCal-to-Notion",
            body: "把 Google Calendar 行程同步到 Notion 的小工具。",
            detail:
              "偏自動化與整合型 side project，重點不是畫面，而是把兩個日常系統之間的資料流接起來，讓工作流程更順。",
            tags: ["Python", "Notion", "Automation"],
            x: "34%",
            y: "84%",
            size: "sm",
            links: [],
          },
        ],
      },
    ],
  },
  en: {
    brandTitle: "Personal Site Prototype",
    buttons: {
      work: "View Selected Work",
      story: "About Me",
    },
    labels: {
      why: "Why Vanessa",
      howIWork: "How I Work",
      selectedProject: "Selected Project",
      projectOrbit: "Project Orbit",
      lab: "Vanessa's Lab",
      noPublicLink: "No public link for now, so this panel keeps the project summary instead.",
    },
    slides: [
      {
        id: "intro",
        label: "Intro",
        eyebrow: "Software Engineer / Product Engineer",
        introName: "Hi, I'm Vanessa.",
        title: "I turn workflows, integrations, and product rules into systems people can actually use.",
        body: "I am a software engineer with a strong backend foundation and hands-on full-stack experience. Recently, I have been working mainly with Node.js / TypeScript, and I like to define system boundaries first, then turn messy requirements into usable product flows.",
        subBody:
          "Before software, I worked in biomedical labs. I still bring that habit of observing, structuring, and validating into engineering while building workflow-oriented products, integrations, and practical tools.",
        pills: [
          "Node.js / TypeScript",
          "Software Engineer / Product Engineer",
          "ex-Lab Researcher",
          "workflow / integration / product systems",
        ],
        noteTitle: "Quick Profile",
        noteMeta: "At a Glance",
        profileRows: [
          {
            label: "Focus",
            value: "workflow-oriented product development",
          },
          {
            label: "Current",
            value: "React dApp, NestJS API, SDK, AI workflow design",
          },
          {
            label: "Strength",
            value: "system boundaries, integration, product logic",
          },
        ],
        noteFooter:
          "I usually start from real needs, map the flow, and ship products that can keep evolving.",
      },
      {
        id: "about",
        label: "About",
        title: "From biomedical labs to software engineering",
        paragraphs: [
          "My research background trained me to observe first, understand the context, test assumptions, and only then decide how to build. That habit still shapes how I work as an engineer today.",
          "I do not just want to ship a feature. I also care about how data moves, how users will understand the flow, and whether the product will actually be useful in real life.",
        ],
        principles: [
          {
            title: "Observe",
            body: "Start with real needs and repeated pain points instead of jumping straight into code.",
          },
          {
            title: "Structure",
            body: "Turn fuzzy requirements into workflows, data models, and clear implementation steps.",
          },
          {
            title: "Ship",
            body: "Get a usable version out first, then keep refining the product experience and stability.",
          },
        ],
      },
      {
        id: "work",
        label: "Work",
        title: "My current engineering profile comes from two software roles, built on top of an earlier research background.",
        timeline: [
          {
            meta: "2025 / 07 - Present",
            title: "LAVARAGE",
            body: "Working in a cross-border, English-first team on Web3 / DeFi products across React dApp, NestJS API, data workflows, SDK integration, and AI support tooling.",
          },
          {
            meta: "2023 / 07 - 2025 / 02",
            title: "TitanSoft",
            body: "Maintained and refactored existing C# / .NET systems, handling backend flow changes, third-party integrations, and stronger unit / E2E test coverage.",
          },
          {
            meta: "2011 - 2020",
            title: "Research Labs",
            body: "Worked in biomedical research environments, which shaped my habits around structured analysis, documentation, and learning unfamiliar domains quickly.",
          },
        ],
      },
      {
        id: "projects",
        label: "Selected Work",
        title: "I would rather make this an interactive showcase than a static grid of project cards.",
        projects: [
          {
            id: "trackvest",
            label: "Flagship",
            title: "TrackVest",
            body: "A personal bookkeeping and investing system where I designed the data flow across accounts, assets, transactions, and general ledger logic.",
            detail:
              "This is an ongoing full-stack product. What matters here is not basic CRUD, but structuring accounts, assets, transactions, CSV imports, and general-ledger logic into a product that can keep growing.",
            tags: ["React", "NestJS", "PostgreSQL"],
            x: "47%",
            y: "48%",
            size: "lg",
            links: [
              {
                label: "Web Repo",
                url: "https://github.com/VanessaLin9/trackvest-web",
              },
              {
                label: "API Repo",
                url: "https://github.com/VanessaLin9/trackvest-api",
              },
            ],
          },
          {
            id: "jd-saver",
            label: "Workflow Tool",
            accent: true,
            title: "JD Saver",
            body: "A Chrome extension that writes the job page you are viewing directly into Google Sheets and makes job tracking much smoother.",
            detail:
              "This project reflects my current direction especially well. It grew from a real workflow and combines a Chrome extension, Google OAuth, the Google Sheets API, site-specific extractors, and release prep into one repeatable tool.",
            tags: ["Chrome Extension", "Google Sheets API", "Workflow Automation"],
            x: "26%",
            y: "27%",
            size: "md",
            links: [
              {
                label: "Repo",
                url: "https://github.com/VanessaLin9/job-application-automation",
              },
            ],
          },
          {
            id: "lavi",
            label: "AI Workflow",
            accent: true,
            title: "Lavi",
            body: "An internal AI support agent for Telegram bug intake, retrieval, duplicate checks, and Linear issue sync.",
            detail:
              "This work shows a lot of my ownership. It is not just about plugging in an LLM. It involves structuring realtime and background flows, duplicate detection, guardrails, and issue sync into a complete support workflow.",
            tags: ["OpenClaw", "ChromaDB", "LLM Workflow"],
            x: "74%",
            y: "26%",
            size: "md",
            links: [],
          },
          {
            id: "split-bill",
            label: "Utility",
            title: "Split-Bill",
            body: "A lightweight trip expense tool built for friends, with almost no friction and no login barrier.",
            detail:
              "This project came from a real-life need. It focuses on being fast, clear, and easy to use, which is very close to how I think about practical tools.",
            tags: ["Vue 3", "Vite", "GitHub Pages"],
            x: "82%",
            y: "64%",
            size: "sm",
            links: [
              {
                label: "Repo",
                url: "https://github.com/VanessaLin9/split-bill",
              },
              {
                label: "Live Demo",
                url: "https://vanessalin9.github.io/split-bill/",
              },
            ],
          },
          {
            id: "board-game-record",
            label: "Full-Stack",
            title: "Board Game Record",
            body: "A board game record site with login, history lookup, and player management flows.",
            detail:
              "One of my earlier independent full-stack projects, built with Express, MySQL, Sequelize, and Handlebars to connect authentication, game records, and player management.",
            tags: ["Express", "MySQL", "Sequelize"],
            x: "18%",
            y: "68%",
            size: "sm",
            links: [
              {
                label: "Repo",
                url: "https://github.com/VanessaLin9/GHrecord-P05",
              },
            ],
          },
          {
            id: "simple-twitter",
            label: "Collab",
            title: "Simple Twitter",
            body: "A team-built Twitter clone where I mainly worked on backend features and database logic.",
            detail:
              "This was a useful collaboration project for remote teamwork, covering authentication, tweet interactions, follow flows, and Socket.IO chat features.",
            tags: ["Node.js", "MySQL", "Socket.IO"],
            x: "60%",
            y: "83%",
            size: "sm",
            links: [
              {
                label: "Repo",
                url: "https://github.com/VanessaLin9/twitter-fullstack-2020",
              },
            ],
          },
          {
            id: "gcal-to-notion",
            label: "Tooling",
            title: "GCal-to-Notion",
            body: "A small tool for syncing Google Calendar events into Notion.",
            detail:
              "This project is more about automation and integration than visuals. The value is in connecting two everyday systems so the workflow feels smoother.",
            tags: ["Python", "Notion", "Automation"],
            x: "34%",
            y: "84%",
            size: "sm",
            links: [],
          },
        ],
      },
    ],
  },
};

function getLocaleFromUrl() {
  if (typeof window === "undefined") return null;
  const params = new URLSearchParams(window.location.search);
  const urlLocale = params.get("lang");
  return urlLocale === "zh" || urlLocale === "en" ? urlLocale : null;
}

function useSlideNavigation(total) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (window.innerWidth <= 1100) return undefined;

    let locked = false;
    let touchStartX = 0;

    const goTo = (nextIndex) => {
      if (locked) return;
      locked = true;
      setCurrentIndex((prev) => {
        const target = Math.max(0, Math.min(nextIndex, total - 1));
        return target === prev ? prev : target;
      });
      window.setTimeout(() => {
        locked = false;
      }, 700);
    };

    const handleWheel = (event) => {
      if (Math.abs(event.deltaY) < 20 && Math.abs(event.deltaX) < 20) return;
      event.preventDefault();
      const direction =
        Math.abs(event.deltaX) > Math.abs(event.deltaY)
          ? event.deltaX
          : event.deltaY;

      setCurrentIndex((prev) => {
        const next = direction > 0 ? prev + 1 : prev - 1;
        return Math.max(0, Math.min(next, total - 1));
      });
    };

    const handleKeydown = (event) => {
      if (event.key === "ArrowRight" || event.key === "PageDown") {
        goTo(currentIndex + 1);
      }

      if (event.key === "ArrowLeft" || event.key === "PageUp") {
        goTo(currentIndex - 1);
      }
    };

    const handleTouchStart = (event) => {
      touchStartX = event.changedTouches[0].clientX;
    };

    const handleTouchEnd = (event) => {
      const deltaX = event.changedTouches[0].clientX - touchStartX;
      if (Math.abs(deltaX) < 60) return;
      goTo(deltaX < 0 ? currentIndex + 1 : currentIndex - 1);
    };

    window.addEventListener("wheel", handleWheel, { passive: false });
    window.addEventListener("keydown", handleKeydown);
    window.addEventListener("touchstart", handleTouchStart, { passive: true });
    window.addEventListener("touchend", handleTouchEnd, { passive: true });

    return () => {
      window.removeEventListener("wheel", handleWheel);
      window.removeEventListener("keydown", handleKeydown);
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchend", handleTouchEnd);
    };
  }, [currentIndex, total]);

  const goToSlide = (nextIndex) => {
    if (window.innerWidth <= 1100) {
      const target = Math.max(0, Math.min(nextIndex, total - 1));
      const element = document.querySelector(`[data-slide="${target}"]`);
      element?.scrollIntoView({ behavior: "smooth", block: "start" });
      setCurrentIndex(target);
      return;
    }

    setCurrentIndex(Math.max(0, Math.min(nextIndex, total - 1)));
  };

  return { currentIndex, goToSlide };
}

function App() {
  const [locale, setLocale] = useState(() => {
    if (typeof window === "undefined") return "zh";
    const urlLocale = getLocaleFromUrl();
    if (urlLocale) return urlLocale;
    const storedLocale = window.localStorage.getItem("site-locale");
    if (storedLocale === "zh" || storedLocale === "en") return storedLocale;
    return window.navigator.language.toLowerCase().startsWith("zh") ? "zh" : "en";
  });

  const content = localeContent[locale];
  const slides = content.slides;
  const { currentIndex, goToSlide } = useSlideNavigation(slides.length);
  const projectSlide = slides.find((slide) => slide.id === "projects");
  const [activeProjectId, setActiveProjectId] = useState(
    projectSlide?.projects[0]?.id ?? "trackvest"
  );
  const activeProject =
    projectSlide?.projects.find((project) => project.id === activeProjectId) ??
    projectSlide?.projects[0];
  const socialItems = [
    {
      id: "github",
      label: "GitHub",
      url: socialLinks.github,
      icon: <GitHubIcon />,
    },
    {
      id: "linkedin",
      label: "LinkedIn",
      url: socialLinks.linkedin,
      icon: <LinkedInIcon />,
    },
  ];

  useEffect(() => {
    window.localStorage.setItem("site-locale", locale);
    document.documentElement.lang = locale === "zh" ? "zh-Hant" : "en";
    document.title =
      locale === "zh" ? "Vanessa Lin | 個人網站" : "Vanessa Lin | Personal Site";

    const url = new URL(window.location.href);
    if (locale === "en") {
      url.searchParams.set("lang", "en");
    } else {
      url.searchParams.delete("lang");
    }
    window.history.replaceState({}, "", url);
  }, [locale]);

  useEffect(() => {
    if (!projectSlide?.projects.some((project) => project.id === activeProjectId)) {
      setActiveProjectId(projectSlide?.projects[0]?.id ?? "trackvest");
    }
  }, [activeProjectId, projectSlide]);

  return (
    <div className="app-shell">
      <div className="ambient ambient-a" />
      <div className="ambient ambient-b" />
      <div className="ambient ambient-c" />

      <header className="topbar">
        <div className="brand">
          <span className="brand-kicker">Vanessa Lin</span>
          <span className="brand-title">{content.brandTitle}</span>
        </div>
        <div className="topbar-actions">
          <div className="social-links" aria-label="External links">
            {socialItems.map((item) =>
              item.url ? (
                <a
                  key={item.id}
                  href={item.url}
                  target="_blank"
                  rel="noreferrer"
                  className="social-link-button"
                  aria-label={item.label}
                  title={item.label}
                >
                  {item.icon}
                </a>
              ) : (
                <button
                  key={item.id}
                  type="button"
                  className="social-link-button is-disabled"
                  aria-label={`${item.label} link not set yet`}
                  title={`${item.label} URL not set yet`}
                  disabled
                >
                  {item.icon}
                </button>
              )
            )}
          </div>
          <nav className="topbar-links" aria-label="Slide navigation">
            {slides.map((slide, index) => (
              <button
                key={slide.id}
                className="ghost-button"
                type="button"
                onClick={() => goToSlide(index)}
              >
                {slide.label}
              </button>
            ))}
          </nav>
          <div className="locale-switch" aria-label="Language switcher">
            <button
              type="button"
              className={`locale-button ${locale === "zh" ? "is-active" : ""}`}
              onClick={() => setLocale("zh")}
            >
              中文
            </button>
            <button
              type="button"
              className={`locale-button ${locale === "en" ? "is-active" : ""}`}
              onClick={() => setLocale("en")}
            >
              EN
            </button>
          </div>
        </div>
      </header>

      <main className="viewport">
        <div
          className="slides"
          style={{ transform: `translateX(-${currentIndex * 100}vw)` }}
        >
          {slides.map((slide, index) => (
            <section
              key={slide.id}
              data-slide={index}
              className={`slide ${index === currentIndex ? "is-active" : ""}`}
              aria-label={`${slide.label} slide`}
            >
              {slide.id === "intro" && (
                <div className="slide-grid intro-grid">
                  <div className="intro-copy">
                    <p className="eyebrow reveal">{slide.eyebrow}</p>
                    <p className="intro-name reveal">{slide.introName}</p>
                    <h1 className="reveal delay-1">{slide.title}</h1>
                    <p className="lead reveal delay-2">{slide.body}</p>
                    <p className="intro-sublead reveal delay-2">{slide.subBody}</p>
                    <div className="pill-row reveal delay-2">
                      {slide.pills.map((pill) => (
                        <span key={pill} className="pill">
                          {pill}
                        </span>
                      ))}
                    </div>
                    <div className="cta-row reveal delay-3">
                      <button
                        className="primary-button"
                        type="button"
                        onClick={() => goToSlide(3)}
                      >
                        {content.buttons.work}
                      </button>
                      <button
                        className="ghost-button"
                        type="button"
                        onClick={() => goToSlide(1)}
                      >
                        {content.buttons.story}
                      </button>
                    </div>
                  </div>

                  <aside className="info-card reveal delay-3">
                    <div className="note-pin" aria-hidden="true" />
                    <p className="note-meta">{slide.noteMeta}</p>
                    <p className="card-label">{content.labels.why}</p>
                    <h2>{slide.noteTitle}</h2>
                    <div className="profile-rows">
                      {slide.profileRows.map((row) => (
                        <div key={row.label} className="profile-row">
                          <p className="profile-row-label">{row.label}</p>
                          <p className="profile-row-value">{row.value}</p>
                        </div>
                      ))}
                    </div>
                    <p className="note-footer">{slide.noteFooter}</p>
                  </aside>
                </div>
              )}

              {slide.id === "about" && (
                <div className="slide-grid story-grid">
                  <article className="story-panel reveal">
                    <p className="eyebrow">{slide.label}</p>
                    <h2>{slide.title}</h2>
                    {slide.paragraphs.map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}
                  </article>

                  <div className="principles-panel reveal delay-2">
                    <p className="card-label">{content.labels.howIWork}</p>
                    <div className="principle-list">
                      {slide.principles.map((principle) => (
                        <article key={principle.title} className="principle-card">
                          <h3>{principle.title}</h3>
                          <p>{principle.body}</p>
                        </article>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {slide.id === "work" && (
                <div className="slide-grid work-grid">
                  <div className="section-copy reveal">
                    <p className="eyebrow">{slide.label}</p>
                    <h2>{slide.title}</h2>
                  </div>
                  <div className="timeline reveal delay-2">
                    {slide.timeline.map((item) => (
                      <article key={item.title} className="timeline-card">
                        <span className="timeline-meta">{item.meta}</span>
                        <h3>{item.title}</h3>
                        <p>{item.body}</p>
                      </article>
                    ))}
                  </div>
                </div>
              )}

              {slide.id === "projects" && (
                <div className="slide-grid projects-grid">
                  <div className="section-copy reveal">
                    <p className="eyebrow">{slide.label}</p>
                    <h2>{slide.title}</h2>
                  </div>

                  <div className="showcase-layout reveal delay-2">
                    <div className="orbit-stage" aria-label="Project showcase orbit">
                      <div className="orbit-core">
                        <span className="orbit-core-label">{content.labels.projectOrbit}</span>
                        <strong>{content.labels.lab}</strong>
                      </div>
                      <div className="orbit-ring orbit-ring-a" />
                      <div className="orbit-ring orbit-ring-b" />
                      <div className="orbit-ring orbit-ring-c" />

                      {slide.projects.map((project) => (
                        <button
                          key={project.id}
                          type="button"
                          className={`orbit-node orbit-node-${project.size} ${
                            activeProject?.id === project.id ? "is-active" : ""
                          } ${project.accent ? "is-accent" : ""}`}
                          style={{ left: project.x, top: project.y }}
                          onMouseEnter={() => setActiveProjectId(project.id)}
                          onFocus={() => setActiveProjectId(project.id)}
                          onClick={() => setActiveProjectId(project.id)}
                          aria-label={`Show ${project.title}`}
                        >
                          <span>{project.title}</span>
                        </button>
                      ))}
                    </div>

                    <aside className="showcase-detail">
                      <p className="card-label">{content.labels.selectedProject}</p>
                      <span
                        className={`project-label detail-label ${
                          activeProject?.accent ? "accent" : ""
                        }`}
                      >
                        {activeProject?.label}
                      </span>
                      <h3>{activeProject?.title}</h3>
                      <p className="showcase-summary">{activeProject?.body}</p>
                      <p className="showcase-detail-copy">{activeProject?.detail}</p>

                      <div className="mini-pills showcase-pills">
                        {activeProject?.tags.map((tag) => (
                          <span key={tag}>{tag}</span>
                        ))}
                      </div>

                      {activeProject?.links?.length ? (
                        <div className="showcase-links">
                          {activeProject.links.map((link) => (
                            <a
                              key={link.url}
                              href={link.url}
                              target="_blank"
                              rel="noreferrer"
                              className="showcase-link-button"
                            >
                              {link.label}
                            </a>
                          ))}
                        </div>
                      ) : (
                        <p className="showcase-note">
                          {content.labels.noPublicLink}
                        </p>
                      )}
                    </aside>
                  </div>
                </div>
              )}
            </section>
          ))}
        </div>
      </main>

      <div className="hud">
        <div className="progress" aria-hidden="true">
          <span className="progress-line" />
          <span
            className="progress-fill"
            style={{ width: `${((currentIndex + 1) / slides.length) * 100}%` }}
          />
        </div>
        <div className="hud-controls">
          <button
            className="circle-button"
            type="button"
            aria-label="Previous slide"
            onClick={() => goToSlide(currentIndex - 1)}
          >
            ←
          </button>
          <div className="slide-dots" aria-label="Slide indicators">
            {slides.map((slide, index) => (
              <button
                key={slide.id}
                className={`slide-dot ${index === currentIndex ? "is-active" : ""}`}
                type="button"
                aria-label={`Go to ${slide.label}`}
                onClick={() => goToSlide(index)}
              />
            ))}
          </div>
          <button
            className="circle-button"
            type="button"
            aria-label="Next slide"
            onClick={() => goToSlide(currentIndex + 1)}
          >
            →
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
