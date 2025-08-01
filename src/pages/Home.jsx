import { motion } from 'framer-motion';
import styles from "../styles/Home.module.css";
import shiba from "../public/assets/shiba.png";
function Home() {
  return (
    <motion.div
    className={styles.container}
    initial={{ opacity: 0, rotateY: -10 }}
    animate={{ opacity: 1, rotateY: 0 }}
    exit={{ opacity: 0, rotateY: 10 }}
    transition={{ duration: 0.5, ease: "easeInOut" }}
  >
      <img src={shiba} alt="Shiba Inu mascot" className={styles.shiba} />
      <h1 className={styles.heading}>Hi, I'm Yvonne! </h1>
      <p className={styles.subheading}>
        Frontend developer with a love for Disney ✨, Shiba Inus 🐕, and
        Japanese aesthetics 🌸
      </p>
    </motion.div>
  );
}

export default Home;
