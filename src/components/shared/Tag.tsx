import { TAG_MAP, DEFAULT_TAG, COLORS } from "../../data/content";

interface TagProps {
  label: string;
}

export function Tag({ label }: TagProps) {
  const t = TAG_MAP[label] || DEFAULT_TAG;
  return (
    <span
      style={{
        fontSize: ".72rem",
        fontWeight: 600,
        padding: ".2rem .6rem",
        borderRadius: 5,
        border: `1px solid ${t.border}`,
        background: t.bg,
        color: t.color,
        whiteSpace: "nowrap",
      }}
    >
      {label}
    </span>
  );
}

interface SectionHeaderProps {
  eyebrow: string;
  title: string;
}

export function SectionHeader({ eyebrow, title }: SectionHeaderProps) {
  return (
    <div style={{ marginBottom: "2.5rem" }}>
      <div
        style={{
          fontSize: ".75rem",
          fontWeight: 700,
          letterSpacing: ".08em",
          textTransform: "uppercase",
          color: COLORS.accent,
          marginBottom: ".5rem",
        }}
      >
        {eyebrow}
      </div>
      <h2
        style={{
          fontSize: "1.75rem",
          fontWeight: 800,
          color: COLORS.text,
          letterSpacing: "-.3px",
        }}
      >
        {title}
      </h2>
    </div>
  );
}
