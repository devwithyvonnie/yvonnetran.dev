import React from "react";
import styles from "../styles/FlipCard.module.css";

function FlipCard({ image, title, description, links }) {
  return (
    <div className={styles.card}>
      <img src={image} alt={title} className={styles.image} />
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
      <div className={styles.links}>
        {links?.map((link, index) => (
          <a
            key={index}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.link}
          >
            {link.label}
          </a>
        ))}
      </div>
    </div>
  );
}

export default FlipCard;
