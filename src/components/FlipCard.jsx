import { useState } from "react";
import styles from "../styles/FlipCard.module.css";

const FlipCard = ({ image, title, description, link, linkLabel }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => setIsFlipped(!isFlipped);

  return (
    <div
      className={`${styles.card} ${isFlipped ? styles.flipped : ""}`}
      onClick={handleFlip}
    >
      <div className={styles.inner}>
        <div className={styles.front}>
          <img src={image} alt={title} className={styles.image} />
          <h3>{title}</h3>
          <p className={styles.tapHint}>✨ Tap to reveal ✨</p>
        </div>
        <div className={styles.back}>
          <h3>{title}</h3>
          <p>{description}</p>
          <a href={link} target="_blank" rel="noopener noreferrer">
            {linkLabel}
          </a>
        </div>
      </div>
    </div>
  );
};

export default FlipCard;
