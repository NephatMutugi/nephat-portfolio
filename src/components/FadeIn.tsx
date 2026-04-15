import { useFadeIn } from "../hooks/useFadeIn";

interface FadeInProps {
  delay?: number;
  duration?: number;
  children: React.ReactNode;
  style?: React.CSSProperties;
  className?: string;
}

export function FadeIn({ delay = 0, duration = 600, children, style, className }: FadeInProps) {
  const fade = useFadeIn({ delay, duration });
  return (
    <div ref={fade.ref} style={{ ...fade.style, ...style }} className={className}>
      {children}
    </div>
  );
}
