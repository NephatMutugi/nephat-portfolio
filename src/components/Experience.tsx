
import { useState } from "react";
import { COLORS, EXPERIENCE } from "../data/content";
import { useMobile } from "../context/MobileContext";
import { Tag, SectionHeader } from "./shared/Tag";

export function Experience() {
  const mobile = useMobile();
  const [openIndex, setOpenIndex] = useState<number>(0);

  const toggle = (i: number) => setOpenIndex(openIndex === i ? -1 : i);

  return (
    <section
      id="experience"
      style={{
        padding: mobile ? "60px 1.25rem" : "88px 2rem",
        background: COLORS.bg,
      }}
    >
      <div style={{ maxWidth: 1100, margin: "auto" }}>
        <SectionHeader eyebrow="Career Journey" title="Work Experience" />

        <div
          style={{
            border: `1px solid ${COLORS.border}`,
            borderRadius: 10,
            overflow: "hidden",
          }}
        >
          {EXPERIENCE.map((e, i) => {
            const isOpen = openIndex === i;
            return (
              <button
                key={e.role}
                onClick={() => toggle(i)}
                aria-expanded={isOpen}
                aria-controls={`experience-body-${i}`}
                id={`experience-header-${i}`}
                style={{
                  display: "block",
                  width: "100%",
                  textAlign: "left",
                  background: isOpen ? COLORS.surface : COLORS.bg,
                  borderLeft: `3px solid ${isOpen ? COLORS.accent : "transparent"}`,
                  borderRight: "none",
                  borderTop: "none",
                  borderBottom:
                    i < EXPERIENCE.length - 1 ? `1px solid ${COLORS.border}` : "none",
                  padding: mobile ? "1.25rem" : "1.6rem 1.75rem",
                  cursor: "pointer",
                  transition: "all .2s",
                  fontFamily: "inherit",
                }}
              >
                {/* Header row */}
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
                          background: "#FFF7ED",
                          border: "1px solid #FED7AA",
                          color: "#C2410C",
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
                        transition: "transform .2s",
                        transform: isOpen ? "rotate(180deg)" : "none",
                        fontSize: ".85rem",
                      }}
                    >
                      ▾
                    </span>
                  </div>
                </div>

                {/* Period on mobile */}
                {mobile && (
                  <div style={{ fontSize: ".72rem", color: COLORS.muted, marginTop: ".3rem" }}>
                    {e.period}
                  </div>
                )}

                {/* Expanded body */}
                {isOpen && (
                  <div
                    id={`experience-body-${i}`}
                    role="region"
                    aria-labelledby={`experience-header-${i}`}
                    style={{ marginTop: "1rem" }}
                  >
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
                )}
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
