import { Nav } from "./components/Nav";
import { Hero } from "./components/Hero";
import { Skills } from "./components/Skills";
import { Experience } from "./components/Experience";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { COLORS } from "./data/content";
import { MobileProvider } from "./context/MobileContext";
import { Analytics } from "@vercel/analytics/react";

function Divider() {
  return (
    <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 2rem" }}>
      <div
        style={{
          height: 1,
          background: `linear-gradient(90deg, transparent 0%, ${COLORS.border} 50%, transparent 100%)`,
        }}
      />
    </div>
  );
}

export default function App() {
  return (
    <MobileProvider>
      <div
        style={{
          fontFamily: "'Inter', 'Segoe UI', system-ui, sans-serif",
          color: COLORS.text,
          background: COLORS.bg,
        }}
      >
        <Nav />
        <Hero />
        <Divider />
        <Skills />
        <Divider />
        <Experience />
        <Divider />
        <Projects />
        <Divider />
        <Contact />
        <Footer />
        <Analytics />
      </div>
    </MobileProvider>
  );
}
