import { motion } from 'framer-motion';
import styles from "../styles/About.module.css";
import profilePic from "../public/assets/profile.jpeg";
import { Link } from "react-router-dom";

function About() {
  return (
    <motion.div
    className={styles.container}
    initial={{ opacity: 0, rotateY: -10 }}
    animate={{ opacity: 1, rotateY: 0 }}
    exit={{ opacity: 0, rotateY: 10 }}
    transition={{ duration: 0.5, ease: "easeInOut" }}
      >
      <img src={profilePic} alt="Yvonne Tran" className={styles.profilePic} />

      <h2 className={styles.heading}>Hi, I'm Yvonne 🌸</h2>

      <p className={styles.bio}>
        I’m a frontend developer based in Goodyear, AZ — blending clean code with Disney sparkle,
        Shiba Inu joy, and Japanese-inspired design. My goal? To create beautiful, intuitive digital
        experiences that feel magical ✨
      </p>

      <p className={styles.bio}>
        My tech journey began after years of managing operations and finances at
        <a href="https://tbeautylounge.com" target="_blank"> T Beauty Lounge</a>, where I built their
        first website — and I’ve been creating ever since. I also built the online presence for
        <a href="https://tomojapanesecuisines.com" target="_blank"> Tomo Japanese Cuisine</a>, and I’m
        currently earning my B.S. in Web Development from Full Sail University (graduating May 2026).
      </p>

      <p className={styles.bio}>
        Beyond development, I’m also an independent travel agent with
        <strong> Martin Magical Travels</strong>, and I’m certified in SheCodes Basics, Plus, and
        Add-on. Whether I’m writing code or planning vacations, I lead with creativity, joy, and care.
      </p>

      <p className={styles.resumeCTA}>
        💼 Want the full rundown?{" "}
        <Link to="/resume" className={styles.resumeLink}>Check out my resume</Link>
      </p>
    </motion.div>
  );
}

export default About;
