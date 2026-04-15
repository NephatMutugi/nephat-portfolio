import { COLORS, STATS } from "../data/content";
import { useMobile } from "../context/MobileContext";
import { CountUp } from "./CountUp";

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
        position: "relative",
        overflow: "hidden",
      }}
    >
      {!mobile && (
        <>
          <div
            style={{
              position: "absolute",
              top: -100,
              right: -120,
              width: 500,
              height: 500,
              borderRadius: "50%",
              background: "radial-gradient(circle, rgba(96,165,250,.2) 0%, transparent 65%)",
              animation: "float 8s ease-in-out infinite",
              pointerEvents: "none",
            }}
          />
          <div
            style={{
              position: "absolute",
              bottom: -80,
              left: -100,
              width: 420,
              height: 420,
              borderRadius: "50%",
              background: "radial-gradient(circle, rgba(167,139,250,.15) 0%, transparent 65%)",
              animation: "float 10s ease-in-out infinite 2s",
              pointerEvents: "none",
            }}
          />
        </>
      )}

      <div style={{ maxWidth: 1100, margin: "0 auto", width: "100%", position: "relative", zIndex: 1 }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: mobile ? "1fr" : "1fr auto",
            gap: "2.5rem",
            alignItems: "center",
          }}
        >
          <div style={{ animation: "hero-fade-in .8s ease both" }}>
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: ".5rem",
                background: `${COLORS.accent}15`,
                border: `1px solid ${COLORS.accent}40`,
                color: COLORS.accent,
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
                  background: COLORS.accent,
                  display: "inline-block",
                }}
              />
              AI Innovation Specialist
            </div>

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
              Nephat Mutugi Muchiri
            </h1>

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
              Software Engineer
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
              Software engineer with 7+ years building full-stack applications,
              AI-powered products, and cloud-native solutions across fintech,
              telecom, and agri-tech ecosystems in Africa and beyond.
            </p>

            <div style={{ display: "flex", gap: ".75rem", flexWrap: "wrap" }}>
              <a
                href="#projects"
                className="btn-hover"
                style={{
                  background: COLORS.accent,
                  color: "#0F172A",
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
                className="btn-outline-hover"
                style={{
                  border: `1.5px solid ${COLORS.accent}`,
                  color: COLORS.accent,
                  padding: ".65rem 1.5rem",
                  borderRadius: 9,
                  fontWeight: 600,
                  textDecoration: "none",
                  fontSize: ".9rem",
                }}
              >
                Contact Me
              </a>
            </div>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: mobile ? "repeat(2,1fr)" : "repeat(4,1fr)",
                gap: "1rem",
                marginTop: "2.25rem",
              }}
            >
              {STATS.map((s, i) => {
                const accents = [COLORS.accent, COLORS.accent2, COLORS.green, "#FB923C"];
                return (
                  <div
                    key={s.label}
                    style={{
                      textAlign: mobile ? "center" : "left",
                      background: COLORS.surface,
                      borderRadius: 10,
                      padding: ".9rem 1rem",
                      borderTop: `3px solid ${accents[i % accents.length]}`,
                      boxShadow: "0 2px 12px rgba(0,0,0,.2)",
                    }}
                  >
                    <CountUp
                      value={s.num}
                      style={{ fontSize: mobile ? "1.4rem" : "1.8rem", fontWeight: 800, color: COLORS.text }}
                    />
                    <div style={{ fontSize: ".72rem", color: COLORS.muted, marginTop: ".1rem", lineHeight: 1.3 }}>
                      {s.label}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {!mobile && (
            <div
              style={{
                width: 268,
                height: 308,
                borderRadius: 22,
                flexShrink: 0,
                padding: 4,
                background: "conic-gradient(from var(--border-angle, 0deg), #60A5FA, #A78BFA, #4ADE80, #60A5FA)",
                animation: "hero-fade-in .8s ease .3s both, rotate-border 8s linear infinite",
                boxShadow: "0 0 40px rgba(96,165,250,.2), 0 0 80px rgba(167,139,250,.1)",
              }}
            >
              <div
                style={{
                  width: "100%",
                  height: "100%",
                  borderRadius: 18,
                  overflow: "hidden",
                  background: COLORS.bg,
                }}
              >
                <img
                  src="/avatar.jpg"
                  alt="Nephat Mutugi Muchiri – Software Engineer"
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
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
