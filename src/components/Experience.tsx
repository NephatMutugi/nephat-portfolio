import { useState, useRef, useEffect, useCallback } from "react";
import { COLORS, EXPERIENCE } from "../data/content";
import { useMobile } from "../context/MobileContext";
import { Tag } from "./shared/Tag";
import { FadeIn } from "./FadeIn";

export function Experience() {
  const mobile = useMobile();
  const [openIndex, setOpenIndex] = useState<number>(0);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const bodyRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [heights, setHeights] = useState<number[]>([]);

  const measureHeights = useCallback(() => {
    setHeights(bodyRefs.current.map((el) => el?.scrollHeight ?? 0));
  }, []);

  useEffect(() => {
    measureHeights();
    window.addEventListener("resize", measureHeights);
    return () => window.removeEventListener("resize", measureHeights);
  }, [measureHeights]);

  const toggle = (i: number) => {
    setOpenIndex(openIndex === i ? -1 : i);
    requestAnimationFrame(measureHeights);
  };

  return (
    <section
      id="experience"
      style={{
        padding: mobile ? "60px 1.25rem" : "88px 2rem",
        background: COLORS.bg,
      }}
    >
      <div style={{ maxWidth: 1100, margin: "auto" }}>
        <FadeIn>
          <SectionHeaderDark eyebrow="Career Journey" title="Work Experience" />
        </FadeIn>

        <FadeIn delay={100}>
        <div
          style={{
            border: `1px solid ${COLORS.border}`,
            borderRadius: 12,
            overflow: "hidden",
            boxShadow: "0 4px 24px rgba(0,0,0,.3)",
          }}
        >
          {EXPERIENCE.map((e, i) => {
            const isOpen = openIndex === i;
            const isHovered = hoveredIndex === i;
            return (
              <div key={e.company + e.role}>
                <button
                  onClick={() => toggle(i)}
                  onMouseEnter={() => setHoveredIndex(i)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  aria-expanded={isOpen}
                  aria-controls={`experience-body-${i}`}
                  id={`experience-header-${i}`}
                  style={{
                    display: "block",
                    width: "100%",
                    textAlign: "left",
                    background: isOpen
                      ? COLORS.surface
                      : isHovered
                        ? "#162033"
                        : COLORS.bg,
                    borderLeft: `3px solid ${isOpen ? COLORS.accent : "transparent"}`,
                    borderRight: "none",
                    borderTop: "none",
                    borderBottom:
                      i < EXPERIENCE.length - 1 ? `1px solid ${COLORS.border}` : "none",
                    padding: mobile ? "1.25rem" : "1.6rem 1.75rem",
                    cursor: "pointer",
                    transition: "background .2s, border-color .2s",
                    fontFamily: "inherit",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "flex-start",
                      gap: ".75rem",
                    }}
                  >
                    <div style={{ flex: 1 }}>
                      <h3 style={{ fontWeight: 700, fontSize: mobile ? ".88rem" : ".95rem", color: COLORS.text }}>
                        {e.role}
                      </h3>
                      <div style={{ fontSize: ".8rem", color: COLORS.accent, fontWeight: 600, marginTop: ".2rem" }}>
                        {e.company} · {e.location}
                      </div>
                      {e.award && (
                        <div
                          style={{
                            display: "inline-flex",
                            alignItems: "center",
                            gap: ".3rem",
                            background: "rgba(251,191,36,.12)",
                            border: "1px solid rgba(251,191,36,.3)",
                            color: "#FBBF24",
                            borderRadius: 99,
                            fontSize: ".68rem",
                            fontWeight: 700,
                            padding: ".15rem .65rem",
                            marginTop: ".4rem",
                          }}
                        >
                          {e.award}
                        </div>
                      )}
                    </div>

                    <div style={{ display: "flex", alignItems: "center", gap: ".5rem", flexShrink: 0 }}>
                      {!mobile && (
                        <span style={{ fontSize: ".76rem", color: COLORS.muted }}>{e.period}</span>
                      )}
                      <span
                        style={{
                          color: COLORS.muted,
                          display: "inline-block",
                          transition: "transform .25s",
                          transform: isOpen ? "rotate(180deg)" : "none",
                          fontSize: ".85rem",
                        }}
                      >
                        ▾
                      </span>
                    </div>
                  </div>

                  {mobile && (
                    <div style={{ fontSize: ".72rem", color: COLORS.muted, marginTop: ".3rem" }}>
                      {e.period}
                    </div>
                  )}
                </button>

                <div
                  ref={(el) => { bodyRefs.current[i] = el; }}
                  id={`experience-body-${i}`}
                  role="region"
                  aria-labelledby={`experience-header-${i}`}
                  style={{
                    maxHeight: isOpen ? (heights[i] || 800) : 0,
                    overflow: "hidden",
                    transition: "max-height .4s cubic-bezier(.4,0,.2,1)",
                    background: COLORS.surface,
                  }}
                >
                  <div style={{ padding: mobile ? "0 1.25rem 1.25rem" : "0 1.75rem 1.6rem" }}>
                    <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: ".45rem" }}>
                      {e.bullets.map((b) => (
                        <li
                          key={b}
                          style={{
                            fontSize: mobile ? ".82rem" : ".875rem",
                            color: COLORS.muted,
                            paddingLeft: "1.2rem",
                            position: "relative",
                            lineHeight: 1.6,
                          }}
                        >
                          <span
                            style={{
                              position: "absolute",
                              left: 0,
                              color: COLORS.accent,
                              fontSize: ".72rem",
                              top: ".18rem",
                            }}
                          >
                            ▸
                          </span>
                          {b}
                        </li>
                      ))}
                    </ul>
                    <div style={{ display: "flex", flexWrap: "wrap", gap: ".4rem", marginTop: ".85rem" }}>
                      {e.tags.map((t) => (
                        <Tag key={t} label={t} />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        </FadeIn>
      </div>
    </section>
  );
}

function SectionHeaderDark({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <div style={{ marginBottom: "2.5rem" }}>
      <div
        style={{
          fontSize: ".72rem",
          fontWeight: 700,
          letterSpacing: ".12em",
          textTransform: "uppercase",
          color: COLORS.accent,
          marginBottom: ".5rem",
        }}
      >
        {eyebrow}
      </div>
      <h2 style={{ fontSize: "1.85rem", fontWeight: 800, color: COLORS.text }}>
        {title}
      </h2>
    </div>
  );
}
