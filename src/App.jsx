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

const slides = [
  {
    id: "intro",
    label: "Intro",
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
      {
        label: "Focus",
        value: "workflow-oriented product development",
      },
      {
        label: "Current",
        value: "React dApp, NestJS API, SDK, AI workflow",
      },
      {
        label: "Strength",
        value: "integration, product logic, system boundaries",
      },
    ],
    noteFooter:
      "從真實需求出發，先整理流程，再做出能迭代的產品。",
  },
  {
    id: "about",
    label: "About",
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
    label: "Work",
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
    label: "Strengths",
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
];

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
  const { currentIndex, goToSlide } = useSlideNavigation(slides.length);
  const projectSlide = slides.find((slide) => slide.id === "projects");
  const [activeProjectTitle, setActiveProjectTitle] = useState(
    projectSlide?.projects[0]?.title ?? ""
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
    projectSlide?.projects.find((project) => project.title === activeProjectTitle) ??
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
    {
      stiffness: 150,
      damping: 18,
    }
  );
  const detailRotateY = useSpring(
    useTransform(detailPointerX, [-20, 20], [-4.5, 4.5]),
    {
      stiffness: 150,
      damping: 18,
    }
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
          <span className="brand-title">Personal Site Prototype</span>
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
                        onClick={() => goToSlide(3)}
                        whileHover={{ y: -3, scale: 1.02 }}
                        whileTap={{ scale: 0.97 }}
                      >
                        看代表作品
                      </motion.button>
                      <motion.button
                        className="ghost-button"
                        type="button"
                        onClick={() => goToSlide(1)}
                        whileHover={{ y: -3, scale: 1.02 }}
                        whileTap={{ scale: 0.97 }}
                      >
                        看我的故事
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
                        <span>research habits still shape how I build</span>
                      </div>
                      <div className="micro-note">
                        <Sparkles size={16} strokeWidth={2.1} />
                        <span>small tools, clean flows, product-minded systems</span>
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
                    <motion.span
                      className="card-sticker card-sticker-a"
                      animate={{ y: [0, -4, 0], rotate: [-4, -1, -4] }}
                      transition={{ duration: 4.6, repeat: Infinity, ease: "easeInOut" }}
                    >
                      <FlaskConical size={14} strokeWidth={2.2} />
                      lab mode
                    </motion.span>
                    <motion.span
                      className="card-sticker card-sticker-b"
                      animate={{ y: [0, 4, 0], rotate: [5, 2, 5] }}
                      transition={{ duration: 5.1, repeat: Infinity, ease: "easeInOut" }}
                    >
                      <Sparkles size={14} strokeWidth={2.2} />
                      ships tools
                    </motion.span>
                    <p className="note-meta">{slide.noteMeta}</p>
                    <p className="card-label">Why Vanessa</p>
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

              {slide.id === "about" && (
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
                    <p className="card-label">How I Work</p>
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

              {slide.id === "strengths" && (
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
                    <p className="card-label">What I Bring</p>
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
                    <h2>{slide.title}</h2>
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
                        <span className="orbit-core-label">Project Orbit</span>
                        <strong>Vanessa&apos;s Lab</strong>
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
                          key={project.title}
                          type="button"
                          className={`orbit-node orbit-node-${project.size} ${
                            activeProject?.title === project.title ? "is-active" : ""
                          } ${project.accent ? "is-accent" : ""}`}
                          style={{ left: project.x, top: project.y }}
                          onMouseEnter={() => setActiveProjectTitle(project.title)}
                          onFocus={() => setActiveProjectTitle(project.title)}
                          onClick={() => setActiveProjectTitle(project.title)}
                          aria-label={`Show ${project.title}`}
                          whileHover={{
                            boxShadow: "0 24px 38px rgba(61, 62, 75, 0.18)",
                          }}
                          whileTap={{ scale: 0.98 }}
                          animate={{
                            y:
                              activeProject?.title === project.title
                                ? -6
                                : [0, -4, 0, 3, 0],
                            boxShadow:
                              activeProject?.title === project.title
                                ? "0 22px 34px rgba(61, 62, 75, 0.16)"
                                : "0 16px 28px rgba(61, 62, 75, 0.1)",
                          }}
                          transition={
                            activeProject?.title === project.title
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
                      key={activeProject?.title}
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
                      <p className="card-label">Selected Project</p>
                      <p className="showcase-hint">
                        <BadgeInfo size={15} strokeWidth={2.1} />
                        <span>hover or click the orbit to browse projects</span>
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
                        <p className="showcase-note">
                          目前沒有公開連結，這邊先保留作品說明。
                        </p>
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
