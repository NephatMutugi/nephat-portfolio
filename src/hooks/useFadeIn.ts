import { useRef, useState, useEffect } from "react";

interface FadeInOptions {
  delay?: number;
  duration?: number;
  translateY?: number;
}

export function useFadeIn(options: FadeInOptions = {}) {
  const { delay = 0, duration = 600, translateY = 24 } = options;
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const style: React.CSSProperties = {
    opacity: visible ? 1 : 0,
    transform: visible ? "translateY(0)" : `translateY(${translateY}px)`,
    transition: `opacity ${duration}ms ease ${delay}ms, transform ${duration}ms ease ${delay}ms`,
  };

  return { ref, style };
}
