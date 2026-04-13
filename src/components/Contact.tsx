import { useState } from "react";
import { COLORS, CONTACT_LINKS } from "../data/content";
import { useMobile } from "../context/MobileContext";
import { SectionHeader } from "./shared/Tag";

interface FormState {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const EMPTY_FORM: FormState = { name: "", email: "", subject: "", message: "" };

const RECIPIENT = "muchirinephat5@gmail.com";

const inputStyle: React.CSSProperties = {
  background: COLORS.surface,
  border: `1.5px solid ${COLORS.border}`,
  borderRadius: 8,
  padding: ".68rem .95rem",
  fontSize: ".9rem",
  color: COLORS.text,
  width: "100%",
  fontFamily: "inherit",
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
  const [sent, setSent] = useState(false);

  const handleSend = () => {
    if (!form.name || !form.email || !form.message) return;

    const subject = encodeURIComponent(
      form.subject || `Portfolio enquiry from ${form.name}`
    );
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`
    );
    window.location.href = `mailto:${RECIPIENT}?subject=${subject}&body=${body}`;

    setSent(true);
    setTimeout(() => {
      setSent(false);
      setForm(EMPTY_FORM);
    }, 3000);
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
        <SectionHeader eyebrow="Let's Connect" title="Get In Touch" />

        <div
          style={{
            display: "grid",
            gridTemplateColumns: mobile ? "1fr" : "1fr 1fr",
            gap: "3rem",
            alignItems: "start",
          }}
        >
          {/* Contact info */}
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
                      }}
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

          {/* Form */}
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
              style={{
                background: sent ? "#16A34A" : COLORS.accent,
                color: "#fff",
                border: "none",
                padding: ".78rem 1.5rem",
                borderRadius: 9,
                fontWeight: 700,
                fontSize: ".95rem",
                cursor: "pointer",
                transition: "background .25s",
                width: "100%",
              }}
            >
              {sent ? "✅ Message Sent!" : "Send Message →"}
            </button>         </div>
        </div>
      </div>
    </section>
  );
}
