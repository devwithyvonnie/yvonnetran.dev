import { motion } from "framer-motion";
import styles from "../styles/Projects.module.css";
import FlipCard from "../components/FlipCard";
import StarTracker from "../public/assets/star-tracker.png";
import SpotifyImg from "../public/assets/spotify.png";
import TBeautyImg from "../public/assets/tbeauty.png";
import TomoImg from "../public/assets/tomo.png";
import PortfolioImg from "../public/assets/portfolio.png";


const projects = [
  {
    image: StarTracker,
    title: "Star Tracker Library",
    description:
      "Built for Full Sail University's Advanced Server-Side Languages course. Features routes, templates, external API integration, and logic tied to business rules.",
    links: [
      {
        label: "🐾 View on GitHub",
        url: "https://github.com/tranyvonne-fs/ASL/tree/assignments/star-tracker-ui/star-tracker-ui",
      },
    ],
  },
  {
    image: SpotifyImg,
    title: "Spotify Search App",
    description:
      "A magical React app powered by Spotify’s API. Search for artists, tracks, and explore musical magic.",
    links: [
      {
        label: "🐾 View on GitHub",
        url: "https://github.com/tranyvonne-fs/tranyvonne_spotify_search_app",
      },
    ],
  },
  {
    image: TBeautyImg,
    title: "T Beauty Lounge",
    description:
      "Live Medical Spa site built for T Beauty Lounge, showcasing services and booking info.",
    links: [
      {
        label: "✨ Visit Site",
        url: "https://tbeautylounge.com",
      },
    ],
  },
  {
    image: TomoImg,
    title: "Tomo Japanese Cuisine",
    description:
      "A live restaurant site built for a local sushi spot in Arizona. Clean layout with local charm.",
    links: [
      {
        label: "✨ Visit Site",
        url: "https://tomojapanesecuisines.com",
      },
    ],
  },
  {
    image: "assets/portfolio.png",
    title: "Portfolio Site",
    description:
      "The magical portfolio you’re looking at right now — React, Framer Motion, and a whole lot of whimsy.",
    links: [
      {
        label: "🐾 GitHub",
        url: "https://github.com/tranyvonne-fs/portfolio",
      },
      {
        label: "✨ Live Site",
        url: "https://yvonnetran.dev",
      },
    ],
  },
];

function Projects() {
  return (
    <div className={styles.pageBackground}>
      <motion.div
        className={styles.container}
        initial={{ opacity: 0, rotateY: -10 }}
        animate={{ opacity: 1, rotateY: 0 }}
        exit={{ opacity: 0, rotateY: 10 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
      >
        <h2 className={styles.title}>✨ Featured Projects ✨</h2>
        <div className={styles.grid}>
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <FlipCard
                image={project.image}
                title={project.title}
                description={project.description}
                link={project.link}
                linkLabel={project.linkLabel}
              />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}

export default Projects;
