import { Link } from "react-router-dom";
import styles from "../styles/NotFound.module.css";

function NotFound() {
  return (
    <div className={styles.container}>
      <h1 className={styles.code}>404</h1>
      <p className={styles.text}>Oh no! You wandered off the enchanted path…</p>
      <p className={styles.emoji}>🌌🐕✨</p>
      <Link to="/" className={styles.link}>Back to safety</Link>
    </div>
  );
}

export default NotFound;
