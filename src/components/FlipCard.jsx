import styles from "../styles/FlipCard.module.css";

const FlipCard = ({ title, image, description, links }) => {
  return (
    <div className={styles.card}>
      <img src={image} alt={title} className={styles.image} />
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>

      {Array.isArray(links) && links.length > 0 && (
        <div className={styles.links}>
          {links.map((l, index) => (
            <a
              key={index}
              href={l.url}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.link}
            >
              {l.label}
            </a>
          ))}
        </div>
      )}
    </div>
  );
};

export default FlipCard;
