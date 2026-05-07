import React from "react";

const Hero = () => {
  const scrollToWork = () =>
    document.getElementById("work")?.scrollIntoView({ behavior: "smooth" });

  return (
    <>
      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(16px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .hero-eyebrow { opacity:0; animation: fadeUp 0.6s ease forwards 0.15s; }
        .hero-headline { opacity:0; animation: fadeUp 0.7s ease forwards 0.3s; }
        .hero-sub      { opacity:0; animation: fadeUp 0.7s ease forwards 0.45s; }
        .hero-bottom   { opacity:0; animation: fadeUp 0.7s ease forwards 0.6s; }
        .cta-btn:hover { background: var(--accent-blue) !important; transform: translateY(-1px); }
        .cta-btn:hover .arrow { transform: translateY(3px); }
        .arrow { display:inline-block; transition: transform 0.2s ease; }
      `}</style>

      <section className="hero-grid">
        {/* Gutter */}
        <div
          className="hero-gutter"
          style={{
            borderRight: "0.5px solid var(--border)",
            padding: "64px 0",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          {["portfolio · 2025", "apm · product"].map((l, i) => (
            <div
              key={i}
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "10px",
                color: "var(--text-tertiary)",
                letterSpacing: "0.1em",
                writingMode: "vertical-rl",
                transform: "rotate(180deg)",
              }}
            >
              {l}
            </div>
          ))}
        </div>

        {/* Main content */}
        <div
          className="hero-main-pad"
          style={{
            padding: "80px 64px 80px 72px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <div>
            <div
              className="hero-eyebrow"
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "11px",
                color: "var(--text-secondary)",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                marginBottom: "36px",
              }}
            >
              Associate Product Manager · Dehradun, India
            </div>

            <h1
              className="hero-headline"
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: "clamp(40px, 5.5vw, 74px)",
                fontWeight: 400,
                lineHeight: 1.07,
                color: "var(--text-primary)",
                letterSpacing: "-0.025em",
                maxWidth: "760px",
              }}
            >
              I turn user problems
              <br />
              into{" "}
              <em style={{ fontStyle: "italic", color: "var(--accent-dark)" }}>
                products that ship.
              </em>
            </h1>

            <p
              className="hero-sub"
              style={{
                fontSize: "clamp(15px, 1.8vw, 18px)",
                color: "var(--text-secondary)",
                lineHeight: 1.75,
                maxWidth: "560px",
                marginTop: "36px",
              }}
            >
              3 years building MERN systems end-to-end — writing PRDs, owning
              roadmaps, and sitting in client calls before I had a PM title. Now
              pursuing MBA in Business Analytics and launching a live hyperlocal
              product.
            </p>
          </div>

          <div className="hero-bottom">
            <div
              style={{ display: "flex", flexDirection: "column", gap: "12px" }}
            >
              <div
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "10px",
                  color: "var(--text-tertiary)",
                  letterSpacing: "0.02em",
                }}
              >
                // one action. attention is scarce.
              </div>
              <button
                onClick={scrollToWork}
                className="cta-btn"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "10px",
                  background: "var(--accent-dark)",
                  color: "#F7F6F3",
                  fontFamily: "var(--font-sans)",
                  fontSize: "14px",
                  fontWeight: 500,
                  padding: "15px 30px",
                  border: "none",
                  borderRadius: "4px",
                  cursor: "pointer",
                  letterSpacing: "0.01em",
                  transition: "background 0.2s ease, transform 0.15s ease",
                }}
              >
                See my work <span className="arrow">↓</span>
              </button>
            </div>

            <div
              className="hero-meta"
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-end",
                gap: "5px",
                textAlign: "right",
              }}
            >
              {[
                "MERN · GraphQL · Product Strategy",
                "3 yrs SDE · MBA Business Analytics",
                "UPES · Dehradun · 2025-27",
              ].map((item, i) => (
                <React.Fragment key={i}>
                  {i > 0 && (
                    <div
                      style={{
                        width: "28px",
                        height: "0.5px",
                        background: "var(--border-strong)",
                        marginLeft: "auto",
                        margin: "5px 0",
                      }}
                    />
                  )}
                  <div
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: "11px",
                      color: "var(--text-secondary)",
                      letterSpacing: "0.03em",
                    }}
                  >
                    {item}
                  </div>
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
