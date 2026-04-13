import { COLORS } from "../../data/content";
interface SectionHeaderProps {
  eyebrow: string;
  title: string;
}

export function SectionHeader({ eyebrow, title }: SectionHeaderProps) {
  return (
    <div style={{ marginBottom: "2.5rem" }}>
      <div
        style={{
          fontSize: ".72rem",
          fontWeight: 700,
          letterSpacing: 2,
          textTransform: "uppercase",
          color: COLORS.accent,
          marginBottom: ".45rem",
        }}
      >
        {eyebrow}
      </div>
      <div style={{ display: "flex", alignItems: "center", gap: ".85rem" }}>
        <h2
          style={{
            fontSize: "1.65rem",
            fontWeight: 800,
            color: COLORS.text,
            whiteSpace: "nowrap",
          }}
        >
          {title}
        </h2>
        <div style={{ flex: 1, height: 1, background: COLORS.border }} />
      </div>
    </div>
  );
}
