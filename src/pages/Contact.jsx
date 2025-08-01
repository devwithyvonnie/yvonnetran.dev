import { motion } from 'framer-motion';
import styles from '../styles/Contact.module.css';

function Contact() {
  return (
    <motion.div
    className={styles.container}
    initial={{ opacity: 0, rotateY: -10 }}
    animate={{ opacity: 1, rotateY: 0 }}
    exit={{ opacity: 0, rotateY: 10 }}
    transition={{ duration: 0.5, ease: "easeInOut" }}
      >
      <h2 className={styles.heading}>Let's Connect! 💌</h2>
      <p className={styles.text}>
        I’d love to collaborate, answer questions, or just say hi!
      </p>
      <div className={styles.links}>
        <div className={styles.linkItem}>
          <a href="mailto:devwithyvonnie@gmail.com">Email</a>
        </div>
        <div className={styles.linkItem}>
          <a href="https://github.com/devwithyvonnie" target="_blank">GitHub</a>
        </div>
        <div className={styles.linkItem}>
          <a href="https://www.linkedin.com/in/yvonne-tran-451858191/" target="_blank">LinkedIn</a>
        </div>
      </div>
    </motion.div>
  );
}

export default Contact;
