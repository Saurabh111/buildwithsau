import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useReveal } from "../hooks/useReveal";
import Lightbox from "../components/Lightbox";
import microserviceArch from "../assets/microservice_arch.jpg";
import appArch from "../assets/app_arch.png";
import erDiagram from "../assets/er_diagram.png";
import dbStructure from "../assets/db_structure.png";
import s from "./UnderTheHood.module.css";

const decisions = [
  {
    num: "Decision 01 —",
    title: "Microservices over monolith from Day 1.",
    body: "Client had a clear roadmap to integrate a large suite of vendor services post-launch — inventory management, analytics, subscription billing. A monolith would have required a painful refactor at scale. We chose a Gateway + App Server + Dashboard Server pattern to handle consumer and vendor request traffic independently.",
    annotation:
      "// PM call — forward-looking architecture, not over-engineering. justified by client's explicit roadmap for vendor suite expansion.",
    type: "pm",
  },
  {
    num: "Decision 02 —",
    title: "Checkout App as a route, not a new application.",
    body: "The checkout flow for security personnel was simple — scan a QR code, verify the transaction, confirm. Building a standalone app would have added infra overhead, separate deployment, and maintenance cost with zero benefit. It became a protected route in the main dashboard app.",
    annotation:
      "// PM call — scope discipline. saved ~2 weeks of dev and eliminated a deployment surface.",
    type: "pm",
  },
  {
    num: "Decision 03 —",
    title: "Apollo GraphQL federation for multi-surface data.",
    body: "Three surfaces with overlapping data needs — user orders, vendor inventory, security verification — but different access patterns. GraphQL's declarative fetching meant each surface asked for exactly what it needed. Apollo Client middleware normalised and cached data on the frontend, reducing redundant network calls.",
    annotation:
      "// tech call — graphql schema as contract between frontend and backend. both teams work from one source of truth.",
    type: "tech",
  },
  {
    num: "Decision 04 —",
    title: "React Native for Android-first, iOS-ready.",
    body: "Client needed an Android app at launch. React Native gave us a single codebase that ships to both platforms — meaning iOS becomes a config change, not a rebuild. Shared component logic with the React dashboard also reduced cognitive overhead across the team.",
    annotation:
      "// PM call — cross-platform from the start. no re-platforming cost when iOS enters the roadmap.",
    type: "pm",
  },
  {
    num: "Decision 05 —",
    title: "Firebase Auth + MongoDB split by concern.",
    body: "Firebase handles authentication — identity, tokens, multi-factor, session management. MongoDB handles application data. This is a deliberate separation: auth concerns never pollute the data model, and swapping the auth provider later doesn't touch the database schema.",
    annotation:
      "// tech call — auth is a solved problem, use a service. data is your moat, own it.",
    type: "tech",
  },
  {
    num: "Decision 06 —",
    title: "Free tier ad model with hard expiry at v1.",
    body: "The ad platform launched with a free tier — 3 ads per type, 3-day expiry. This was a conscious PM decision: validate advertiser behaviour and willingness before building subscription billing. Subscription plans were explicitly moved to v2, listed in release notes as future features.",
    annotation:
      "// PM call — ship the simplest monetisation model that generates signal. don't build billing before you know people will pay.",
    type: "pm",
  },
];

const archNotes = [
  {
    icon: "⬡",
    color: "blue",
    title: "Gateway Server as single entry point",
    body: "All client requests route through the Gateway. It decides whether to hit the App Server (consumer data) or Dashboard Server (vendor/admin data). Auth tokens are validated here before any data is fetched.",
    pm: "// PM implication: vendor and consumer scaling is now independent",
  },
  {
    icon: "◈",
    color: "green",
    title: "Apollo Client Middleware on the frontend",
    body: "The middleware layer normalises and caches GraphQL responses on the client. UI updates happen from the local cache — the server is only hit when the cache is stale. All three surfaces feel fast even on poor connections.",
    pm: "// PM implication: performance without infra cost",
  },
  {
    icon: "◎",
    color: "amber",
    title: "Firebase Auth as a side channel",
    body: "Auth is completely separate from the data graph. Firebase handles signin and token issuance. The token is validated at the Gateway. Application data never touches Firebase — MongoDB owns everything else.",
    pm: "// PM implication: auth provider is swappable without data migration",
  },
];

const dbDecisions = [
  {
    label: "Schema decision",
    title: "Soft deletes on Store and Personnel",
    body: "Store and Personnel models carry deletedBy and deletedDate fields. Hard deletes would break order history references. Soft deletes preserve data integrity across historical records.",
    pm: "// PM implication: audit trail preserved for dispute resolution",
  },
  {
    label: "Schema decision",
    title: "Vendor → Store → Personnel hierarchy",
    body: "A vendor can own multiple stores. Each store has its own personnel with role-based access. This maps to how retail chains actually operate — one business entity, multiple physical locations, different staff at each.",
    pm: "// PM implication: supports multi-location vendor onboarding in v2 without schema changes",
  },
  {
    label: "Schema decision",
    title: "Order History separate from Order",
    body: "Active orders and historical orders are separated. Order is transactional — it changes state frequently. Order History is append-only — it records what happened. Separating them keeps the active order collection lean and fast.",
    pm: "// PM implication: shopping history loads fast regardless of lifetime order volume",
  },
  {
    label: "Schema decision",
    title: "ProjectSetting as a config collection",
    body: "App name, logo, tagline, support email — all in a single document. Admin can update branding without a deployment. Config is separated from code.",
    pm: "// PM implication: white-labelling for another client is a DB update, not a code change",
  },
];

const stackLayers = [
  {
    layer: "Mobile",
    items: [
      {
        name: "React Native",
        reason:
          "Single codebase for Android + iOS. Native UI components for smooth performance.",
      },
    ],
  },
  {
    layer: "Web Frontend",
    items: [
      {
        name: "React",
        reason:
          "Dashboard and checkout app. Component reuse across both surfaces.",
      },
    ],
  },
  {
    layer: "API Layer",
    items: [
      {
        name: "Apollo GraphQL",
        reason:
          "Declarative fetching. Schema as contract. Gateway federation for microservices.",
      },
    ],
  },
  {
    layer: "Backend",
    items: [
      {
        name: "Node.js + TypeScript",
        reason:
          "Async event-driven — handles concurrent scan + checkout requests efficiently. TypeScript enforces type safety.",
      },
    ],
  },
  {
    layer: "Database",
    items: [
      {
        name: "MongoDB + Mongoose",
        reason:
          "Flexible schema for evolving product data. Mongoose enforces validation and provides ODM query builder.",
      },
    ],
  },
  {
    layer: "Auth + Storage",
    items: [
      {
        name: "Firebase Auth",
        reason:
          "Identity, tokens, MFA. Separated from application data intentionally.",
      },
      {
        name: "Firebase Storage",
        reason:
          "Ad media (stories, banners, tiles). Offloads binary storage from MongoDB.",
      },
    ],
  },
  {
    layer: "Payments",
    items: [
      {
        name: "PhonePe",
        reason:
          "UPI-native payment integration. Generates QR receipt verified by security checkout app.",
      },
    ],
  },
];

const cutList = [
  "Location-based store display",
  "Returns and replacements flow",
  "Coin and rewards system",
  "Referral code integration",
  "Full vendor inventory management",
  "Comprehensive analytics + reporting",
  "Advertisement scheduling",
  "Subscription plan billing",
];
const shippedList = [
  "Product scanning + cart management",
  "Secure checkout via PhonePe",
  "QR code receipt + security verification",
  "Vendor + advertiser onboarding",
  "Ad upload (Stories, Banners, Tiles)",
  "Admin inventory management",
  "Shopping history + receipts",
  "Firebase Auth + role-based access",
  "Full handover documentation",
];

export default function UnderTheHood() {
  const [lightboxSrc, setLightboxSrc] = (useState < string) | (null > null);
  useReveal();

  useEffect(() => {
    document.title = "Under the Hood — ShopPayGo · Saurabh Sharma";
  }, []);

  return (
    <div className={s.page}>
      {lightboxSrc && (
        <Lightbox src={lightboxSrc} onClose={() => setLightboxSrc(null)} />
      )}

      {/* NAV */}
      <nav className={s.nav}>
        <div className={s.navLeft}>
          <Link to="/" className={s.navBack}>
            ← Portfolio
          </Link>
          <div className={s.navDivider} />
          <span className={s.navTitle}>Under the Hood</span>
        </div>
        <div className={s.navTag}>
          <div className={s.navDot} />
          technical depth · ShopPayGo
        </div>
      </nav>

      {/* HERO */}
      <section className={s.hero}>
        <div className={s.heroLabel}>// technical case study · 2024</div>
        <h1 className={s.heroHeadline}>
          ShopPayGo
          <br />
          <em>Under the Hood.</em>
        </h1>
        <p className={s.heroSub}>
          A self-checkout retail ecosystem built across three surfaces —
          customer app, vendor dashboard, security checkout. Every architectural
          decision, stack choice, and scope call I made.
        </p>
        <div className={s.chips}>
          {[
            "React Native",
            "React",
            "Node.js",
            "Apollo GraphQL",
            "MongoDB",
            "Mongoose",
            "Firebase Auth",
            "Firebase Storage",
            "PhonePe",
            "TypeScript",
          ].map((c) => (
            <span
              key={c}
              className={`${s.chip} ${["React Native", "React", "Node.js", "Apollo GraphQL", "MongoDB"].includes(c) ? s.chipHighlight : ""}`}
            >
              {c}
            </span>
          ))}
        </div>
      </section>

      {/* ROLE STRIP */}
      <div className={`${s.roleStrip} reveal`}>
        {[
          { label: "Role", value: "De Facto PM + Lead Developer" },
          {
            label: "Surfaces Built",
            value: "User App · Dashboard · Checkout App",
          },
          { label: "Architecture", value: "Microservices · Gateway Pattern" },
          { label: "Delivered", value: "Dec 2024 · Full Handover" },
          { label: "NDA", value: "Code under NDA · Artefacts visible" },
        ].map((r) => (
          <div key={r.label} className={s.roleCell}>
            <div className={s.roleCellLabel}>{r.label}</div>
            <div className={s.roleCellValue}>{r.value}</div>
          </div>
        ))}
      </div>

      {/* SECTION 1: DECISIONS */}
      <section className={`${s.section} reveal`}>
        <div className={s.sectionInner}>
          <div className={s.sectionLabel}>01 — product decisions</div>
          <div className={s.decisionsGrid}>
            {decisions.map((d) => (
              <div key={d.num} className={s.decisionCard}>
                <div className={s.decisionNum}>{d.num}</div>
                <h3 className={s.decisionTitle}>{d.title}</h3>
                <p className={s.decisionBody}>{d.body}</p>
                <div className={s.decisionAnnotation}>
                  <span className={d.type === "pm" ? s.tagAmber : s.tagBlue}>
                    // {d.type} call
                  </span>
                  <br />
                  {d.annotation.replace(/^\/\/ (pm|tech) call — /, "")}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 2: ARCHITECTURE */}
      <section className={`${s.section} reveal`}>
        <div className={s.sectionInner}>
          <div className={s.sectionLabel}>02 — system architecture</div>
          <div className={s.archLayout}>
            <div
              className={s.archDiagram}
              onClick={() => setLightboxSrc(microserviceArch)}
            >
              <div className={s.diagramHeader}>
                Microservice Architecture <span>click to expand</span>
              </div>
              <img
                src={microserviceArch}
                alt="Microservice Architecture"
                className={s.diagramImg}
              />
              <div className={s.diagramHint}>
                // gateway · app server · dashboard server · mongodb
              </div>
            </div>
            <div className={s.archNotes}>
              {archNotes.map((note) => (
                <div key={note.title} className={s.archNote}>
                  <div
                    className={`${s.archNoteIcon} ${s[`icon_${note.color}`]}`}
                  >
                    {note.icon}
                  </div>
                  <div>
                    <h4 className={s.archNoteTitle}>{note.title}</h4>
                    <p className={s.archNoteBody}>{note.body}</p>
                    <div className={s.archNotePm}>{note.pm}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div
            className={s.fullDiagram}
            onClick={() => setLightboxSrc(appArch)}
          >
            <div className={s.fullDiagramHeader}>
              <span className={s.fullDiagramTitle}>
                Application Architecture — Single Server View
              </span>
              <span className={s.fullDiagramBadge}>v1.0 shipped</span>
            </div>
            <img
              src={appArch}
              alt="Application Architecture"
              className={s.fullDiagramImg}
            />
          </div>
          <div className={s.pmCallout}>
            <div className={s.pmCalloutLabel}>
              // why this architecture was the right call
            </div>
            <p>
              At v1 scale, the single-server view and the microservice view look
              similar. The difference shows up at v2 when vendor suite services
              are added. Because the Dashboard Server is already a separate
              service behind the Gateway, new vendor services slot in without
              touching the consumer-facing App Server. That's the PM decision
              embedded in the architecture — build for the roadmap, not just the
              launch.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 3: DATA MODEL */}
      <section className={`${s.section} reveal`}>
        <div className={s.sectionInner}>
          <div className={s.sectionLabel}>03 — data model</div>
          <div className={s.dbLayout}>
            <div
              className={s.fullDiagram}
              onClick={() => setLightboxSrc(erDiagram)}
            >
              <div className={s.fullDiagramHeader}>
                <span className={s.fullDiagramTitle}>ER Diagram</span>
                <span className={s.fullDiagramBadge}>click to expand</span>
              </div>
              <img
                src={erDiagram}
                alt="ER Diagram"
                className={s.fullDiagramImg}
              />
            </div>
            <div className={s.dbDecisions}>
              {dbDecisions.map((d) => (
                <div key={d.title} className={s.dbDecision}>
                  <div className={s.dbDecisionLabel}>{d.label}</div>
                  <h4 className={s.dbDecisionTitle}>{d.title}</h4>
                  <p className={s.dbDecisionBody}>{d.body}</p>
                  <div className={s.dbDecisionPm}>{d.pm}</div>
                </div>
              ))}
            </div>
          </div>
          <div
            className={s.fullDiagram}
            style={{ marginTop: 48 }}
            onClick={() => setLightboxSrc(dbStructure)}
          >
            <div className={s.fullDiagramHeader}>
              <span className={s.fullDiagramTitle}>
                Database Structure — Collection Map
              </span>
              <span className={s.fullDiagramBadge}>click to expand</span>
            </div>
            <img
              src={dbStructure}
              alt="Database Structure"
              className={s.fullDiagramImg}
            />
          </div>
        </div>
      </section>

      {/* SECTION 4: SCOPE */}
      <section className={`${s.section} reveal`}>
        <div className={s.sectionInner}>
          <div className={s.sectionLabel}>04 — scope discipline</div>
          <div className={s.scopeCompare}>
            <div className={s.scopeSide}>
              <div className={`${s.scopeLabel} ${s.scopeLabelRed}`}>
                What we didn't build in v1{" "}
                <span className={`${s.scopeTag} ${s.scopeTagRed}`}>cut</span>
              </div>
              <h4 className={s.scopeTitle}>
                Everything that wasn't ready to validate.
              </h4>
              <p className={s.scopeBody}>
                These features were explicitly scoped out of v1 and documented
                in release notes as future work — not forgotten, deliberately
                deferred.
              </p>
              <ul className={s.scopeList}>
                {cutList.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
            <div className={s.scopeSide}>
              <div className={`${s.scopeLabel} ${s.scopeLabelGreen}`}>
                What we shipped in v1{" "}
                <span className={`${s.scopeTag} ${s.scopeTagGreen}`}>
                  shipped
                </span>
              </div>
              <h4 className={s.scopeTitle}>
                The smallest system that validated the core hypothesis.
              </h4>
              <p className={s.scopeBody}>
                Core user journey end-to-end. Vendor onboarding. Ad platform
                free tier. Security verification. Complete data model that
                supports v2 without schema changes.
              </p>
              <ul className={s.scopeList}>
                {shippedList.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
          <div className={s.pmCallout}>
            <div className={s.pmCalloutLabel}>
              // the PM discipline behind the cut list
            </div>
            <p>
              Every feature on the cut list has a reason it was deferred, not
              dropped. Location-based stores require GPS permission flows and
              store geofencing — adds complexity without validating the core
              checkout behaviour. Subscription billing requires knowing
              advertisers will pay — free tier generates that signal first.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 5: STACK */}
      <section className={`${s.section} reveal`}>
        <div className={s.sectionInner}>
          <div className={s.sectionLabel}>05 — stack decisions</div>
          <div className={s.stackLayers}>
            {stackLayers.map((layer) => (
              <div key={layer.layer} className={s.stackLayer}>
                <div className={s.stackLayerName}>{layer.layer}</div>
                <div className={s.stackLayerItems}>
                  {layer.items.map((item) => (
                    <div key={item.name} className={s.stackItem}>
                      <span className={s.stackItemName}>{item.name}</span>
                      <div className={s.stackDot} />
                      <span className={s.stackItemReason}>{item.reason}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className={s.footer}>
        <span className={s.footerLeft}>
          Saurabh Sharma · Under the Hood · ShopPayGo · 2024
        </span>
        <span className={s.footerRight}>
          // code under NDA · architecture artefacts by DockDevelopers
        </span>
      </footer>
    </div>
  );
}
