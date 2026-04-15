import { useState } from "react";
import { COLORS, SKILLS } from "../data/content";
import { useMobile } from "../context/MobileContext";
import { SectionHeader } from "./shared/Tag";
import { FadeIn } from "./FadeIn";

export function Skills() {
  const mobile = useMobile();
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section
      id="skills"
      style={{
        padding: mobile ? "60px 1.25rem" : "88px 2rem",
        background: COLORS.surface,
      }}
    >
      <div style={{ maxWidth: 1100, margin: "auto" }}>
        <FadeIn>
          <SectionHeader eyebrow="What I Work With" title="Skills & Tech Stack" />
        </FadeIn>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: mobile ? "1fr" : "repeat(3, 1fr)",
            gap: "1rem",
          }}
        >
          {SKILLS.map((s, i) => (
            <FadeIn key={s.title} delay={i * 80}>
            <div
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
              style={{
                background: COLORS.bg,
                border: `1px solid ${hovered === i ? `${s.color}66` : COLORS.border}`,
                borderRadius: 12,
                padding: "1.5rem",
                transition: "all .25s ease",
                transform: hovered === i ? "translateY(-4px)" : "none",
                boxShadow: hovered === i
                  ? `0 12px 32px ${s.color}20, 0 4px 12px rgba(0,0,0,.2)`
                  : "0 1px 3px rgba(0,0,0,.1)",
              }}
            >
              <div
                style={{
                  width: 40,
                  height: 40,
                  borderRadius: 9,
                  background: `${s.color}18`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "1.2rem",
                  marginBottom: "1rem",
                  transition: "transform .25s",
                  transform: hovered === i ? "scale(1.1)" : "none",
                }}
              >
                {s.icon}
              </div>

              <h3 style={{ fontWeight: 700, fontSize: ".95rem", color: COLORS.text, marginBottom: ".75rem" }}>
                {s.title}
              </h3>

              <div style={{ display: "flex", flexWrap: "wrap", gap: ".4rem" }}>
                {s.tags.map((t) => {
                  const lightColors: Record<string, string> = {
                    "#7C3AED": "#C4B5FD",
                    "#2563EB": "#93C5FD",
                    "#0891B2": "#67E8F9",
                    "#C2410C": "#FDBA74",
                    "#15803D": "#86EFAC",
                    "#B45309": "#FCD34D",
                    "#0E7490": "#67E8F9",
                  };
                  const lightColor = lightColors[s.color] || s.color;
                  return (
                    <span
                      key={t}
                      style={{
                        fontSize: ".72rem",
                        fontWeight: 600,
                        padding: ".2rem .6rem",
                        borderRadius: 5,
                        border: `1px solid ${lightColor}35`,
                        background: `${lightColor}12`,
                        color: lightColor,
                      }}
                    >
                      {t}
                    </span>
                  );
                })}
              </div>
            </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
