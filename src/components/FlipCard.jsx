import styles from "../styles/FlipCard.module.css";

function FlipCard({ image, title, description, link, linkLabel }) {
  return (
    <div className={styles.card}>
      <img src={image} alt={title} className={styles.image} />
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
      <a
        className={styles.link}
        href={link}
        target="_blank"
        rel="noopener noreferrer"
      >
        {linkLabel}
      </a>
    </div>
  );
}

export default FlipCard;
