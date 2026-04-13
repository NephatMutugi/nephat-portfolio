import { COLORS, STATS } from "../data/content";
import { useMobile } from "../context/MobileContext";

export function Hero() {
  const mobile = useMobile();

  return (
    <section
      id="hero"
      style={{
        display: "flex",
        alignItems: "flex-start",
        padding: mobile ? "5rem 1.25rem 4rem" : "5.5rem 2rem 5rem",
        background: COLORS.bg,
      }}
    >
      <div style={{ maxWidth: 1100, margin: "0 auto", width: "100%" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: mobile ? "1fr" : "1fr auto",
            gap: "2.5rem",
            alignItems: "center",
          }}
        >
          {/* Left content */}
          <div>
            {/* Badge */}
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: ".5rem",
                background: COLORS.greenBg,
                border: `1px solid ${COLORS.greenBorder}`,
                color: COLORS.green,
                borderRadius: 99,
                padding: ".3rem .9rem",
                fontSize: ".78rem",
                fontWeight: 700,
                marginBottom: "1.25rem",
              }}
            >
              <span
                style={{
                  width: 7,
                  height: 7,
                  borderRadius: "50%",
                  background: COLORS.green,
                  display: "inline-block",
                }}
              />
              Open to Remote Opportunities
            </div>

            {/* Name */}
            <h1
              style={{
                fontSize: mobile ? "2.2rem" : "3rem",
                fontWeight: 800,
                lineHeight: 1.12,
                letterSpacing: "-.5px",
                marginBottom: ".4rem",
                color: COLORS.text,
              }}
            >
              Nephat Muchiri
            </h1>

            {/* Role gradient */}
            <div
              style={{
                fontSize: mobile ? "1.2rem" : "1.55rem",
                fontWeight: 700,
                marginBottom: "1.25rem",
                background: `linear-gradient(90deg, ${COLORS.accent}, ${COLORS.accent2})`,
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              AI Innovation Engineer
            </div>

            <p
              style={{
                color: COLORS.muted,
                fontSize: mobile ? ".9rem" : "1rem",
                maxWidth: 500,
                marginBottom: "2rem",
                lineHeight: 1.7,
              }}
            >
              Senior engineer with 7+ years shipping scalable backend systems,
              financial platforms, and cloud-native AI solutions across fintech,
              telecom, and agri-tech ecosystems in Africa and beyond.
            </p>

            {/* CTA buttons */}
            <div style={{ display: "flex", gap: ".75rem", flexWrap: "wrap" }}>
              <a
                href="#projects"
                style={{
                  background: COLORS.accent,
                  color: "#fff",
                  padding: ".65rem 1.5rem",
                  borderRadius: 9,
                  fontWeight: 700,
                  textDecoration: "none",
                  fontSize: ".9rem",
                }}
              >
                View My Work
              </a>
              <a
                href="#contact"
                style={{
                  border: `1.5px solid ${COLORS.border}`,
                  color: COLORS.text,
                  padding: ".65rem 1.5rem",
                  borderRadius: 9,
                  fontWeight: 600,
                  textDecoration: "none",
                  fontSize: ".9rem",
                }}
              >
                Get In Touch
              </a>
            </div>

            {/* Stats */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: mobile ? "repeat(2,1fr)" : "repeat(4,1fr)",
                gap: "1rem",
                marginTop: "2.25rem",
                paddingTop: "1.75rem",
                borderTop: `1px solid ${COLORS.border}`,
              }}
            >
              {STATS.map((s) => (
                <div key={s.label} style={{ textAlign: mobile ? "center" : "left" }}>
                  <div style={{ fontSize: mobile ? "1.4rem" : "1.8rem", fontWeight: 800, color: COLORS.text }}>
                    {s.num}
                  </div>
                  <div style={{ fontSize: ".72rem", color: COLORS.muted, marginTop: ".1rem", lineHeight: 1.3 }}>
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Avatar — desktop only */}
          {!mobile && (
            <div
              style={{
                width: 260,
                height: 300,
                borderRadius: 20,
                flexShrink: 0,
                background: "linear-gradient(135deg,#EFF6FF,#EDE9FE)",
                border: `2px solid ${COLORS.border}`,
                overflow: "hidden",
              }}
            >
              <img
                src="/avatar.jpg"
                alt="Nephat Muchiri – AI Innovation Engineer"
                width={260}
                height={300}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  objectPosition: "center top",
                  display: "block",
                }}
              />
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
