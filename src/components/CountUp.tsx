import { useState, useEffect, useRef } from "react";

interface CountUpProps {
  value: string;
  duration?: number;
  style?: React.CSSProperties;
}

function parseValue(raw: string) {
  const prefix = raw.startsWith("$") ? "$" : "";
  const cleaned = prefix ? raw.slice(1) : raw;
  const match = cleaned.match(/^([\d.]+)(.*)$/);
  if (!match) return { prefix, num: 0, suffix: raw };
  return { prefix, num: parseFloat(match[1]), suffix: match[2] };
}

function easeOutCubic(t: number) {
  return 1 - Math.pow(1 - t, 3);
}

export function CountUp({ value, duration = 1500, style }: CountUpProps) {
  const { prefix, num, suffix } = parseValue(value);
  const [display, setDisplay] = useState(`${prefix}0${suffix}`);
  const [triggered, setTriggered] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !triggered) {
          setTriggered(true);
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [triggered]);

  useEffect(() => {
    if (!triggered) return;
    const start = performance.now();
    let raf: number;

    const step = (now: number) => {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = easeOutCubic(progress);
      const current = eased * num;

      const formatted = num % 1 !== 0
        ? current.toFixed(1)
        : Math.round(current).toString();

      setDisplay(`${prefix}${formatted}${suffix}`);

      if (progress < 1) {
        raf = requestAnimationFrame(step);
      }
    };

    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [triggered, num, prefix, suffix, duration]);

  return <div ref={ref} style={style}>{display}</div>;
}
