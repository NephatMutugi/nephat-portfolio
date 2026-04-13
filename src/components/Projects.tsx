
import { useState } from "react";
import { COLORS, PROJECTS } from "../data/content";
import { useMobile } from "../context/MobileContext";
import { Tag, SectionHeader } from "./shared/Tag";

export function Projects() {
  const mobile = useMobile();
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section
      id="projects"
      style={{
        padding: mobile ? "60px 1.25rem" : "88px 2rem",
        background: COLORS.surface,
      }}
    >
      <div style={{ maxWidth: 1100, margin: "auto" }}>
        <SectionHeader eyebrow="Featured Work" title="Projects" />

        <div
          style={{
            display: "grid",
            gridTemplateColumns: mobile ? "1fr" : "repeat(auto-fit, minmax(310px, 1fr))",
            gap: "1rem",
          }}
        >
          {PROJECTS.map((p, i) => (
            <div
              key={p.title}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
              style={{
                background: COLORS.bg,
                border: `1px solid ${hovered === i ? COLORS.accent : COLORS.border}`,
                borderRadius: 12,
                padding: "1.5rem",
                display: "flex",
                flexDirection: "column",
                transition: "all .22s",
                transform: hovered === i ? "translateY(-4px)" : "none",
                boxShadow: hovered === i ? "0 12px 40px rgba(37,99,235,.1)" : "none",
              }}
            >
              {/* Top row */}
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginBottom: "1rem",
                }}
              >
                <span style={{ fontSize: "1.5rem" }}>{p.icon}</span>
                <div style={{ display: "flex", gap: ".35rem" }}>
                  {p.badges.map((b) => (
                    <span
                      key={b}
                      style={{
                        fontSize: ".68rem",
                        color: COLORS.muted,
                        border: `1px solid ${COLORS.border}`,
                        padding: ".15rem .5rem",
                        borderRadius: 5,
                        background: COLORS.surface,
                      }}
                    >
                      {b}
                    </span>
                  ))}
                </div>
              </div>

              <h3 style={{ fontWeight: 700, fontSize: ".95rem", color: COLORS.text, marginBottom: ".35rem" }}>
                {p.title}
              </h3>
              <div style={{ fontSize: ".76rem", color: COLORS.accent, fontWeight: 600, marginBottom: ".65rem" }}>
                {p.metric}
              </div>
              <p style={{ fontSize: ".83rem", color: COLORS.muted, flex: 1, marginBottom: "1rem", lineHeight: 1.6 }}>
                {p.desc}
              </p>

              <div style={{ display: "flex", flexWrap: "wrap", gap: ".4rem" }}>
                {p.tags.map((t) => (
                  <Tag key={t} label={t} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
