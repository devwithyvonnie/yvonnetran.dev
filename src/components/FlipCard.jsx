import { useState } from "react";
import styles from "../styles/FlipCard.module.css";

function FlipCard({ image, title, description, link, linkLabel }) {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div
      className={`${styles.card} ${isFlipped ? styles.flipped : ""}`}
      onClick={handleFlip}>
      <div className={styles.inner}>
        <div className={styles.front}>
          <img src={image} alt={title} />
          <div className={styles.caption}>✨ Tap to Reveal</div>
        </div>
        <div className={styles.back}>
          <h3>{title}</h3>
          <p>{description}</p>
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.link}>
            {linkLabel}
          </a>
        </div>
      </div>
    </div>
  );
}

export default FlipCard;
