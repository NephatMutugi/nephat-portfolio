
import { Nav } from "./components/Nav";
import { Hero } from "./components/Hero";
import { Skills } from "./components/Skills";
import { Experience } from "./components/Experience";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { COLORS } from "./data/content";
import { MobileProvider } from "./context/MobileContext";

export default function App() {
  return (
    <MobileProvider>
      <div
        style={{
          fontFamily: "'Segoe UI', system-ui, sans-serif",
          color: COLORS.text,
          background: COLORS.bg,
        }}
      >
        <Nav />
        <Hero />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </MobileProvider>
  );
}