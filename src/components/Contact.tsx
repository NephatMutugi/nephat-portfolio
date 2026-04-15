import { useState } from "react";
import { COLORS, CONTACT_LINKS } from "../data/content";
import { useMobile } from "../context/MobileContext";
import { SectionHeader } from "./shared/Tag";
import { FadeIn } from "./FadeIn";

interface FormState {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const EMPTY_FORM: FormState = { name: "", email: "", subject: "", message: "" };

const FORMSPREE_ENDPOINT = "https://formspree.io/f/mkoknode";

const inputStyle: React.CSSProperties = {
  background: COLORS.surface,
  border: `1.5px solid ${COLORS.border}`,
  borderRadius: 8,
  padding: ".68rem .95rem",
  fontSize: ".9rem",
  color: COLORS.text,
  width: "100%",
  fontFamily: "inherit",
  transition: "border-color .2s, box-shadow .2s",
};

const labelStyle: React.CSSProperties = {
  fontSize: ".8rem",
  fontWeight: 600,
  color: COLORS.text,
  marginBottom: ".35rem",
  display: "block",
};

export function Contact() {
  const mobile = useMobile();
  const [form, setForm] = useState<FormState>(EMPTY_FORM);
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const handleSend = async () => {
    if (!form.name || !form.email || !form.message) return;

    setStatus("sending");

    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          subject: form.subject || `Portfolio enquiry from ${form.name}`,
          message: form.message,
        }),
      });

      if (res.ok) {
        setStatus("sent");
        setTimeout(() => {
          setStatus("idle");
          setForm(EMPTY_FORM);
        }, 3000);
      } else {
        setStatus("error");
        setTimeout(() => setStatus("idle"), 4000);
      }
    } catch {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 4000);
    }
  };

  return (
    <section
      id="contact"
      style={{
        padding: mobile ? "60px 1.25rem" : "88px 2rem",
        background: COLORS.bg,
      }}
    >
      <div style={{ maxWidth: 1100, margin: "auto" }}>
        <FadeIn>
          <SectionHeader eyebrow="Let's Connect" title="Get In Touch" />
        </FadeIn>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: mobile ? "1fr" : "1fr 1fr",
            gap: "3rem",
            alignItems: "start",
          }}
        >
          <FadeIn delay={100}>
          <div>
            <h3 style={{ fontWeight: 700, fontSize: "1.05rem", color: COLORS.text, marginBottom: ".65rem" }}>
              Contact Details
            </h3>
            <p style={{ color: COLORS.muted, fontSize: ".9rem", marginBottom: "1.5rem", lineHeight: 1.7 }}>
              Based in Nairobi, Kenya. Available for global remote opportunities,
              freelance engagements, and AI consulting.
            </p>

            <div style={{ display: "flex", flexDirection: "column", gap: ".85rem" }}>
              {CONTACT_LINKS.map((cc) => (
                <div key={cc.label} style={{ display: "flex", alignItems: "center", gap: ".75rem" }}>
                  <div
                    style={{
                      width: 38,
                      height: 38,
                      background: COLORS.surface,
                      border: `1px solid ${COLORS.border}`,
                      borderRadius: 9,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "1rem",
                      flexShrink: 0,
                    }}
                  >
                    {cc.icon}
                  </div>
                  {cc.href ? (
                    <a
                      href={cc.href}
                      target={cc.href.startsWith("http") ? "_blank" : undefined}
                      rel="noreferrer"
                      style={{
                        fontSize: ".88rem",
                        fontWeight: 500,
                        color: COLORS.text,
                        textDecoration: "none",
                        wordBreak: "break-all",
                        transition: "color .2s",
                      }}
                      onMouseEnter={(e) => (e.currentTarget.style.color = COLORS.accent)}
                      onMouseLeave={(e) => (e.currentTarget.style.color = COLORS.text)}
                    >
                      {cc.label}
                    </a>
                  ) : (
                    <span style={{ fontSize: ".88rem", color: COLORS.muted }}>{cc.label}</span>
                  )}
                </div>
              ))}
            </div>
          </div>
          </FadeIn>

          <FadeIn delay={200}>
          <div
            style={{
              background: COLORS.surface,
              border: `1px solid ${COLORS.border}`,
              borderRadius: 14,
              padding: mobile ? "1.25rem" : "1.75rem",
              boxShadow: "0 4px 24px rgba(0,0,0,.2)",
            }}
          >
            <h3 style={{ fontWeight: 700, fontSize: "1.05rem", color: COLORS.text, marginBottom: "1.25rem" }}>
              Send a Message
            </h3>
            <div style={{ display: "flex", flexDirection: "column", gap: ".85rem" }}>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: mobile ? "1fr" : "1fr 1fr",
                  gap: ".85rem",
                }}
              >
                <div>
                  <label style={labelStyle}>Full Name</label>
                  <input
                    style={inputStyle}
                    placeholder="Jane Smith"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                  />
                </div>
                <div>
                  <label style={labelStyle}>Email Address</label>
                  <input
                    style={inputStyle}
                    type="email"
                    placeholder="jane@company.com"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                  />
                </div>
              </div>

              <div>
                <label style={labelStyle}>Subject</label>
                <input
                  style={inputStyle}
                  placeholder="Project inquiry / Job opportunity"
                  value={form.subject}
                  onChange={(e) => setForm({ ...form, subject: e.target.value })}
                />
              </div>

              <div>
                <label style={labelStyle}>Message</label>
                <textarea
                  style={{ ...inputStyle, minHeight: 120, resize: "vertical" }}
                  placeholder="Tell me about your project or opportunity..."
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                />
              </div>

              <button
                onClick={handleSend}
                type="button"
                disabled={status === "sending" || status === "sent"}
                className="btn-hover"
                style={{
                  background:
                    status === "sent" ? "#4ADE80" :
                    status === "error" ? "#F87171" :
                    COLORS.accent,
                  color: "#0F172A",
                  border: "none",
                  padding: ".78rem 1.5rem",
                  borderRadius: 9,
                  fontWeight: 700,
                  fontSize: ".95rem",
                  cursor: status === "sending" || status === "sent" ? "not-allowed" : "pointer",
                  opacity: status === "sending" ? 0.75 : 1,
                  transition: "background .25s, opacity .25s",
                  width: "100%",
                }}
              >
                {status === "sending" && "Sending…"}
                {status === "sent"    && "✅ Message Sent!"}
                {status === "error"   && "❌ Failed — please try again"}
                {status === "idle"    && "Send Message →"}
              </button>
            </div>
          </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
