import { useState, useEffect } from "react";
import styles from "../styles/BackToTop.module.css";

function BackToTop() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShow(window.scrollY > 200);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return show ? (
    <button onClick={scrollToTop} className={styles.button}>
      🐾
    </button>
  ) : null;
}

export default BackToTop;
