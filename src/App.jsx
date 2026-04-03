import { useEffect, useState } from "react";

const slides = [
  {
    id: "intro",
    label: "Intro",
    eyebrow: "Software Engineer / Product Engineer",
    introName: "Hi, I'm Vanessa.",
    title: "做有系統感、也真的能被打開來用的軟體。",
    body: "具備後端基礎與全端實作經驗，近期以 Node.js / TypeScript 為主。以前在生物實驗室做研究，現在則喜歡把真實世界的混亂流程，整理成清楚、可用、可迭代的產品與工具。",
    subBody:
      "我希望這個網站打開的第一眼，就能讓人理解我是一位會做產品、會整理系統，也很在意使用情境的工程師。",
    pills: [
      "Node.js / TypeScript",
      "Full-Stack Product Builder",
      "ex-Lab Researcher",
      "AI Workflow Design",
    ],
    quickFacts: [
      {
        label: "Current Focus",
        value: "Product-minded full-stack work",
      },
      {
        label: "Before Tech",
        value: "Biomedical research labs",
      },
      {
        label: "What I Like",
        value: "Small tools that solve real pain",
      },
    ],
    noteTitle: "一位偏產品思維、也有後端底的工程師。",
    noteMeta: "At a Glance",
    notes: [
      "近期以 Node.js / TypeScript 為主要技術，擅長把複雜規則、資料流與跨系統整合需求整理成可運作的產品功能。",
      "目前在 LAVARAGE 參與 React dApp、NestJS API、SDK 串接、資料流程與 AI support workflow 設計。",
      "曾在全英文、跨國協作環境中參與需求理解、技術討論與產品開發，也保留了研究背景帶來的觀察力與系統感。",
    ],
    noteFooter: "我偏好做的是那種規則複雜、流程很多，但最後能被整理成清楚使用體驗的產品。",
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
        body: "參與 Web3 / DeFi 產品的全端開發，處理 React dApp、Node.js / NestJS API、資料流程、SDK 與 AI support workflow。",
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
    title: "我最想拿來代表自己的，是這些從真實需求長出來的作品與 workflow。",
    projects: [
      {
        label: "Flagship",
        title: "TrackVest",
        body: "一個正在持續開發中的個人記帳與投資系統，從帳戶、資產、交易到總帳資料流都自己規劃。",
        tags: ["React", "NestJS", "PostgreSQL"],
      },
      {
        label: "Automation",
        accent: true,
        title: "Lavi",
        body: "內部 AI support agent，處理 Telegram bug intake、向量檢索、重複判斷與 Linear issue sync。",
        tags: ["OpenClaw", "ChromaDB", "LLM Workflow"],
      },
      {
        label: "Utility",
        title: "Split-Bill",
        body: "為朋友出遊分帳需求而做的純前端工具，重點是簡單、快速、沒有登入門檻。",
        tags: ["Vue 3", "Vite", "GitHub Pages"],
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
                    <div className="quick-facts reveal delay-3">
                      {slide.quickFacts.map((fact) => (
                        <article key={fact.label} className="quick-fact-card">
                          <p className="quick-fact-label">{fact.label}</p>
                          <p className="quick-fact-value">{fact.value}</p>
                        </article>
                      ))}
                    </div>
                  </div>

                  <aside className="info-card reveal delay-3">
                    <div className="note-pin" aria-hidden="true" />
                    <p className="note-meta">{slide.noteMeta}</p>
                    <p className="card-label">Observation Log</p>
                    <h2>{slide.noteTitle}</h2>
                    <ul className="note-list">
                      {slide.notes.map((note) => (
                        <li key={note}>{note}</li>
                      ))}
                    </ul>
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

                  <div className="project-row reveal delay-2">
                    {slide.projects.map((project) => (
                      <article key={project.title} className="project-card">
                        <div>
                          <span
                            className={`project-label ${project.accent ? "accent" : ""}`}
                          >
                            {project.label}
                          </span>
                          <h3>{project.title}</h3>
                          <p>{project.body}</p>
                        </div>
                        <div className="mini-pills">
                          {project.tags.map((tag) => (
                            <span key={tag}>{tag}</span>
                          ))}
                        </div>
                      </article>
                    ))}
                  </div>

                  <footer className="closing-card reveal delay-3">
                    <div>
                      <p className="card-label">Open for conversation</p>
                      <h3>希望加入重視產品落地、工程品質與實際問題解決的團隊。</h3>
                    </div>
                    <div className="contact-list">
                      <a href="mailto:vanessa7591@gmail.com">
                        vanessa7591@gmail.com
                      </a>
                      <a
                        href="https://github.com/VanessaLin9"
                        target="_blank"
                        rel="noreferrer"
                      >
                        GitHub / VanessaLin9
                      </a>
                    </div>
                  </footer>
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
