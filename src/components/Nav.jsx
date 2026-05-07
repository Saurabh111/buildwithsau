import React, { useState } from "react";

const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <>
      <style>{`
        @keyframes pulseGreen { 0%,100%{opacity:1} 50%{opacity:.35} }
        .nav-link:hover { color: var(--text-primary) !important; }
        .hamburger { display: none; }
        @media (max-width: 767px) {
          .hamburger { display: flex !important; }
        }
        .mobile-menu {
          display: none;
          position: fixed; top: 65px; left: 0; right: 0;
          background: rgba(247,246,243,0.98);
          border-bottom: 0.5px solid var(--border);
          flex-direction: column;
          padding: 20px;
          z-index: 99;
          backdrop-filter: blur(8px);
        }
        .mobile-menu.open { display: flex; }
        .mobile-menu button {
          font-family: var(--font-mono); font-size: 14px;
          color: var(--text-secondary); letter-spacing: 0.06em;
          text-transform: uppercase; background: none; border: none;
          cursor: pointer; padding: 14px 0;
          border-bottom: 0.5px solid var(--border);
          text-align: left;
        }
        .mobile-menu button:last-child { border-bottom: none; }
      `}</style>

      <nav
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "26px 64px",
          borderBottom: "0.5px solid var(--border)",
          background: "rgba(247,246,243,0.92)",
          position: "sticky",
          top: 0,
          zIndex: 100,
          backdropFilter: "blur(8px)",
        }}
        className="nav-pad"
      >
        <div
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "13px",
            color: "var(--text-primary)",
            letterSpacing: "0.04em",
          }}
        >
          Saurabh Sharma
        </div>

        {/* Desktop links */}
        <ul
          className="nav-links-wrap"
          style={{ display: "flex", gap: "32px", listStyle: "none" }}
        >
          {[
            ["work", "Work"],
            ["experience", "Experience"],
            ["contact", "Contact"],
          ].map(([id, label]) => (
            <li key={id}>
              <button
                className="nav-link"
                onClick={() => scrollTo(id)}
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "11px",
                  color: "var(--text-secondary)",
                  letterSpacing: "0.06em",
                  textTransform: "uppercase",
                  cursor: "pointer",
                  transition: "color 0.2s",
                  background: "none",
                  border: "none",
                  padding: 0,
                }}
              >
                {label}
              </button>
            </li>
          ))}
          <li>
            <a
              href="/under-the-hood.html"
              className="nav-link"
              style={{
                fontFamily: "var(--cascadia-code)",
                fontSize: "11px",
                color: "var(--accent-blue)",
                letterSpacing: "0.06em",
                cursor: "pointer",
                transition: "color 0.2s",
                textDecoration: "none",
              }}
            >
              underTheHood
            </a>
          </li>
        </ul>

        <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "7px",
              fontFamily: "var(--font-mono)",
              fontSize: "11px",
              color: "var(--text-secondary)",
              letterSpacing: "0.04em",
            }}
          >
            <div
              style={{
                width: "6px",
                height: "6px",
                borderRadius: "50%",
                background: "#22C55E",
                animation: "pulseGreen 2.5s ease-in-out infinite",
              }}
            />
            <span className="nav-links-wrap" style={{ display: "inline" }}>
              available for apm roles
            </span>
          </div>
          {/* Hamburger */}
          <button
            className="hamburger"
            onClick={() => setMenuOpen((o) => !o)}
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              display: "none",
              flexDirection: "column",
              gap: "5px",
              padding: "4px",
            }}
          >
            <span
              style={{
                display: "block",
                width: "20px",
                height: "1px",
                background: "var(--text-primary)",
              }}
            />
            <span
              style={{
                display: "block",
                width: "20px",
                height: "1px",
                background: "var(--text-primary)",
              }}
            />
            <span
              style={{
                display: "block",
                width: "14px",
                height: "1px",
                background: "var(--text-primary)",
              }}
            />
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div className={`mobile-menu ${menuOpen ? "open" : ""}`}>
        {[
          ["work", "Work"],
          ["experience", "Experience"],
          ["contact", "Contact"],
        ].map(([id, label]) => (
          <button key={id} onClick={() => scrollTo(id)}>
            {label}
          </button>
        ))}
        <a
          href="/under-the-hood.html"
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "14px",
            color: "var(--text-secondary)",
            letterSpacing: "0.06em",
            textTransform: "uppercase",
            background: "none",
            border: "none",
            cursor: "pointer",
            padding: "14px 0",
            borderBottom: "0.5px solid var(--border)",
            textAlign: "left",
            textDecoration: "none",
            display: "block",
          }}
        >
          Under the Hood
        </a>
      </div>
    </>
  );
};

export default Nav;
