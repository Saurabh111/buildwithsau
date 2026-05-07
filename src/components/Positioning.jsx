import React from "react";
import useReveal from "./useReveal";

const rv = (v) => ({
  opacity: v ? 1 : 0,
  transform: v ? "translateY(0)" : "translateY(20px)",
  transition: "opacity 0.65s ease, transform 0.65s ease",
});

export const PivotStrip = () => {
  const [ref, visible] = useReveal();
  return (
    <div ref={ref} style={rv(visible)} className="pivot-grid">
      <div
        className="pivot-gutter"
        style={{
          padding: "48px 24px",
          borderRight: "0.5px solid var(--border)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <span
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "10px",
            color: "var(--text-tertiary)",
            lineHeight: 1.7,
            letterSpacing: "0.02em",
            writingMode: "vertical-rl",
            transform: "rotate(180deg)",
            textAlign: "center",
          }}
        >
          // the pivot moment — dev to pm, one line.
        </span>
      </div>
      <div className="pivot-pad" style={{ padding: "52px 64px 52px 72px" }}>
        <p
          style={{
            fontFamily: "var(--font-serif)",
            fontSize: "clamp(20px, 2.5vw, 30px)",
            fontWeight: 400,
            color: "var(--text-primary)",
            lineHeight: 1.4,
            letterSpacing: "-0.01em",
          }}
        >
          3 years shipping code.{" "}
          <span style={{ color: "var(--text-secondary)" }}>
            Now obsessed with
          </span>
          <br />
          why users don't click the button.
        </p>
      </div>
    </div>
  );
};

const cards = [
  {
    num: "01 —",
    title: "I speak both languages fluently.",
    body: "I've written the code your engineers are shipping. When I scope a feature, I know what's hard to build — which makes me a better PM when prioritising and pushing back on estimates.",
    annotation: "// technical feasibility is not a black box to me",
  },
  {
    num: "02 —",
    title: "I've filled the PM gap without the title.",
    body: "At DockDevelopers, there was no dedicated PM. I wrote PRDs, ran client requirement sessions, prioritised MVPs, and owned roadmap conversations — because someone had to.",
    annotation: "// de facto pm for 3 years of client projects",
  },
  {
    num: "03 —",
    title: "I connect features to business outcomes.",
    body: "MBA in Business Analytics means I can read a P&L, size a market, and run a GTM. I don't just ask 'what should we build?' — I ask 'why does building this matter to the business?'",
    annotation: "// strategy + execution, not just execution",
  },
];

export const WhyPM = () => {
  const [ref, visible] = useReveal();
  return (
    <section ref={ref} style={{ ...rv(visible) }} className="section-grid">
      <div className="section-gutter">
        <div className="section-gutter-label">positioning</div>
      </div>
      <div className="section-body">
        <div className="section-eyebrow">why I think like a PM</div>
        <div className="three-col-grid">
          {cards.map((card) => (
            <div
              key={card.num}
              style={{ background: "var(--surface)", padding: "40px 32px" }}
            >
              <div
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "10px",
                  color: "var(--text-tertiary)",
                  letterSpacing: "0.06em",
                  marginBottom: "20px",
                }}
              >
                {card.num}
              </div>
              <h3
                style={{
                  fontFamily: "var(--font-serif)",
                  fontSize: "clamp(18px,1.6vw,21px)",
                  fontWeight: 400,
                  lineHeight: 1.3,
                  marginBottom: "16px",
                  color: "var(--text-primary)",
                }}
              >
                {card.title}
              </h3>
              <p
                style={{
                  fontSize: "14px",
                  color: "var(--text-secondary)",
                  lineHeight: 1.75,
                }}
              >
                {card.body}
              </p>
              <div
                style={{
                  marginTop: "24px",
                  fontFamily: "var(--font-mono)",
                  fontSize: "10px",
                  color: "var(--text-tertiary)",
                  lineHeight: 1.6,
                  letterSpacing: "0.02em",
                  paddingTop: "20px",
                  borderTop: "0.5px solid var(--border)",
                }}
              >
                {card.annotation}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
