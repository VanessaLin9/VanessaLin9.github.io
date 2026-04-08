import { useEffect, useMemo, useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  BadgeInfo,
  BriefcaseBusiness,
  ExternalLink,
  FlaskConical,
  Sparkles,
  Workflow,
} from "lucide-react";
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useSpring,
  useTransform,
} from "motion/react";

const socialLinks = {
  github: "https://github.com/VanessaLin9",
  linkedin: "https://www.linkedin.com/in/tzu-chi-lin-vanessa/?locale=en_US",
  cakeresume: "https://www.cakeresume.com/vanessa-lin-6c846e",
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

function CakeResumeIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        fill="currentColor"
        d="M6 4.75A2.75 2.75 0 0 1 8.75 2h8.5A2.75 2.75 0 0 1 20 4.75v14.5A2.75 2.75 0 0 1 17.25 22h-8.5A2.75 2.75 0 0 1 6 19.25V4.75Zm2.75-.75a.75.75 0 0 0-.75.75v14.5c0 .41.34.75.75.75h8.5c.41 0 .75-.34.75-.75V4.75a.75.75 0 0 0-.75-.75h-8.5Zm1.5 3.25c0-.55.45-1 1-1h3.5a1 1 0 1 1 0 2h-3.5c-.55 0-1-.45-1-1Zm0 4.75c0-.55.45-1 1-1h5a1 1 0 1 1 0 2h-5c-.55 0-1-.45-1-1Zm0 4.75c0-.55.45-1 1-1h4a1 1 0 1 1 0 2h-4c-.55 0-1-.45-1-1Z"
      />
    </svg>
  );
}

const localeContent = {
  zh: {
    brandTitle: "Personal Site Prototype",
    meta: {
      title: "Vanessa Lin | 軟體工程師 / Product Engineer",
      description:
        "Vanessa Lin 的雙語個人網站，聚焦 workflow、系統整合、產品邏輯與實用工具開發。",
      ogDescription:
        "雙語個人網站，展示 Vanessa Lin 在 product engineering、workflow-oriented systems 與 practical tools 上的工作與作品。",
      ogLocale: "zh_TW",
    },
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
      showcaseHint: "滑過或點擊左邊節點來切換作品",
      whatIBring: "What I Bring",
    },
    slides: [
      {
        id: "intro",
        label: "首頁",
        eyebrow: "Software Engineer / Product Engineer",
        introName: "Hi, I'm Vanessa.",
        title: "把複雜 workflow 做成可用產品。",
        body: "我是一位有後端基礎的軟體工程師，主要使用 Node.js / TypeScript，擅長把複雜流程、整合需求與產品規則整理成可落地的功能。",
        subBody:
          "以前做生物醫學研究，現在把那種觀察、整理與驗證的習慣帶進工程工作裡，持續做產品、整合與實用工具。",
        pills: [
          "Node.js / TypeScript",
          "Software Engineer / Product Engineer",
          "ex-Lab Researcher",
          "workflow / integration / product systems",
        ],
        noteTitle: "快速認識",
        noteMeta: "At a Glance",
        profileRows: [
          { label: "Focus", value: "workflow-oriented product development" },
          { label: "Current", value: "React dApp, NestJS API, SDK, AI workflow" },
          {
            label: "Strength",
            value: "integration, product logic, system boundaries",
          },
        ],
        noteFooter: "從真實需求出發，先整理流程，再做出能迭代的產品。",
      },
      {
        id: "about",
        label: "關於我",
        title: "研究背景，怎麼影響我做工程。",
        paragraphs: [
          "研究背景讓我習慣先觀察問題、整理脈絡、測試假設，再決定怎麼實作。這個習慣一直延續到現在。",
          "做工程時，我不只在意功能做不做得出來，也會在意資料怎麼流、使用者怎麼理解、工具會不會真的被用。",
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
            body: "先做出可用版本，再持續調整體驗與穩定性。",
          },
        ],
      },
      {
        id: "work",
        label: "經歷",
        title: "工程工作經歷。",
        timeline: [
          {
            meta: "2025 / 07 - Present",
            title: "LAVARAGE",
            body: "在跨國、全英文環境參與 Web3 / DeFi 產品開發，負責 React dApp、NestJS API、資料流程、SDK 串接與 AI workflow。",
          },
          {
            meta: "2023 / 07 - 2025 / 02",
            title: "TitanSoft",
            body: "以 C# / .NET 維護與重構既有系統，處理後端流程調整、第三方整合，以及 unit / E2E test 補強。",
          },
          {
            meta: "2011 - 2020",
            title: "Research Labs",
            body: "在醫學院、醫院與研究機構做生物醫學研究，培養了系統化分析、文件整理與快速學習陌生領域的能力。",
          },
        ],
      },
      {
        id: "strengths",
        label: "能力",
        title: "我現在能提供什麼。",
        paragraphs: [
          "我的強項不是單一技術點，而是把流程、整合與產品規則整理成能真的被使用的系統。",
        ],
        principles: [
          {
            title: "Workflow Thinking",
            body: "擅長先拆流程、找邊界，再把複雜需求落成可運作的產品功能。",
          },
          {
            title: "Backend Foundation",
            body: "熟悉 Node.js / TypeScript，也有 API、資料流與整合實作經驗。",
          },
          {
            title: "Domain Learning",
            body: "能快速理解陌生領域，並在跨團隊協作中整理出可執行的方案。",
          },
        ],
      },
      {
        id: "projects",
        label: "Selected Work",
        projects: [
          {
            id: "trackvest",
            label: "Flagship",
            title: "TrackVest",
            body: "個人記帳與投資系統，從帳戶、資產、交易到總帳資料流都自行規劃。",
            detail:
              "持續開發中的全端產品。重點不只是 CRUD，而是把帳戶、資產、交易、CSV 匯入與 GL 邏輯整理成能長期擴充的產品結構。",
            tags: ["React", "NestJS", "PostgreSQL"],
            x: "35%",
            y: "28%",
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
            body: "把正在看的職缺頁面直接寫進 Google Sheet 的 Chrome extension，讓求職資料收集更順。",
            detail:
              "從真實 workflow 長出來的工具，整合 Chrome extension、Google OAuth、Google Sheets API 與站點 extractor，把麻煩的收集流程整理成可重複使用的產品。",
            tags: ["Chrome Extension", "Google Sheets API", "Workflow Automation"],
            x: "18%",
            y: "16%",
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
              "不只是接一個 LLM，而是把 realtime flow、background flow、duplicate detection、guardrails 和 issue sync 都整理成完整 workflow。",
            tags: ["OpenClaw", "ChromaDB", "LLM Workflow"],
            x: "73%",
            y: "14%",
            size: "md",
            links: [],
          },
          {
            id: "split-bill",
            label: "Utility",
            title: "Split-Bill",
            body: "為出遊分帳需求而做的純前端工具，重點是簡單、快速、沒有登入門檻。",
            detail:
              "從真實情境長出來的工具型專案，強調使用門檻低、操作直接、沒有登入負擔。",
            tags: ["Vue 3", "Vite", "GitHub Pages"],
            x: "80%",
            y: "54%",
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
            body: "桌遊紀錄小網站，包含登入、紀錄查詢與玩家管理。",
            detail:
              "較早期的個人全端專案，用 Express、MySQL、Sequelize 和 Handlebars 串起登入、遊戲紀錄與玩家管理。",
            tags: ["Express", "MySQL", "Sequelize"],
            x: "17%",
            y: "60%",
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
              "和團隊遠端協作完成的 full-stack clone project，包含登入、推文互動、追蹤與 Socket.IO 聊天功能。",
            tags: ["Node.js", "MySQL", "Socket.IO"],
            x: "57%",
            y: "68%",
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
              "偏自動化與整合型 side project，把兩個日常系統之間的資料流接起來，讓工作流程更順。",
            tags: ["Python", "Notion", "Automation"],
            x: "32%",
            y: "76%",
            size: "sm",
            links: [],
          },
        ],
      },
    ],
  },
  en: {
    brandTitle: "Personal Site Prototype",
    meta: {
      title: "Vanessa Lin | Software Engineer / Product Engineer",
      description:
        "Vanessa Lin's bilingual site focused on workflow-oriented product engineering, integrations, product logic, and practical tools.",
      ogDescription:
        "Bilingual personal site featuring Vanessa Lin's work in workflow-oriented product engineering, practical tools, and systems thinking.",
      ogLocale: "en_US",
    },
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
      showcaseHint: "Hover or click the orbit to browse projects",
      whatIBring: "What I Bring",
    },
    slides: [
      {
        id: "intro",
        label: "Intro",
        eyebrow: "Software Engineer / Product Engineer",
        introName: "Hi, I'm Vanessa.",
        title: "I turn complex workflows into usable products.",
        body: "I am a software engineer with a strong backend foundation, working mainly with Node.js / TypeScript. I like turning messy flows, integrations, and product rules into features that are clear and practical.",
        subBody:
          "Before software, I worked in biomedical labs. I still bring that habit of observing, structuring, and validating into engineering while building products, integrations, and practical tools.",
        pills: [
          "Node.js / TypeScript",
          "Software Engineer / Product Engineer",
          "ex-Lab Researcher",
          "workflow / integration / product systems",
        ],
        noteTitle: "Quick Profile",
        noteMeta: "At a Glance",
        profileRows: [
          { label: "Focus", value: "workflow-oriented product development" },
          { label: "Current", value: "React dApp, NestJS API, SDK, AI workflow" },
          {
            label: "Strength",
            value: "integration, product logic, system boundaries",
          },
        ],
        noteFooter: "I start from real needs, map the flow, and ship products that can keep evolving.",
      },
      {
        id: "about",
        label: "About",
        title: "How a research background shapes my engineering.",
        paragraphs: [
          "My research background trained me to observe first, understand context, test assumptions, and only then decide how to build. That habit still shapes the way I work today.",
          "I do not just care about shipping a feature. I also care about how data moves, how users make sense of a flow, and whether the product will actually hold up in real use.",
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
            body: "Get a usable version out first, then keep refining experience and stability.",
          },
        ],
      },
      {
        id: "work",
        label: "Work",
        title: "Software engineering experience.",
        timeline: [
          {
            meta: "2025 / 07 - Present",
            title: "LAVARAGE",
            body: "Working in a cross-border, English-first environment on Web3 / DeFi products across React dApp, NestJS API, data workflows, SDK integration, and AI workflow design.",
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
        id: "strengths",
        label: "Strengths",
        title: "What I bring to a team.",
        paragraphs: [
          "My strength is not one isolated technical point. It is turning workflows, integrations, and product rules into systems people can actually use.",
        ],
        principles: [
          {
            title: "Workflow Thinking",
            body: "I like breaking down flows, clarifying boundaries, and turning complexity into shippable product behavior.",
          },
          {
            title: "Backend Foundation",
            body: "Comfortable with Node.js / TypeScript, APIs, data flow design, and integration-heavy implementation.",
          },
          {
            title: "Domain Learning",
            body: "I can get up to speed in unfamiliar domains quickly and turn ambiguity into something executable.",
          },
        ],
      },
      {
        id: "projects",
        label: "Selected Work",
        projects: [
          {
            id: "trackvest",
            label: "Flagship",
            title: "TrackVest",
            body: "A personal bookkeeping and investing system where I designed the flow across accounts, assets, transactions, and general-ledger logic.",
            detail:
              "An ongoing full-stack product. The value here is not basic CRUD, but shaping accounts, assets, transactions, CSV imports, and general-ledger logic into a structure that can keep growing.",
            tags: ["React", "NestJS", "PostgreSQL"],
            x: "35%",
            y: "28%",
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
            body: "A Chrome extension that writes the job page you are viewing directly into Google Sheets and makes job tracking smoother.",
            detail:
              "A tool grown from a real workflow. It combines a Chrome extension, Google OAuth, the Google Sheets API, and site-specific extractors into one repeatable product flow.",
            tags: ["Chrome Extension", "Google Sheets API", "Workflow Automation"],
            x: "18%",
            y: "16%",
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
              "This is not just plugging in an LLM. It is a full workflow with realtime and background flows, duplicate detection, guardrails, and issue sync.",
            tags: ["OpenClaw", "ChromaDB", "LLM Workflow"],
            x: "73%",
            y: "14%",
            size: "md",
            links: [],
          },
          {
            id: "split-bill",
            label: "Utility",
            title: "Split-Bill",
            body: "A lightweight expense-sharing tool built for trips, designed to be quick and frictionless.",
            detail:
              "A practical tool from a real-life need, focused on low friction, direct interaction, and no login barrier.",
            tags: ["Vue 3", "Vite", "GitHub Pages"],
            x: "80%",
            y: "54%",
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
            body: "A board game record site with login, history lookup, and player management.",
            detail:
              "An earlier full-stack project built with Express, MySQL, Sequelize, and Handlebars to connect authentication, game records, and player management.",
            tags: ["Express", "MySQL", "Sequelize"],
            x: "17%",
            y: "60%",
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
            body: "A team-built Twitter clone where I mainly worked on backend features and data logic.",
            detail:
              "A remote collaboration project that covered authentication, tweet interactions, follow flows, and Socket.IO chat.",
            tags: ["Node.js", "MySQL", "Socket.IO"],
            x: "57%",
            y: "68%",
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
              "An automation and integration side project that connects two everyday systems to make the workflow smoother.",
            tags: ["Python", "Notion", "Automation"],
            x: "32%",
            y: "76%",
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

function updateMetaTag(selector, content) {
  const element = document.querySelector(selector);
  if (!element || !content) return;
  element.setAttribute("content", content);
}

function updateLinkTag(selector, href) {
  const element = document.querySelector(selector);
  if (!element || !href) return;
  element.setAttribute("href", href);
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
  const siteOrigin = "https://vanessalin9.github.io";
  const metaImageUrl = `${siteOrigin}/og-card.svg`;
  const { currentIndex, goToSlide } = useSlideNavigation(slides.length);
  const projectSlide = slides.find((slide) => slide.id === "projects");
  const [activeProjectId, setActiveProjectId] = useState(
    projectSlide?.projects[0]?.id ?? "trackvest"
  );
  const profileIcons = useMemo(
    () => [Workflow, BriefcaseBusiness, Sparkles],
    []
  );
  const principleIcons = useMemo(
    () => [FlaskConical, Workflow, Sparkles],
    []
  );
  const orbitStars = useMemo(
    () =>
      Array.from({ length: 14 }, (_, index) => ({
        id: `star-${index}`,
        x: `${10 + ((index * 17) % 82)}%`,
        y: `${12 + ((index * 23) % 74)}%`,
        delay: index * 0.4,
      })),
    []
  );
  const [orbitSpotlight, setOrbitSpotlight] = useState({ x: 50, y: 48 });
  const activeProject =
    projectSlide?.projects.find((project) => project.id === activeProjectId) ??
    projectSlide?.projects[0];
  const introPointerX = useMotionValue(0);
  const introPointerY = useMotionValue(0);
  const detailPointerX = useMotionValue(0);
  const detailPointerY = useMotionValue(0);
  const introRotateX = useSpring(useTransform(introPointerY, [-24, 24], [6, -6]), {
    stiffness: 150,
    damping: 18,
  });
  const introRotateY = useSpring(useTransform(introPointerX, [-24, 24], [-6, 6]), {
    stiffness: 150,
    damping: 18,
  });
  const detailRotateX = useSpring(
    useTransform(detailPointerY, [-20, 20], [4.5, -4.5]),
    { stiffness: 150, damping: 18 }
  );
  const detailRotateY = useSpring(
    useTransform(detailPointerX, [-20, 20], [-4.5, 4.5]),
    { stiffness: 150, damping: 18 }
  );
  const orbitGlow = useMotionTemplate`radial-gradient(circle at ${orbitSpotlight.x}% ${orbitSpotlight.y}%, rgba(255, 255, 255, 0.76), transparent 16%)`;

  const introTransition = {
    duration: 0.68,
    ease: [0.22, 1, 0.36, 1],
  };

  const cardTransition = {
    type: "spring",
    stiffness: 180,
    damping: 18,
  };

  const socialItems = [
    { id: "github", label: "GitHub", url: socialLinks.github, icon: <GitHubIcon /> },
    {
      id: "linkedin",
      label: "LinkedIn",
      url: socialLinks.linkedin,
      icon: <LinkedInIcon />,
    },
    {
      id: "cakeresume",
      label: "CakeResume",
      url: socialLinks.cakeresume,
      icon: <CakeResumeIcon />,
    },
  ];

  useEffect(() => {
    window.localStorage.setItem("site-locale", locale);
    document.documentElement.lang = locale === "zh" ? "zh-Hant" : "en";
    document.title = content.meta.title;

    const url = new URL(window.location.href);
    if (locale === "en") {
      url.searchParams.set("lang", "en");
    } else {
      url.searchParams.delete("lang");
    }
    window.history.replaceState({}, "", url);

    updateMetaTag('meta[name="description"]', content.meta.description);
    updateMetaTag('meta[property="og:title"]', content.meta.title);
    updateMetaTag('meta[property="og:description"]', content.meta.ogDescription);
    updateMetaTag('meta[property="og:locale"]', content.meta.ogLocale);
    updateMetaTag('meta[property="og:url"]', url.toString());
    updateMetaTag('meta[property="og:image"]', metaImageUrl);
    updateMetaTag('meta[name="twitter:title"]', content.meta.title);
    updateMetaTag('meta[name="twitter:description"]', content.meta.ogDescription);
    updateMetaTag('meta[name="twitter:image"]', metaImageUrl);

    updateLinkTag('link[rel="canonical"]', url.toString());
    updateLinkTag('link[rel="alternate"][hreflang="zh-Hant"]', `${siteOrigin}/`);
    updateLinkTag(
      'link[rel="alternate"][hreflang="en"]',
      `${siteOrigin}/?lang=en`
    );
  }, [content.meta, locale]);

  useEffect(() => {
    if (!projectSlide?.projects.some((project) => project.id === activeProjectId)) {
      setActiveProjectId(projectSlide?.projects[0]?.id ?? "trackvest");
    }
  }, [activeProjectId, projectSlide]);

  const handleOrbitMove = (event) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const x = ((event.clientX - rect.left) / rect.width) * 100;
    const y = ((event.clientY - rect.top) / rect.height) * 100;
    setOrbitSpotlight({ x, y });
  };

  const resetOrbitMove = () => {
    setOrbitSpotlight({ x: 50, y: 48 });
  };

  const handleCardTilt = (event, setX, setY, intensity = 24) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const x = ((event.clientX - rect.left) / rect.width - 0.5) * intensity * 2;
    const y = ((event.clientY - rect.top) / rect.height - 0.5) * intensity * 2;
    setX(x);
    setY(y);
  };

  const resetCardTilt = (setX, setY) => {
    setX(0);
    setY(0);
  };

  const projectsIndex = slides.findIndex((slide) => slide.id === "projects");
  const aboutIndex = slides.findIndex((slide) => slide.id === "about");

  return (
    <div className="app-shell">
      <motion.div
        className="ambient ambient-a"
        animate={{ x: [0, 18, -10, 0], y: [0, -14, 8, 0], scale: [1, 1.06, 0.98, 1] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="ambient ambient-b"
        animate={{ x: [0, -22, 12, 0], y: [0, 10, -10, 0], scale: [1, 0.96, 1.04, 1] }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="ambient ambient-c"
        animate={{ x: [0, 12, -8, 0], y: [0, 8, -12, 0], scale: [1, 1.04, 0.97, 1] }}
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
      />

      <header className="topbar">
        <div className="brand">
          <span className="brand-kicker">Vanessa Lin</span>
          <span className="brand-title">{content.brandTitle}</span>
        </div>
        <div className="topbar-actions">
          <div className="social-links" aria-label="External links">
            {socialItems.map((item) => (
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
            ))}
          </div>
          <nav className="topbar-links" aria-label="Slide navigation">
            {slides.map((slide, index) => (
              <motion.button
                key={slide.id}
                className={`ghost-button nav-pill ${
                  index === currentIndex ? "is-active" : ""
                }`}
                type="button"
                onClick={() => goToSlide(index)}
                whileHover={{ y: -2, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {slide.label}
              </motion.button>
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
        <motion.div
          className="slides"
          style={{ width: `${slides.length * 100}vw` }}
          animate={{ x: `-${currentIndex * 100}vw` }}
          transition={{ type: "spring", stiffness: 120, damping: 22, mass: 0.9 }}
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
                  <motion.div
                    className="intro-copy"
                    initial={false}
                    animate={
                      index === currentIndex
                        ? { opacity: 1, x: 0 }
                        : { opacity: 0.5, x: -24 }
                    }
                    transition={introTransition}
                  >
                    <motion.p
                      className="eyebrow"
                      initial={false}
                      animate={
                        index === currentIndex
                          ? { opacity: 1, y: 0 }
                          : { opacity: 0, y: 18 }
                      }
                      transition={{ ...introTransition, delay: 0.02 }}
                    >
                      {slide.eyebrow}
                    </motion.p>
                    <motion.p
                      className="intro-name"
                      initial={false}
                      animate={
                        index === currentIndex
                          ? { opacity: 1, y: 0 }
                          : { opacity: 0, y: 20 }
                      }
                      transition={{ ...introTransition, delay: 0.08 }}
                    >
                      {slide.introName}
                    </motion.p>
                    <motion.h1
                      initial={false}
                      animate={
                        index === currentIndex
                          ? { opacity: 1, y: 0 }
                          : { opacity: 0, y: 24 }
                      }
                      transition={{ ...introTransition, delay: 0.14 }}
                    >
                      {slide.title}
                    </motion.h1>
                    <motion.p
                      className="lead"
                      initial={false}
                      animate={
                        index === currentIndex
                          ? { opacity: 1, y: 0 }
                          : { opacity: 0, y: 20 }
                      }
                      transition={{ ...introTransition, delay: 0.22 }}
                    >
                      {slide.body}
                    </motion.p>
                    <motion.p
                      className="intro-sublead"
                      initial={false}
                      animate={
                        index === currentIndex
                          ? { opacity: 1, y: 0 }
                          : { opacity: 0, y: 16 }
                      }
                      transition={{ ...introTransition, delay: 0.28 }}
                    >
                      {slide.subBody}
                    </motion.p>
                    <motion.div
                      className="pill-row"
                      initial={false}
                      animate={
                        index === currentIndex
                          ? { opacity: 1, y: 0 }
                          : { opacity: 0, y: 14 }
                      }
                      transition={{ ...introTransition, delay: 0.34 }}
                    >
                      {slide.pills.map((pill) => (
                        <motion.span
                          key={pill}
                          className="pill"
                          whileHover={{ y: -2, scale: 1.02 }}
                        >
                          {pill}
                        </motion.span>
                      ))}
                    </motion.div>
                    <motion.div
                      className="cta-row"
                      initial={false}
                      animate={
                        index === currentIndex
                          ? { opacity: 1, y: 0 }
                          : { opacity: 0, y: 16 }
                      }
                      transition={{ ...introTransition, delay: 0.4 }}
                    >
                      <motion.button
                        className="primary-button"
                        type="button"
                        onClick={() => goToSlide(projectsIndex)}
                        whileHover={{ y: -3, scale: 1.02 }}
                        whileTap={{ scale: 0.97 }}
                      >
                        {content.buttons.work}
                      </motion.button>
                      <motion.button
                        className="ghost-button"
                        type="button"
                        onClick={() => goToSlide(aboutIndex)}
                        whileHover={{ y: -3, scale: 1.02 }}
                        whileTap={{ scale: 0.97 }}
                      >
                        {content.buttons.story}
                      </motion.button>
                    </motion.div>
                    <motion.div
                      className="micro-notes"
                      initial={false}
                      animate={
                        index === currentIndex
                          ? { opacity: 1, y: 0 }
                          : { opacity: 0, y: 18 }
                      }
                      transition={{ ...introTransition, delay: 0.46 }}
                    >
                      <div className="micro-note">
                        <FlaskConical size={16} strokeWidth={2.1} />
                        <span>
                          {locale === "zh"
                            ? "研究習慣仍然影響我怎麼做產品"
                            : "research habits still shape how I build"}
                        </span>
                      </div>
                      <div className="micro-note">
                        <Sparkles size={16} strokeWidth={2.1} />
                        <span>
                          {locale === "zh"
                            ? "偏好實用工具、乾淨流程與產品化系統"
                            : "small tools, clean flows, product-minded systems"}
                        </span>
                      </div>
                    </motion.div>
                  </motion.div>

                  <motion.aside
                    className="info-card"
                    initial={false}
                    style={{
                      rotateX: introRotateX,
                      rotateY: introRotateY,
                      transformPerspective: 1200,
                    }}
                    animate={
                      index === currentIndex
                        ? { opacity: 1, y: 0, rotate: -1.8 }
                        : { opacity: 0.35, y: 22, rotate: -0.6 }
                    }
                    transition={cardTransition}
                    whileHover={{ rotate: -0.6, y: -6 }}
                    onMouseMove={(event) =>
                      handleCardTilt(event, introPointerX, introPointerY)
                    }
                    onMouseLeave={() => resetCardTilt(introPointerX, introPointerY)}
                  >
                    <div className="note-pin" aria-hidden="true" />
                    <p className="note-meta">{slide.noteMeta}</p>
                    <p className="card-label">{content.labels.why}</p>
                    <h2>{slide.noteTitle}</h2>
                    <div className="profile-rows">
                      {slide.profileRows.map((row, rowIndex) => {
                        const RowIcon = profileIcons[rowIndex];
                        return (
                          <div key={row.label} className="profile-row">
                            <p className="profile-row-label">{row.label}</p>
                            <p className="profile-row-value">
                              {RowIcon ? <RowIcon size={16} strokeWidth={2.2} /> : null}
                              <span>{row.value}</span>
                            </p>
                          </div>
                        );
                      })}
                    </div>
                    <p className="note-footer">{slide.noteFooter}</p>
                  </motion.aside>
                </div>
              )}

              {(slide.id === "about" || slide.id === "strengths") && (
                <div className="slide-grid story-grid">
                  <motion.article
                    className="story-panel"
                    initial={false}
                    animate={
                      index === currentIndex
                        ? { opacity: 1, y: 0 }
                        : { opacity: 0.3, y: 20 }
                    }
                    transition={introTransition}
                  >
                    <p className="eyebrow">{slide.label}</p>
                    <h2>{slide.title}</h2>
                    {slide.paragraphs.map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}
                  </motion.article>

                  <motion.div
                    className="principles-panel"
                    initial={false}
                    animate={
                      index === currentIndex
                        ? { opacity: 1, y: 0 }
                        : { opacity: 0.35, y: 24 }
                    }
                    transition={{ ...introTransition, delay: 0.14 }}
                  >
                    <p className="card-label">
                      {slide.id === "strengths"
                        ? content.labels.whatIBring
                        : content.labels.howIWork}
                    </p>
                    <div className="principle-list">
                      {slide.principles.map((principle, principleIndex) => {
                        const PrincipleIcon = principleIcons[principleIndex];
                        return (
                          <motion.article
                            key={principle.title}
                            className="principle-card"
                            whileHover={{ y: -6, scale: 1.01 }}
                            transition={cardTransition}
                          >
                            {PrincipleIcon ? (
                              <span className="principle-icon">
                                <PrincipleIcon size={18} strokeWidth={2.1} />
                              </span>
                            ) : null}
                            <h3>{principle.title}</h3>
                            <p>{principle.body}</p>
                          </motion.article>
                        );
                      })}
                    </div>
                  </motion.div>
                </div>
              )}

              {slide.id === "work" && (
                <div className="slide-grid work-grid">
                  <motion.div
                    className="section-copy"
                    initial={false}
                    animate={
                      index === currentIndex
                        ? { opacity: 1, y: 0 }
                        : { opacity: 0.35, y: 24 }
                    }
                    transition={introTransition}
                  >
                    <p className="eyebrow">{slide.label}</p>
                    <h2>{slide.title}</h2>
                  </motion.div>
                  <motion.div
                    className="timeline"
                    initial={false}
                    animate={
                      index === currentIndex
                        ? { opacity: 1, y: 0 }
                        : { opacity: 0.2, y: 24 }
                    }
                    transition={{ ...introTransition, delay: 0.16 }}
                  >
                    {slide.timeline.map((item) => (
                      <motion.article
                        key={item.title}
                        className="timeline-card"
                        whileHover={{ y: -8, scale: 1.01 }}
                        transition={cardTransition}
                      >
                        <span className="timeline-meta">{item.meta}</span>
                        <h3>{item.title}</h3>
                        <p>{item.body}</p>
                      </motion.article>
                    ))}
                  </motion.div>
                </div>
              )}

              {slide.id === "projects" && (
                <div className="slide-grid projects-grid">
                  <motion.div
                    className="section-copy"
                    initial={false}
                    animate={
                      index === currentIndex
                        ? { opacity: 1, y: 0 }
                        : { opacity: 0.35, y: 24 }
                    }
                    transition={introTransition}
                  >
                    <p className="eyebrow">{slide.label}</p>
                  </motion.div>

                  <motion.div
                    className="showcase-layout"
                    initial={false}
                    animate={
                      index === currentIndex
                        ? { opacity: 1, y: 0 }
                        : { opacity: 0.2, y: 24 }
                    }
                    transition={{ ...introTransition, delay: 0.14 }}
                  >
                    <motion.div
                      className="orbit-stage"
                      aria-label="Project showcase orbit"
                      onMouseMove={handleOrbitMove}
                      onMouseLeave={resetOrbitMove}
                      style={{
                        "--spotlight-x": `${orbitSpotlight.x}%`,
                        "--spotlight-y": `${orbitSpotlight.y}%`,
                        backgroundImage: `${orbitGlow}, radial-gradient(circle at center, rgba(139, 170, 183, 0.18), transparent 34%), linear-gradient(rgba(255, 255, 255, 0.46), rgba(255, 255, 255, 0.46))`,
                      }}
                    >
                      {orbitStars.map((star) => (
                        <motion.span
                          key={star.id}
                          className="orbit-star"
                          style={{ left: star.x, top: star.y }}
                          animate={{ opacity: [0.18, 0.8, 0.25], scale: [0.9, 1.25, 1] }}
                          transition={{
                            duration: 3.8,
                            delay: star.delay,
                            repeat: Infinity,
                            ease: "easeInOut",
                          }}
                        />
                      ))}
                      <motion.div
                        className="orbit-core"
                        animate={{ rotate: [0, 4, -4, 0], scale: [1, 1.03, 0.99, 1] }}
                        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
                      >
                        <span className="orbit-core-label">
                          {content.labels.projectOrbit}
                        </span>
                        <strong>{content.labels.lab}</strong>
                      </motion.div>
                      <motion.div
                        className="orbit-ring orbit-ring-a"
                        animate={{ rotate: 360 }}
                        transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
                      />
                      <motion.div
                        className="orbit-ring orbit-ring-b"
                        animate={{ rotate: -360 }}
                        transition={{ duration: 44, repeat: Infinity, ease: "linear" }}
                      />
                      <motion.div
                        className="orbit-ring orbit-ring-c"
                        animate={{ rotate: 360 }}
                        transition={{ duration: 62, repeat: Infinity, ease: "linear" }}
                      />
                      {slide.projects.map((project, projectIndex) => (
                        <motion.button
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
                          whileHover={{
                            boxShadow: "0 24px 38px rgba(61, 62, 75, 0.18)",
                          }}
                          whileTap={{ scale: 0.98 }}
                          animate={{
                            y:
                              activeProject?.id === project.id
                                ? -6
                                : [0, -4, 0, 3, 0],
                            boxShadow:
                              activeProject?.id === project.id
                                ? "0 22px 34px rgba(61, 62, 75, 0.16)"
                                : "0 16px 28px rgba(61, 62, 75, 0.1)",
                          }}
                          transition={
                            activeProject?.id === project.id
                              ? cardTransition
                              : {
                                  duration: 6 + projectIndex * 0.45,
                                  repeat: Infinity,
                                  ease: "easeInOut",
                                }
                          }
                        >
                          <span>{project.title}</span>
                        </motion.button>
                      ))}
                    </motion.div>

                    <motion.aside
                      key={activeProject?.id}
                      className="showcase-detail"
                      style={{
                        rotateX: detailRotateX,
                        rotateY: detailRotateY,
                        transformPerspective: 1200,
                      }}
                      initial={{ opacity: 0, y: 22, scale: 0.98 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      transition={cardTransition}
                      onMouseMove={(event) =>
                        handleCardTilt(event, detailPointerX, detailPointerY, 20)
                      }
                      onMouseLeave={() => resetCardTilt(detailPointerX, detailPointerY)}
                    >
                      <p className="card-label">{content.labels.selectedProject}</p>
                      <p className="showcase-hint">
                        <BadgeInfo size={15} strokeWidth={2.1} />
                        <span>{content.labels.showcaseHint}</span>
                      </p>
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
                              <span>{link.label}</span>
                              <ExternalLink size={16} strokeWidth={2.2} />
                            </a>
                          ))}
                        </div>
                      ) : (
                        <p className="showcase-note">{content.labels.noPublicLink}</p>
                      )}
                    </motion.aside>
                  </motion.div>
                </div>
              )}
            </section>
          ))}
        </motion.div>
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
          <motion.button
            className="circle-button"
            type="button"
            aria-label="Previous slide"
            onClick={() => goToSlide(currentIndex - 1)}
            whileHover={{ y: -2, scale: 1.04 }}
            whileTap={{ scale: 0.95 }}
          >
            <ArrowLeft size={18} strokeWidth={2.4} />
          </motion.button>
          <div className="slide-dots" aria-label="Slide indicators">
            {slides.map((slide, index) => (
              <motion.button
                key={slide.id}
                className={`slide-dot ${index === currentIndex ? "is-active" : ""}`}
                type="button"
                aria-label={`Go to ${slide.label}`}
                onClick={() => goToSlide(index)}
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.95 }}
              />
            ))}
          </div>
          <motion.button
            className="circle-button"
            type="button"
            aria-label="Next slide"
            onClick={() => goToSlide(currentIndex + 1)}
            whileHover={{ y: -2, scale: 1.04 }}
            whileTap={{ scale: 0.95 }}
          >
            <ArrowRight size={18} strokeWidth={2.4} />
          </motion.button>
        </div>
      </div>
    </div>
  );
}

export default App;
