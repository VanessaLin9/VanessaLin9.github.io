import { useEffect, useState } from "react";

const slides = [
  {
    id: "intro",
    label: "Intro",
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
    label: "About",
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
    label: "Work",
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
    label: "Selected Work",
    title: "我更想把作品做成一個可以探索、也可以直接點進去看的展示區。",
    projects: [
      {
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
  const activeProject =
    projectSlide?.projects.find((project) => project.title === activeProjectTitle) ??
    projectSlide?.projects[0];

  return (
    <div className="app-shell">
      <div className="ambient ambient-a" />
      <div className="ambient ambient-b" />
      <div className="ambient ambient-c" />

      <header className="topbar">
        <div className="brand">
          <span className="brand-kicker">Vanessa Lin</span>
          <span className="brand-title">Personal Site Prototype</span>
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
                        看代表作品
                      </button>
                      <button
                        className="ghost-button"
                        type="button"
                        onClick={() => goToSlide(1)}
                      >
                        看我的故事
                      </button>
                    </div>
                  </div>

                  <aside className="info-card reveal delay-3">
                    <div className="note-pin" aria-hidden="true" />
                    <p className="note-meta">{slide.noteMeta}</p>
                    <p className="card-label">Why Vanessa</p>
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
                    <p className="card-label">How I Work</p>
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
                        <span className="orbit-core-label">Project Orbit</span>
                        <strong>Vanessa&apos;s Lab</strong>
                      </div>
                      <div className="orbit-ring orbit-ring-a" />
                      <div className="orbit-ring orbit-ring-b" />
                      <div className="orbit-ring orbit-ring-c" />

                      {slide.projects.map((project) => (
                        <button
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
                        >
                          <span>{project.title}</span>
                        </button>
                      ))}
                    </div>

                    <aside className="showcase-detail">
                      <p className="card-label">Selected Project</p>
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
                          目前沒有公開連結，這邊先保留作品說明。
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
