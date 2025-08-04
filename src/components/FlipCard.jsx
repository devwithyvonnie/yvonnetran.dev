import React from "react";
import styles from "../styles/FlipCard.module.css";

function FlipCard({ image, title, description, link, linkLabel, links }) {
  return (
    <div className={styles.card}>
      <img src={image} alt={title} className={styles.image} />
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
      <div className={styles.links}>
        {links && links.length > 0 && (
          <div className={styles.links}>
            {links.map((item, index) => (
              <a
                key={index}
                href={item.url}
                className={styles.link}
                target="_blank"
                rel="noopener noreferrer">
                {item.label}
              </a>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default FlipCard;
