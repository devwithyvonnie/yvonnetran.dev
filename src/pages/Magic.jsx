import { motion } from "framer-motion";

function Magic() {
  return (
    <motion.div
      style={{ textAlign: "center", padding: "5rem 2rem" }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <h1 style={{ fontSize: "2.5rem", marginBottom: "1rem" }}>🎆 You found the magic!</h1>
      <p style={{ fontSize: "1.2rem" }}>
        Welcome to the secret sparkle page. ✨ You’re clearly a curious explorer.
        Here’s a Shiba tail wag of approval 🐕‍🦺
      </p>
    </motion.div>
  );
}

export default Magic;
