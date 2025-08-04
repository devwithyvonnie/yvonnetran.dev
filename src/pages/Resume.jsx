import { motion } from "framer-motion";
import styles from "../styles/Resume.module.css";

function Resume() {
  return (
    <div className={styles.pageBackground}>
      <motion.div
        className={styles.container}
        initial={{ opacity: 0, rotateY: -10 }}
        animate={{ opacity: 1, rotateY: 0 }}
        exit={{ opacity: 0, rotateY: 10 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}>
        <h2 className={styles.heading}>Yvonne Tran</h2>
        <p className={styles.location}>
          Goodyear, AZ · devwithyvonnie@gmail.com
        </p>
        <p className={styles.links}>
          <a href="https://yvonnetran.dev" target="_blank">
            yvonnetran.dev
          </a>{" "}
          ·{" "}
          <a href="https://github.com/devwithyvonnie" target="_blank">
            GitHub
          </a>{" "}
          ·{" "}
          <a
            href="https://linkedin.com/in/yvonne-tran-451858191"
            target="_blank">
            LinkedIn
          </a>
        </p>

        <section className={styles.section}>
          <h3>Professional Summary</h3>
          <p>
            Frontend web developer and creative problem-solver with a background
            in operations management, finance, and small business web
            development. Passionate about user-first design and bringing joyful
            digital experiences to life. Currently pursuing a B.S. in Web
            Development at Full Sail University and building real-world
            solutions for local businesses and travel clients.
          </p>
        </section>

        <section className={styles.section}>
          <h3>Technical Skills</h3>
          <ul>
            <li>
              <strong>Languages:</strong> JavaScript, HTML5, CSS3
            </li>
            <li>
              <strong>Frameworks & Tools:</strong> React, Node.js, Express.js,
              MongoDB, Git, Vite
            </li>
            <li>
              <strong>Other:</strong> REST APIs, OAuth, JWT, CSS Modules,
              Responsive Design, Website Deployment
            </li>
          </ul>
        </section>

        <section className={styles.section}>
          <h3>Projects</h3>
          <p>
            <strong>Star Tracker Library 🌌</strong>
            <br />
            Built for Full Sail University's Advanced Server-Side Languages
            course. <em>React, Node.js</em>
          </p>

          <p>
            <strong>MagicTunes 🎵</strong>
            <br />
            Spotify-powered music discovery app with login and artist search.{" "}
            <em>React, Node.js, Spotify API</em>
          </p>

          <p>
            <strong>TBeautyLounge.com 💅</strong>
            <br />
            Built and maintain medspa site.{" "}
            <em>
              HTML, CSS, JS –{" "}
              <a href="https://tbeautylounge.com" target="_blank">
                Visit Site
              </a>
            </em>
          </p>

          <p>
            <strong>TomoJapaneseCuisines.com 🍣</strong>
            <br />
            Designed website for local Japanese restaurant.{" "}
            <em>
              HTML, CSS, JS –{" "}
              <a href="https://tomojapanesecuisines.com" target="_blank">
                Visit Site
              </a>
            </em>
          </p>

          <p>
            <strong>Portfolio Website 🌸</strong>
            <br />
            Animated and responsive site for personal branding.{" "}
            <em>
              React, Vite, CSS Modules -{" "}
              <a href="https://tomojapanesecuisines.com" target="_blank">
                Visit Site
              </a>
            </em>
          </p>
        </section>

        <section className={styles.section}>
          <h3>Experience</h3>
          <p>
            <strong>Operations & Finance Manager – T Beauty Lounge</strong>
            <br />
            Goodyear, AZ · 2020–Present
            <br />
            Managed day-to-day ops, handled finances, and built the brand's web
            presence.
          </p>

          <p>
            <strong>Independent Travel Agent – Martin Magical Travels</strong>
            <br />
            Remote · 2025–Present
            <br />
            Book and coordinate Disney-inspired travel experiences with full
            itinerary support.
          </p>
        </section>

        <section className={styles.section}>
          <h3>Education & Certifications</h3>
          <p>
            <strong>B.S. in Web Development</strong> – Full Sail University,
            Winter Park, FL (Expected May 2026)
          </p>
          <p>
            <strong>High School Diploma</strong> – Independence High School, San
            Jose, CA (2015)
          </p>
          <p>
            <strong>Certifications:</strong> SheCodes Basics, SheCodes Add-on,
            SheCodes Plus
          </p>
        </section>

        <div className={styles.downloadWrap}>
          <a
            href="/Yvonne_Tran_Resume.pdf"
            download
            target="_blank"
            rel="noopener noreferrer"
            className={styles.download}>
            🌸 Download Resume (PDF)
          </a>
        </div>
      </motion.div>
    </div>
  );
}

export default Resume;
