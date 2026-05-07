import React, { useState } from "react";
import useReveal from "./useReveal";

const rv = (v) => ({
  opacity: v ? 1 : 0,
  transform: v ? "translateY(0)" : "translateY(20px)",
  transition: "opacity 0.65s ease, transform 0.65s ease",
});

const Disclosure = ({ label, children }) => {
  const [open, setOpen] = useState(false);
  return (
    <div
      style={{
        border: "0.5px solid var(--border)",
        borderRadius: "6px",
        overflow: "hidden",
        marginTop: "8px",
      }}
    >
      <button
        onClick={() => setOpen((o) => !o)}
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "20px 28px",
          background: "var(--bg)",
          width: "100%",
          borderBottom: open ? "0.5px solid var(--border)" : "none",
          cursor: "pointer",
          border: "none",
        }}
      >
        <span
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "11px",
            color: "var(--text-secondary)",
            letterSpacing: "0.07em",
            textTransform: "uppercase",
          }}
        >
          {label}
        </span>
        <span
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "14px",
            color: "var(--text-tertiary)",
            display: "inline-block",
            transition: "transform 0.3s",
            transform: open ? "rotate(45deg)" : "none",
          }}
        >
          +
        </span>
      </button>
      {open && <div style={{ padding: "36px 28px" }}>{children}</div>}
    </div>
  );
};

const decisions = [
  {
    label: "Why Sector 16B",
    title: "Unfair advantage at the starting line",
    body: "The research happened here. The vendor conversations happened here. I had relationships and trust built in this area before the product existed. Most founders make the mistake of launching where the market looks biggest on a slide deck. I launched where I already had an ear to the ground — which meant faster validation, fewer cold introductions, and real feedback from Day 1.",
  },
  {
    label: "Why Restaurants First",
    title: "Hunger is immediate. Groceries can wait.",
    body: "Food is the one category where the decision to order happens in the moment — not planned, not deferred. Every conversation with local consumers confirmed it: the most frequent WhatsApp orders were food. Starting with restaurants gave us the highest chance of building a daily habit from the first week. If we'd started with kiranas or pharmacies, we'd be waiting for someone to run out of groceries.",
  },
  {
    label: "Why No Delivery Infra",
    title: "The biggest cost is the one you don't build.",
    body: "Local shops already had WhatsApp delivery staff — walking deliveries within societies, motorcycle for 3–5km. We plugged into existing behaviour instead of replicating Swiggy's logistics overhead. This makes unit economics positive from Day 1.",
  },
  {
    label: "Commission Model",
    title: "12% vs Swiggy's 25% — the vendor's real choice",
    body: "At 25% commission, vendors inflate prices 40% just to stay profitable. At 12%, they can list at near-offline prices. The user pays less, vendor earns more. The value extracted by the platform is fair, not extractive. Minimum order ₹150.",
  },
  {
    label: "North Star Metric",
    title: "WAOU — Weekly Active Ordering Users",
    body: "Installs are vanity. Revenue depends on vendor count. WAOU captures real habit formation — users ordering at least once per week. It measures marketplace health on both supply and demand sides simultaneously.",
  },
];

const plcStages = [
  {
    index: "stage 01",
    name: "Discovery",
    body: "Observed WhatsApp ordering and photo-payment behaviour firsthand. Ran vendor and consumer interviews in Sector 16B. Applied the Jobs To Be Done framework to articulate the real problem: 'When I'm hungry at home, I want to order from my local restaurant — but I can't browse their full menu on WhatsApp.' Mapped vendor pains (high commissions, zero customer data) against consumer pains (inflated prices, no local discovery) using the Value Proposition Canvas.",
    tools: [
      "User Interviews",
      "JTBD Framework",
      "Value Prop Canvas",
      "Field Observation",
    ],
  },
  {
    index: "stage 02",
    name: "Market Validation",
    body: "Built the business model using the Business Model Canvas. Ran Porter's Five Forces to understand why Swiggy genuinely cannot go hyperlocal — unit economics break below ₹300 AOV, dark store infrastructure is incompatible with micro-local density, and their operations model is built for scale, not depth. Validated the 12% commission threshold through direct vendor conversations. Sized TAM (Indian hyperlocal commerce), SAM (Greater Noida West), SOM (Sector 16B).",
    tools: [
      "Business Model Canvas",
      "Porter's Five Forces",
      "TAM/SAM/SOM",
      "Unit Economics Modelling",
    ],
  },
  {
    index: "stage 03",
    name: "Product Definition",
    body: "Wrote the PRD from scratch. Applied MoSCoW to cut the MVP ruthlessly — reviews, referrals, AI analytics, and the vendor dashboard all moved to v2. Core must-haves: browse local shops, add to cart, checkout with Razorpay, order acceptance flow. Used RICE scoring for feature sequencing. Every feature was anchored to a specific user job, not a stakeholder request.",
    tools: [
      "PRD Authoring",
      "MoSCoW Prioritisation",
      "RICE Scoring",
      "Notion",
      "User Story Mapping",
    ],
  },
  {
    index: "stage 04",
    name: "UX & Design",
    body: "Mapped end-to-end user flows in Figma for both consumer and vendor journeys. Key decisions: single shop view before cart (reduces choice paralysis), real-time order tracking (addresses post-payment anxiety — the biggest trust gap in hyperlocal), vendor acceptance timer visible to users (sets expectations, cuts drop-off at the most fragile moment in the experience).",
    tools: [
      "Figma",
      "Heuristic Evaluation",
      "5-Second Test",
      "User Flow Mapping",
    ],
  },
  {
    index: "stage 05",
    name: "Dev Planning & Build",
    body: "Architected and set up the MERN GraphQL stack. Configured Git branching strategy (main, dev, feature/*), cloud environments across dev, staging, and prod, and CI/CD pipeline. Wrote epics and user stories in standard format with acceptance criteria and explicit Definition of Done. Ran sprint planning with capacity-based commitment. Reviewed PRs, oversaw and contributed to development, attended daily scrums and weekly client calls.",
    tools: [
      "Jira",
      "GitHub",
      "MERN + GraphQL",
      "Agile Scrum",
      "CI/CD",
      "PR Reviews",
    ],
  },
  {
    index: "stage 06",
    name: "14-Day Launch",
    body: "Designed a phased rollout: Days 1–4 vendor-only (supply must exist before demand is created), Days 5–9 controlled user launch via WhatsApp communities and QR codes, Days 10–14 paid growth push on Instagram and Google with geo-targeting. Ran a pre-mortem before launch day. Instrumented Mixpanel for funnel tracking, Sentry for error monitoring. Success criteria locked before launch: 1500 installs, 300 orders, 40+ daily orders, 25% repeat users by Day 14.",
    tools: [
      "AARRR Funnel",
      "Pre-mortem Framework",
      "Mixpanel",
      "Sentry",
      "Meta Ads Manager",
    ],
  },
];

const CaseStudy = () => {
  const [ref, visible] = useReveal();
  return (
    <section
      ref={ref}
      id="work"
      className="section-grid"
      style={{ ...rv(visible), background: "var(--surface)" }}
    >
      <div className="section-gutter">
        <div className="section-gutter-label">case study</div>
      </div>

      <div className="section-body">
        <div className="section-eyebrow">
          featured project · currently launching
        </div>

        {/* Header */}
        <div className="two-col-case">
          <div>
            <div
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "10px",
                color: "var(--accent-blue)",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                marginBottom: "20px",
              }}
            >
              Hyperlocal Commerce · Greater Noida West · 2024–2025
            </div>
            <h2
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: "clamp(28px, 3.5vw, 46px)",
                fontWeight: 400,
                lineHeight: 1.12,
                letterSpacing: "-0.02em",
                marginBottom: "24px",
              }}
            >
              A hyperlocal marketplace fixing what Swiggy broke.
            </h2>
            <p
              style={{
                fontSize: "clamp(14px,1.4vw,16px)",
                color: "var(--text-secondary)",
                lineHeight: 1.75,
                marginBottom: "32px",
              }}
            >
              Local shops in Greater Noida West had loyal customers who
              genuinely preferred buying local — but those customers were
              ordering on WhatsApp because there was no better option. Payments
              were photos sent to a chat. Menus were invisible. I built the
              product to fix what was a solvable UX problem hiding inside what
              looked like a logistics problem.
            </p>
            <div className="case-metrics">
              {[
                ["12%", "commission vs 25% on Swiggy"],
                ["₹0", "delivery infrastructure cost"],
                ["15+", "vendors onboarded at launch"],
              ].map(([v, l]) => (
                <div
                  key={l}
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "4px",
                  }}
                >
                  <span
                    style={{
                      fontFamily: "var(--font-serif)",
                      fontSize: "clamp(24px,3vw,32px)",
                      fontWeight: 400,
                      color: "var(--text-primary)",
                      letterSpacing: "-0.02em",
                    }}
                  >
                    {v}
                  </span>
                  <span
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: "10px",
                      color: "var(--text-secondary)",
                      letterSpacing: "0.06em",
                      textTransform: "uppercase",
                    }}
                  >
                    {l}
                  </span>
                </div>
              ))}
            </div>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-end",
            }}
          >
            <div
              style={{
                background: "var(--bg)",
                border: "0.5px solid var(--border)",
                borderRadius: "6px",
                padding: "28px 32px",
              }}
            >
              <div
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "10px",
                  color: "var(--text-tertiary)",
                  letterSpacing: "0.06em",
                  marginBottom: "12px",
                }}
              >
                // key insight
              </div>
              <p
                style={{
                  fontFamily: "var(--font-serif)",
                  fontSize: "clamp(15px,1.5vw,17px)",
                  fontWeight: 400,
                  lineHeight: 1.6,
                  color: "var(--text-primary)",
                }}
              >
                "Swiggy and Zomato solved food delivery in 2015. By 2024, they'd
                broken what they fixed. 25% platform commission forces vendors
                to inflate menu prices by 40% just to survive. The platform
                wins. Everyone else loses."
              </p>
            </div>
          </div>
        </div>

        {/* 30-second summary */}
        <div className="summary-grid">
          {[
            [
              "The Problem",
              "Local preference exists. WhatsApp friction kills it. Platform decay is real — Swiggy's model now extracts from both sides.",
            ],
            [
              "My Decision",
              "Sector 16B first. Restaurants first. Vendor-led growth. No delivery infra. Build the flywheel, not the logistics.",
            ],
            [
              "The Outcome",
              "Developed and launching in Greater Noida West, Sector 16B. 14-day phased rollout. WAOU as north star metric.",
            ],
          ].map(([t, b]) => (
            <div
              key={t}
              style={{ background: "var(--bg)", padding: "28px 24px" }}
            >
              <div
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "10px",
                  color: "var(--text-tertiary)",
                  letterSpacing: "0.07em",
                  textTransform: "uppercase",
                  marginBottom: "12px",
                }}
              >
                {t}
              </div>
              <p
                style={{
                  fontSize: "14px",
                  color: "var(--text-secondary)",
                  lineHeight: 1.7,
                }}
              >
                {b}
              </p>
            </div>
          ))}
        </div>
        <div
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "10px",
            color: "var(--text-tertiary)",
            marginBottom: "40px",
            padding: "8px 0",
            letterSpacing: "0.03em",
          }}
        >
          // progressive disclosure — 30-second summary always visible. expand
          each layer for depth.
        </div>

        {/* Disclosures */}
        <Disclosure label="Strategic Decisions & Research">
          <div>
            {decisions.map((d, i) => (
              <div
                key={d.label}
                style={{
                  display: "grid",
                  gridTemplateColumns: "clamp(120px,18vw,200px) 1fr",
                  gap: "32px",
                  padding: "28px 0",
                  borderBottom:
                    i < decisions.length - 1
                      ? "0.5px solid var(--border)"
                      : "none",
                }}
              >
                <div
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "11px",
                    color: "var(--text-secondary)",
                    letterSpacing: "0.05em",
                    paddingTop: "2px",
                    textTransform: "uppercase",
                  }}
                >
                  {d.label}
                </div>
                <div>
                  <h4
                    style={{
                      fontFamily: "var(--font-sans)",
                      fontSize: "15px",
                      fontWeight: 500,
                      marginBottom: "10px",
                      color: "var(--text-primary)",
                    }}
                  >
                    {d.title}
                  </h4>
                  <p
                    style={{
                      fontSize: "14px",
                      color: "var(--text-secondary)",
                      lineHeight: 1.75,
                    }}
                  >
                    {d.body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Disclosure>

        <Disclosure label="Product Lifecycle — Discovery to Launch">
          <div>
            {plcStages.map((s, i) => (
              <div
                key={s.index}
                className="plc-stage-row"
                style={{ display: "grid", gridTemplateColumns: "180px 1fr" }}
              >
                <div
                  className="plc-left"
                  style={{
                    padding: "20px 28px 20px 0",
                    borderRight: "0.5px solid var(--border)",
                    marginRight: "28px",
                  }}
                >
                  <span
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: "10px",
                      color: "var(--text-tertiary)",
                      letterSpacing: "0.06em",
                      display: "block",
                      marginBottom: "6px",
                    }}
                  >
                    {s.index}
                  </span>
                  <span
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: "12px",
                      color: "var(--text-primary)",
                      letterSpacing: "0.04em",
                    }}
                  >
                    {s.name}
                  </span>
                </div>
                <div className="plc-right" style={{ padding: "20px 0" }}>
                  <p
                    style={{
                      fontSize: "14px",
                      color: "var(--text-secondary)",
                      lineHeight: 1.7,
                      marginBottom: "12px",
                    }}
                  >
                    {s.body}
                  </p>
                  <div
                    style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}
                  >
                    {s.tools.map((t) => (
                      <span
                        key={t}
                        style={{
                          fontFamily: "var(--font-mono)",
                          fontSize: "10px",
                          color: "var(--text-secondary)",
                          border: "0.5px solid var(--border-strong)",
                          borderRadius: "3px",
                          padding: "3px 8px",
                        }}
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Disclosure>

        <Disclosure label="GTM Strategy — The Marketplace Flywheel">
          <div className="gtm-grid">
            <div>
              <p
                style={{
                  fontSize: "14px",
                  color: "var(--text-secondary)",
                  lineHeight: 1.75,
                  marginBottom: "20px",
                }}
              >
                The GTM insight that shaped everything: marketplace growth is a
                flywheel, not a funnel. Vendor density creates user choice. User
                orders create vendor revenue. Vendor revenue motivates vendors
                to promote the platform to their existing customers. Those
                customers bring their neighbours. More users attract more
                vendors. The loop compounds.
              </p>
              <p
                style={{
                  fontSize: "14px",
                  color: "var(--text-secondary)",
                  lineHeight: 1.75,
                  marginBottom: "20px",
                }}
              >
                This is why we onboarded vendors before we marketed to users.
                You don't invite people to a restaurant before the kitchen is
                open. The first 4 days of the launch plan were vendor-only for
                exactly this reason.
              </p>
              <p
                style={{
                  fontSize: "14px",
                  color: "var(--text-secondary)",
                  lineHeight: 1.75,
                }}
              >
                Expansion to Sector 4, Sector 1, and Gaur City is
                condition-gated — not calendar-gated. We move when we hit 50+
                daily orders, 20+ active vendors, and a healthy repeat user
                rate. Not before. Expanding too early is how marketplaces die.
              </p>
              <div
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "10px",
                  color: "var(--text-tertiary)",
                  lineHeight: 1.6,
                  paddingTop: "16px",
                  marginTop: "16px",
                  borderTop: "0.5px solid var(--border)",
                }}
              >
                // condition-gated expansion, not calendar-gated
              </div>
            </div>
            <div
              style={{ display: "flex", flexDirection: "column", gap: "8px" }}
            >
              <div
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "11px",
                  color: "var(--text-secondary)",
                  letterSpacing: "0.06em",
                  marginBottom: "8px",
                  textTransform: "uppercase",
                }}
              >
                3 GTM Pillars
              </div>
              {[
                [
                  "Hyperlocal Trust",
                  "Position as 'your neighbourhood app' — not a Swiggy alternative, but a fundamentally different relationship between residents and local businesses.",
                ],
                [
                  "Price Advantage",
                  "12% commission vs 25% means vendors can list at near-offline prices. For the first time, ordering from an app is cheaper than walking to the shop.",
                ],
                [
                  "Vendor-Led Growth",
                  "QR stickers at counters, staff recommendations, order receipts that mention the app. Every vendor is a distribution channel. We activate them, they do the marketing.",
                ],
              ].map(([t, b]) => (
                <div
                  key={t}
                  style={{
                    padding: "16px 20px",
                    background: "var(--bg)",
                    border: "0.5px solid var(--border)",
                    borderRadius: "4px",
                  }}
                >
                  <div
                    style={{
                      fontSize: "13px",
                      fontWeight: 500,
                      marginBottom: "6px",
                    }}
                  >
                    {t}
                  </div>
                  <div
                    style={{
                      fontSize: "13px",
                      color: "var(--text-secondary)",
                      lineHeight: 1.65,
                    }}
                  >
                    {b}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Disclosure>
      </div>
    </section>
  );
};

export default CaseStudy;
