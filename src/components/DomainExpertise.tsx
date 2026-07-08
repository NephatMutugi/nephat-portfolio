import { COLORS } from "../data/content";
import { useMobile } from "../context/MobileContext";
import { SectionHeader } from "./shared/Tag";
import { FadeIn } from "./FadeIn";

interface Domain {
  icon: string;
  title: string;
  years: string;
  summary: string;
  bullets: string[];
  tags: string[];
  accentColor: string;
  accentBg: string;
}

const DOMAINS: Domain[] = [
  {
    icon: "🤖",
    title: "AI Engineering",
    years: "2+ yrs",
    summary: "Building production AI systems that analyse, respond, and route at scale.",
    bullets: [
      "LLM integration for sentiment analysis, response generation, and automated triage",
      "Real-time data pipelines for AI-driven signal processing across multiple languages",
      "NumPy, pandas, scikit-learn, and LangChain for end-to-end ML workflows",
    ],
    tags: ["Python", "FastAPI", "LLM", "LangChain", "Kafka", "AWS"],
    accentColor: "#7C3AED",
    accentBg: "rgba(124,58,237,.08)",
  },
  {
    icon: "📡",
    title: "Telecom BSS/OSS",
    years: "2+ yrs",
    summary: "Leading cloud-native BSS/OSS platforms for Tier-1 telecom operators at subscriber scale.",
    bullets: [
      "Full lifecycle ownership: billing, revenue management, charging control, service provisioning",
      "High-throughput mediation and work order management across operator environments",
      "3GPP-compliant integrations and microservices on Kubernetes / OpenShift",
    ],
    tags: ["Java", "Spring Boot", "Kafka", "OpenShift", "Kubernetes", "Microservices"],
    accentColor: "#0891B2",
    accentBg: "rgba(8,145,178,.08)",
  },
  {
    icon: "🏦",
    title: "Banking & Fintech",
    years: "3+ yrs",
    summary: "Delivering core banking integrations and credit infrastructure serving millions of customers.",
    bullets: [
      "Core banking API layers enabling digital and agency banking channels",
      "Credit scoring engines unlocking agricultural loans for 2M+ farmers",
      "Cross-border API integrations and zero-downtime banking infrastructure",
    ],
    tags: ["Java", "Spring Boot", "WSO2", "PostgreSQL", "Angular", "Azure"],
    accentColor: "#15803D",
    accentBg: "rgba(21,128,61,.08)",
  },
];

export function DomainExpertise() {
  const mobile = useMobile();

  return (
    <section
      id="experience"
      style={{
        padding: mobile ? "60px 1.25rem" : "88px 2rem",
        background: COLORS.bg,
      }}
    >
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <FadeIn>
          <SectionHeader eyebrow="Career Across Domains" title="Experience" />
          <p
            style={{
              color: COLORS.muted,
              fontSize: ".95rem",
              maxWidth: 640,
              lineHeight: 1.75,
              marginTop: "-1.25rem",
              marginBottom: "2.75rem",
            }}
          >
            7+ years building production systems across AI engineering, telecom BSS/OSS, and
            banking infrastructure — serving millions of subscribers and end users across
            Africa and globally.
          </p>
        </FadeIn>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: mobile ? "1fr" : "repeat(3, 1fr)",
            gap: "1.5rem",
          }}
        >
          {DOMAINS.map((d, i) => (
            <FadeIn key={d.title} delay={i * 100}>
              <div
                style={{
                  background: COLORS.surface,
                  border: `1px solid ${COLORS.border}`,
                  borderRadius: 16,
                  padding: "1.75rem",
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  gap: "1rem",
                  boxShadow: "0 2px 16px rgba(0,0,0,.15)",
                  transition: "transform .2s, box-shadow .2s",
                  borderTop: `3px solid ${d.accentColor}`,
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLDivElement).style.transform = "translateY(-4px)";
                  (e.currentTarget as HTMLDivElement).style.boxShadow = "0 8px 32px rgba(0,0,0,.25)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLDivElement).style.transform = "translateY(0)";
                  (e.currentTarget as HTMLDivElement).style.boxShadow = "0 2px 16px rgba(0,0,0,.15)";
                }}
              >
                {/* Header */}
                <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: ".75rem" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: ".75rem" }}>
                    <div
                      style={{
                        width: 44,
                        height: 44,
                        borderRadius: 12,
                        background: d.accentBg,
                        border: `1px solid ${d.accentColor}30`,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: "1.35rem",
                        flexShrink: 0,
                      }}
                    >
                      {d.icon}
                    </div>
                    <h3
                      style={{
                        fontSize: "1rem",
                        fontWeight: 700,
                        color: COLORS.text,
                        margin: 0,
                      }}
                    >
                      {d.title}
                    </h3>
                  </div>
                  <span
                    style={{
                      fontSize: ".72rem",
                      fontWeight: 700,
                      color: d.accentColor,
                      background: d.accentBg,
                      border: `1px solid ${d.accentColor}30`,
                      borderRadius: 99,
                      padding: ".2rem .65rem",
                      whiteSpace: "nowrap",
                      flexShrink: 0,
                    }}
                  >
                    {d.years}
                  </span>
                </div>

                {/* Summary */}
                <p style={{ fontSize: ".85rem", color: COLORS.muted, lineHeight: 1.65, margin: 0 }}>
                  {d.summary}
                </p>

                {/* Bullets */}
                <ul style={{ margin: 0, padding: 0, listStyle: "none", display: "flex", flexDirection: "column", gap: ".5rem", flex: 1 }}>
                  {d.bullets.map((b) => (
                    <li
                      key={b}
                      style={{
                        display: "flex",
                        alignItems: "flex-start",
                        gap: ".5rem",
                        fontSize: ".82rem",
                        color: COLORS.muted,
                        lineHeight: 1.6,
                      }}
                    >
                      <span
                        style={{
                          width: 5,
                          height: 5,
                          borderRadius: "50%",
                          background: d.accentColor,
                          marginTop: ".45rem",
                          flexShrink: 0,
                        }}
                      />
                      {b}
                    </li>
                  ))}
                </ul>

                {/* Tags */}
                <div style={{ display: "flex", flexWrap: "wrap", gap: ".4rem", marginTop: "auto", paddingTop: ".5rem", borderTop: `1px solid ${COLORS.border}` }}>
                  {d.tags.map((t) => (
                    <span
                      key={t}
                      style={{
                        fontSize: ".72rem",
                        fontWeight: 600,
                        color: d.accentColor,
                        background: d.accentBg,
                        border: `1px solid ${d.accentColor}25`,
                        borderRadius: 6,
                        padding: ".15rem .5rem",
                      }}
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
