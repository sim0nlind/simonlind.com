import type { MetaFunction } from "@remix-run/node";
import { createMetaTags } from "~/utils/meta";
import { motion } from "motion/react";
import { useState } from "react";
import styles from "../styles/lab.002.module.css";

export const meta: MetaFunction = () => {
  return createMetaTags({
    title: "Lab experiment 002 | Simon Lind",
    description: "Lab experiment 002",
    url: "https://simonlind.com/lab/002",
  });
};

const pathVariants = {
  empty: {
    pathLength: 0,
    fillOpacity: 0,
    fill: "currentColor",
    stroke: "currentColor",
  },
  half: {
    pathLength: 0.5,
    fillOpacity: 0,
    fill: "currentColor",
    stroke: "currentColor",
    transition: {
      pathLength: { duration: 0.5 },
      fillOpacity: { duration: 0.3 },
      fill: { duration: 0.3 },
      stroke: { duration: 0.3 },
    },
  },
  full: {
    pathLength: 1,
    fillOpacity: 1,
    fill: "var(--amber-9)",
    stroke: "var(--amber-9)",
    transition: {
      pathLength: { duration: 0.5 },
      fillOpacity: { duration: 0.3, delay: 0.5 },
      fill: { duration: 0.3, delay: 0.8 },
      stroke: { duration: 0.3, delay: 0.8 },
    },
  },
};

export default function Lab001() {
  const [pathLength, setPathLength] = useState(1);

  const getVariant = () => {
    if (pathLength === 0) return "empty";
    if (pathLength === 0.5) return "half";
    return "full";
  };

  return (
    <div className={styles.container}>
      <span className={styles.eyebrow}>Experiment #002</span>
      <h1>Path-based animation with motion.dev</h1>

      <svg
        className={styles.icon}
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="0.75"
        stroke="currentColor"
      >
        <motion.path
          variants={pathVariants}
          initial="empty"
          animate={getVariant()}
          strokeLinecap="round"
          strokeLinejoin="round"
          d="m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z"
        />
      </svg>

      <span className={styles.buttonsHeading}>Animation states</span>

      <div className={styles.buttons}>
        <button onClick={() => setPathLength(0)}>Initial</button>
        <button onClick={() => setPathLength(0.5)}>Half way</button>
        <button onClick={() => setPathLength(1)}>Completed</button>
      </div>
    </div>
  );
}
