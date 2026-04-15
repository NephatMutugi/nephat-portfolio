import { TAG_MAP, DEFAULT_TAG, COLORS } from "../../data/content";

const DARK_TAG_COLORS: Record<string, string> = {
  "#7C3AED": "#C4B5FD",
  "#2563EB": "#93C5FD",
  "#0891B2": "#67E8F9",
  "#C2410C": "#FDBA74",
  "#15803D": "#86EFAC",
  "#B45309": "#FCD34D",
  "#0E7490": "#67E8F9",
  "#374151": "#94A3B8",
};

interface TagProps {
  label: string;
}

export function Tag({ label }: TagProps) {
  const t = TAG_MAP[label] || DEFAULT_TAG;
  const lightColor = DARK_TAG_COLORS[t.color] || t.color;

  return (
    <span
      style={{
        fontSize: ".72rem",
        fontWeight: 600,
        padding: ".2rem .6rem",
        borderRadius: 5,
        border: `1px solid ${lightColor}35`,
        background: `${lightColor}12`,
        color: lightColor,
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
