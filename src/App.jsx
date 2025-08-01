import { Routes, Route, Link, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import styles from "./styles/App.module.css";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Resume from "./pages/Resume";
import Magic from "./pages/Magic";
import NotFound from "./pages/NotFound";
import BackToTop from "./components/BackToTop";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={styles.appWrapper}>
      <nav className={styles.navbar}>
        <button className={styles.toggle} onClick={() => setIsOpen(!isOpen)}>
          ☰
        </button>
        <div className={`${styles.links} ${isOpen ? styles.show : ""}`}>
          <Link to="/" onClick={() => setIsOpen(false)}>
            Home
          </Link>
          <Link to="/projects" onClick={() => setIsOpen(false)}>
            Projects
          </Link>
          <Link to="/about" onClick={() => setIsOpen(false)}>
            About
          </Link>
          <Link to="/resume" onClick={() => setIsOpen(false)}>
            Resume
          </Link>
          <Link to="/contact" onClick={() => setIsOpen(false)}>
            Contact
          </Link>
        </div>
      </nav>

      {[...Array(12)].map((_, i) => (
        <div
          key={`petal-${i}`}
          className={styles.petal}
          style={{
            left: `${Math.random() * 100}vw`,
            animationDelay: `${Math.random() * 10}s`,
            animationDuration: `${5 + Math.random() * 5}s`,
          }}
        />
      ))}

      <ScrollToTop />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/about" element={<About />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/magic" element={<Magic />} />
        </Routes>
      </AnimatePresence>

      <BackToTop />
    </div>
  );
}

export default App;
