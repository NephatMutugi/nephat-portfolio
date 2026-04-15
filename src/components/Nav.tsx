import { useState, useEffect } from "react";
import { COLORS } from "../data/content";
import { useMobile } from "../context/MobileContext";

const NAV_LINKS = ["Skills", "Experience", "Projects", "Contact"];

export function Nav() {
  const mobile = useMobile();
  const [menuOpen, setMenuOpen] = useState(false);
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);
  const [activeSection, setActiveSection] = useState<string>("");

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-80px 0px -50% 0px",
        threshold: 0,
      }
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  return (
    <nav
      aria-label="Main navigation"
      style={{
        position: "fixed",
        top: 0,
        width: "100%",
        background: "rgba(15,23,42,0.85)",
        backdropFilter: "blur(16px)",
        borderBottom: `1px solid ${COLORS.border}`,
        zIndex: 200,
      }}
    >
      <div
        style={{
          maxWidth: 1100,
          margin: "auto",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: ".85rem 1.25rem",
        }}
      >
        <div style={{ fontWeight: 800, fontSize: "1.1rem", color: COLORS.text }}>
          Nephat<span style={{ color: COLORS.accent }}>.</span>
        </div>

        {mobile ? (
          <>
            <button
              onClick={() => setMenuOpen((o) => !o)}
              aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={menuOpen}
              style={{
                background: "none",
                border: `1px solid ${COLORS.border}`,
                borderRadius: 7,
                padding: ".4rem .65rem",
                cursor: "pointer",
                fontSize: "1.1rem",
                color: COLORS.text,
              }}
            >
              {menuOpen ? "✕" : "☰"}
            </button>

            {menuOpen && (
              <>
                <div
                  onClick={() => setMenuOpen(false)}
                  style={{
                    position: "fixed",
                    inset: 0,
                    zIndex: -1,
                  }}
                />
                <div
                  style={{
                    position: "absolute",
                    top: "100%",
                    left: 0,
                    right: 0,
                    background: COLORS.surface,
                    borderBottom: `1px solid ${COLORS.border}`,
                    display: "flex",
                    flexDirection: "column",
                    padding: ".75rem 1.25rem",
                    gap: ".25rem",
                    boxShadow: "0 8px 24px rgba(0,0,0,.3)",
                  }}
                >
                  {NAV_LINKS.map((l) => (
                    <a
                      key={l}
                      href={`#${l.toLowerCase()}`}
                      onClick={() => setMenuOpen(false)}
                      style={{
                        textDecoration: "none",
                        color: COLORS.text,
                        fontWeight: 600,
                        fontSize: ".95rem",
                        padding: ".6rem .5rem",
                        borderRadius: 7,
                      }}
                    >
                      {l}
                    </a>
                  ))}
                  <a
                    href="#contact"
                    onClick={() => setMenuOpen(false)}
                    style={{
                      background: COLORS.accent,
                      color: "#0F172A",
                      padding: ".6rem 1rem",
                      borderRadius: 8,
                      fontWeight: 700,
                      fontSize: ".9rem",
                      textDecoration: "none",
                      marginTop: ".25rem",
                      textAlign: "center",
                    }}
                  >
                    Contact
                  </a>
                </div>
              </>
            )}
          </>
        ) : (
          <>
            <div style={{ display: "flex", gap: ".15rem" }}>
              {NAV_LINKS.map((l) => {
                const isActive = activeSection === l.toLowerCase();
                const isHovered = hoveredLink === l;
                return (
                  <a
                    key={l}
                    href={`#${l.toLowerCase()}`}
                    onMouseEnter={() => setHoveredLink(l)}
                    onMouseLeave={() => setHoveredLink(null)}
                    style={{
                      textDecoration: "none",
                      color: isActive ? COLORS.accent : isHovered ? COLORS.text : COLORS.muted,
                      fontSize: ".875rem",
                      fontWeight: isActive ? 700 : 500,
                      padding: ".4rem .85rem",
                      borderRadius: 7,
                      background: isHovered && !isActive ? COLORS.surface2 : "transparent",
                      transition: "all .15s",
                      borderBottom: isActive ? `2px solid ${COLORS.accent}` : "2px solid transparent",
                    }}
                  >
                    {l}
                  </a>
                );
              })}
            </div>
            <a
              href="#contact"
              style={{
                background: COLORS.accent,
                color: "#0F172A",
                padding: ".45rem 1.15rem",
                borderRadius: 8,
                fontWeight: 700,
                fontSize: ".85rem",
                textDecoration: "none",
              }}
            >
              Contact
            </a>
          </>
        )}
      </div>
    </nav>
  );
}
