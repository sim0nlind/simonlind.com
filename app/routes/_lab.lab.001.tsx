import type { MetaFunction } from "@remix-run/node";
import { motion } from "motion/react";
import { useState } from "react";
import styles from "../styles/lab.001.module.css";

import thailand from "../assets/photos/thailand.jpg";

export const meta: MetaFunction = () => {
  return [
    { title: "Lab 001 | Simon Lind" },
    { name: "description", content: "Lab experiment 001" },
  ];
};

export default function Lab001() {
  const [isScaled, setIsScaled] = useState(false);

  const handleImageClick = () => {
    setIsScaled(!isScaled);
  };

  return (
    <motion.div className={styles.container}>
      <h1>Lightbox effect with motion.dev</h1>
      <motion.img
        src={thailand}
        alt="Thailand"
        className={isScaled ? styles.scaled : ""}
        onClick={handleImageClick}
        layout
        transition={{
          duration: 0.6,
          ease: [0, 0.71, 0.2, 1.01],
        }}
      />
    </motion.div>
  );
}
