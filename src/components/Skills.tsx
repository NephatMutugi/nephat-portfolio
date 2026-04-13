import { COLORS, SKILLS } from "../data/content";
import { useMobile } from "../context/MobileContext";
import { SectionHeader } from "./shared/Tag";

export function Skills() {
  const mobile = useMobile();

  return (
    <section
      id="skills"
      style={{
        padding: mobile ? "60px 1.25rem" : "88px 2rem",
        background: COLORS.surface,
      }}
    >
      <div style={{ maxWidth: 1100, margin: "auto" }}>
        <SectionHeader eyebrow="What I Work With" title="Skills & Tech Stack" />

        <div
          style={{
            display: "grid",
            gridTemplateColumns: mobile ? "1fr" : "repeat(auto-fit, minmax(260px, 1fr))",
            gap: "1rem",
          }}
        >
          {SKILLS.map((s) => (
            <div
              key={s.title}
              style={{
                background: COLORS.bg,
                border: `1px solid ${COLORS.border}`,
                borderRadius: 12,
                padding: "1.5rem",
              }}
            >
              <div
                style={{
                  width: 40,
                  height: 40,
                  borderRadius: 9,
                  background: s.bg,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "1.2rem",
                  marginBottom: "1rem",
                }}
              >
                {s.icon}
              </div>

              <h3 style={{ fontWeight: 700, fontSize: ".95rem", color: COLORS.text, marginBottom: ".75rem" }}>
                {s.title}
              </h3>

              <div style={{ display: "flex", flexWrap: "wrap", gap: ".4rem" }}>
                {s.tags.map((t) => (
                  <span
                    key={t}
                    style={{
                      fontSize: ".72rem",
                      fontWeight: 600,
                      padding: ".2rem .6rem",
                      borderRadius: 5,
                      border: `1px solid ${s.border}`,
                      background: s.bg,
                      color: s.color,
                    }}
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
