import type { MetaFunction } from "@remix-run/node";
import { createMetaTags } from "~/utils/meta";
import styles from "../styles/feed.module.css";

import Feed1 from "../components/feed/1";
import Feed2 from "../components/feed/2";
import Feed3 from "../components/feed/3";
import Feed4 from "../components/feed/4";
import Feed5 from "../components/feed/5";
import Feed6 from "../components/feed/6";
import Feed7 from "../components/feed/7";

export const meta: MetaFunction = () => {
  return createMetaTags({
    title: "Simon Lind › Feed",
    url: "https://simonlind.com/feed",
  });
};

export default function Photos() {
  return (
    <div className={styles.container}>
      <p className={styles.text}>
        A feed of sketches, ideas, experiments & work-in-progress.
      </p>
      <section className={styles.imagesContainer}>
        <div className={styles.imageContainer}>
          <Feed6 />
          <div className={styles.caption}>
            <p>Avatars</p>
            <p>December, '25</p>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <Feed5 />
          <div className={styles.caption}>
            <p>Waitlist sign up</p>
            <p>December, '25</p>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <Feed4 />
          <div className={styles.caption}>
            <p>Shader experiment</p>
            <p>December, '25</p>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <Feed3 />
          <div className={styles.caption}>
            <p>Agentwork · Chat</p>
            <p>December, '25</p>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <Feed7 />
          <div className={styles.caption}>
            <p>Sidebar interactions</p>
            <p>December, '25</p>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <Feed2 />
          <div className={styles.caption}>
            <p>Agentwork · Home</p>
            <p>December, '25</p>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <Feed1 />
          <div className={styles.caption}>
            <p>The light of day</p>
            <p>December, '25</p>
          </div>
        </div>
      </section>
    </div>
  );
}
