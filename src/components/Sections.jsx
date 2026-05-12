import React from "react";
import useReveal from "./useReveal";

const rv = (v) => ({
  opacity: v ? 1 : 0,
  transform: v ? "translateY(0)" : "translateY(20px)",
  transition: "opacity 0.65s ease, transform 0.65s ease",
});

// ── PROJECTS ──
const projects = [
  {
    domain: "FinTech",
    name: "Seetu Gold Saving App",
    desc: "A manual gold-saving and raffle scheme — run entirely on paper and verbal agreements — needed to become a mobile product. I led product scoping, defined the KYC onboarding flow, payment architecture, and analytics dashboard before a single screen was designed. The result replaced a process that required full-time staff to manage.",
    outcome: "~40% operational efficiency improvement",
  },
  {
    domain: "Social / Events",
    name: "HobbyHopp",
    desc: "A location-based event discovery and booking platform built around a simple insight: people don't know what's happening near them, and finding out is too much effort. I mapped the complete user journey — onboarding, discovery, booking, and community — and made sure the product was designed around that journey, not around what was easy to build.",
    outcome: "~30% increase in user engagement & retention",
  },
  {
    domain: "Retail Tech",
    name: "ShopPayGo",
    desc: "An end-to-end self-checkout ecosystem covering three surfaces: customer app, vendor dashboard, and a security verification app. The product had to solve checkout speed, shrinkage risk, and in-store advertising revenue simultaneously. I aligned three separate stakeholder groups on a single product vision and shipped all three surfaces.",
    outcome: "~35% reduction in checkout time",
  },
];

export const Projects = () => {
  const [ref, visible] = useReveal();
  return (
    <section ref={ref} className="section-grid" style={rv(visible)}>
      <div className="section-gutter">
        <div className="section-gutter-label">projects</div>
      </div>
      <div className="section-body">
        <div className="section-eyebrow">other shipped work</div>
        <div className="three-col-grid">
          {projects.map((p) => (
            <div
              key={p.name}
              style={{ background: "var(--surface)", padding: "32px 28px" }}
            >
              <div
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "10px",
                  color: "var(--text-tertiary)",
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  marginBottom: "16px",
                }}
              >
                {p.domain}
              </div>
              <div
                style={{
                  fontFamily: "var(--font-serif)",
                  fontSize: "clamp(17px,1.6vw,20px)",
                  fontWeight: 400,
                  marginBottom: "12px",
                  lineHeight: 1.3,
                }}
              >
                {p.name}
              </div>
              <p
                style={{
                  fontSize: "13px",
                  color: "var(--text-secondary)",
                  lineHeight: 1.7,
                  marginBottom: "20px",
                }}
              >
                {p.desc}
              </p>
              <div
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "11px",
                  color: "var(--text-primary)",
                  letterSpacing: "0.02em",
                  paddingTop: "16px",
                  borderTop: "0.5px solid var(--border)",
                }}
              >
                {p.outcome}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// ── EXPERIENCE ──
const expItems = [
  {
    years: "2025–Now",
    role: "MBA — Business Analytics",
    company: "UPES · Dehradun",
    desc: "The MBA was a deliberate move to build the business layer that three years of engineering didn't give me. Strategy, GTM frameworks, market sizing, financial analysis — P&L, balance sheets, cost structures. I can now sit in a room with a CFO or a growth lead and speak their language fluently. That's the third leg of what makes a complete PM: technical depth, product instinct, and business literacy.",
    tag: "business model canvas · porter's five forces · gtm · ansoff matrix · financial analysis",
  },
  {
    years: "Oct 2023–Feb 2025",
    role: "Senior Software Developer → De Facto PM",
    company: "DockDevelopers · Noida",
    desc: "There was no dedicated PM on my projects. So the PM work either happened or it didn't — and I made sure it happened. I ran requirement sessions with clients, wrote PRDs, made MVP prioritisation calls, scoped future phases, reviewed wireframes, finalised designs with client sign-off, set up MERN GraphQL architecture, ran sprint planning, reviewed PRs, attended daily scrums, and presented roadmaps on client calls. I didn't inherit this role. I built it.",
    tag: "prd · mvp prioritisation · roadmap · sprint planning · client communication · architecture",
  },
  {
    years: "Feb 2022–Oct 2023",
    role: "Software Engineer — The Bridge Role",
    company: "DockDevelopers · Noida",
    desc: "Full-stack MERN development across frontend, backend APIs, and database design. But the more important thing that happened here was that I started sitting in rooms where product decisions were made — client requirement discussions, design reviews, architecture debates with senior developers. I was the person who understood the technical constraints well enough to translate them into what was actually buildable. That's when I started thinking like a PM.",
    tag: "full-stack · stakeholder communication · design collaboration · requirement gathering · technical scoping ",
  },
  {
    years: "Aug 2021– Feb 2022",
    role: "Intern → Software Developer",
    company: "DockDevelopers · Noida",
    desc: "I started building React pages and learned something that most PMs never do: how software actually breaks. What makes a codebase unmaintainable. Why a decision made in week one costs four weeks of rework in month six. That foundation is what lets me have genuinely honest conversations with engineering teams — about feasibility, about technical debt, about what 'done' actually means.",
    tag: "react · SPAs",
  },
];

export const Experience = () => {
  const [ref, visible] = useReveal();
  return (
    <section
      ref={ref}
      id="experience"
      className="section-grid"
      style={rv(visible)}
    >
      <div className="section-gutter">
        <div className="section-gutter-label">experience</div>
      </div>
      <div className="section-body">
        <div className="section-eyebrow">career timeline</div>
        <div>
          {expItems.map((item, i) => (
            <div
              key={item.years}
              className="exp-row"
              style={{
                borderBottom:
                  i < expItems.length - 1
                    ? "0.5px solid var(--border)"
                    : "none",
              }}
            >
              <div
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "12px",
                  color: "var(--text-tertiary)",
                  letterSpacing: "0.04em",
                  paddingTop: "3px",
                }}
              >
                {item.years}
              </div>
              <div>
                <div
                  style={{
                    fontSize: "15px",
                    fontWeight: 500,
                    color: "var(--text-primary)",
                    marginBottom: "4px",
                  }}
                >
                  {item.role}
                </div>
                <div
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "11px",
                    color: "var(--text-secondary)",
                    letterSpacing: "0.04em",
                    marginBottom: "14px",
                  }}
                >
                  {item.company}
                </div>
                <p
                  style={{
                    fontSize: "14px",
                    color: "var(--text-secondary)",
                    lineHeight: 1.75,
                  }}
                >
                  {item.desc}
                </p>
                <span
                  style={{
                    display: "inline-block",
                    fontFamily: "var(--font-mono)",
                    fontSize: "10px",
                    color: "var(--accent-blue)",
                    border: "0.5px solid var(--accent-blue)",
                    borderRadius: "3px",
                    padding: "3px 8px",
                    letterSpacing: "0.04em",
                    marginTop: "14px",
                  }}
                >
                  {item.tag}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// ── BUILDER ──
const statements = [
  ["I've set up MERN GraphQL architectures from zero."],
  ["I've written PRDs with no PM above me."],
  ["I've argued with a designer and learned I was wrong."],
  ["I've sat in client calls explaining a roadmap I built."],
  ["I've reviewed PRs at 11pm before a client demo."],
];

export const Builder = () => {
  const [ref, visible] = useReveal();
  return (
    <section
      ref={ref}
      className="builder-grid section-grid"
      style={{
        ...rv(visible),
        background: "var(--accent-dark)",
        borderBottom: "0.5px solid var(--border)",
      }}
    >
      <div
        className="builder-gutter section-gutter"
        style={{ borderRight: "0.5px solid rgba(255,255,255,0.1)" }}
      >
        <div
          className="section-gutter-label"
          style={{ color: "rgba(255,255,255,0.25)" }}
        >
          conviction
        </div>
      </div>
      <div className="builder-pad section-body">
        <div
          className="section-eyebrow"
          style={{ color: "rgba(255,255,255,0.3)" }}
        >
          <span>what I know to be true</span>
          <div
            style={{
              flex: 1,
              height: "0.5px",
              background: "rgba(255,255,255,0.1)",
              maxWidth: "200px",
            }}
          />
        </div>
        <div>
          {statements.map(([bold, em], i) => (
            <div
              key={i}
              style={{
                display: "grid",
                gridTemplateColumns: "28px 1fr",
                gap: "20px",
                alignItems: "start",
                padding: "28px 0",
                borderBottom:
                  i < statements.length - 1
                    ? "0.5px solid rgba(255,255,255,0.08)"
                    : "none",
              }}
            >
              <span
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "10px",
                  color: "rgba(255,255,255,0.25)",
                  letterSpacing: "0.06em",
                  paddingTop: "4px",
                }}
              >
                0{i + 1}
              </span>
              <p
                style={{
                  fontFamily: "var(--font-serif)",
                  fontSize: "clamp(17px,1.8vw,21px)",
                  fontWeight: 400,
                  lineHeight: 1.5,
                  color: "rgba(255,255,255,0.88)",
                }}
              >
                {bold}{" "}
                <em
                  style={{
                    fontStyle: "italic",
                    color: "rgba(255,255,255,0.48)",
                  }}
                >
                  {em}
                </em>
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// ── CONTACT ──
export const Contact = () => {
  const [ref, visible] = useReveal();
  return (
    <section
      ref={ref}
      id="contact"
      className="contact-grid"
      style={{
        ...rv(visible),
        display: "grid",
        gridTemplateColumns: "160px 1fr",
        minHeight: "360px",
      }}
    >
      <div
        className="contact-gutter-col"
        style={{ borderRight: "0.5px solid var(--border)" }}
      />
      <div
        className="contact-pad"
        style={{
          padding: "96px 64px 96px 72px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <h2
          style={{
            fontFamily: "var(--font-serif)",
            fontSize: "clamp(32px, 4vw, 52px)",
            fontWeight: 400,
            lineHeight: 1.15,
            letterSpacing: "-0.02em",
            maxWidth: "580px",
            marginBottom: "20px",
          }}
        >
          Hiring APMs or want to
          <br />
          <em style={{ fontStyle: "italic" }}>talk product?</em>
        </h2>
        <p
          style={{
            fontSize: "15px",
            color: "var(--text-secondary)",
            lineHeight: 1.7,
            maxWidth: "460px",
            marginBottom: "40px",
          }}
        >
          I'm actively interviewing for Associate Product Manager roles. If
          you're building something where a PM who can also open a terminal
          would be useful — I'd genuinely love to talk.
        </p>
        <div
          className="contact-links-row"
          style={{ display: "flex", gap: "32px", alignItems: "center" }}
        >
          {[
            {
              label: "build with sau ↗",
              href: "mailto:buildwithsau@gmail.com",
            },
            {
              label: "LinkedIn ↗",
              href: "https://www.linkedin.com/in/saurabh-sharma-5a3292104/",
            },
          ].map((link) => (
            <a
              key={link.href}
              href={link.href}
              target="_blank"
              rel="noreferrer"
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "13px",
                color: "var(--text-primary)",
                letterSpacing: "0.03em",
                borderBottom: "0.5px solid var(--border-strong)",
                paddingBottom: "4px",
                transition: "color 0.2s, border-color 0.2s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = "var(--accent-blue)";
                e.currentTarget.style.borderColor = "var(--accent-blue)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = "var(--text-primary)";
                e.currentTarget.style.borderColor = "var(--border-strong)";
              }}
            >
              {link.label}
            </a>
          ))}
        </div>
        <div
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "10px",
            color: "var(--text-tertiary)",
            letterSpacing: "0.04em",
            marginTop: "36px",
          }}
        >
          // no form. a form is friction I chose not to add. &nbsp;·&nbsp; no
          popup. you came here voluntarily.
        </div>
      </div>
    </section>
  );
};

// ── FOOTER ──
export const Footer = () => (
  <footer
    style={{
      borderTop: "0.5px solid var(--border)",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "20px 64px",
    }}
  >
    <div
      style={{
        fontFamily: "var(--font-mono)",
        fontSize: "10px",
        color: "var(--text-tertiary)",
        letterSpacing: "0.04em",
      }}
    >
      Saurabh Sharma · Associate Product Manager · 2025
    </div>
    <div
      style={{
        fontFamily: "var(--font-mono)",
        fontSize: "10px",
        color: "var(--text-tertiary)",
        letterSpacing: "0.04em",
      }}
    >
      // this site is itself a ux decision
    </div>
  </footer>
);
