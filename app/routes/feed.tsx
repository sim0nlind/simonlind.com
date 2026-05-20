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
import Feed8 from "../components/feed/8";
import Feed9 from "../components/feed/9";
import Feed10 from "../components/feed/10";
import Feed11 from "../components/feed/11";
import Feed12 from "../components/feed/12";
import Feed13 from "../components/feed/13";
import Feed14 from "../components/feed/14";
import Feed15 from "../components/feed/15";
import Feed16 from "../components/feed/16";
import Feed17 from "../components/feed/17";
import Feed18 from "../components/feed/18";
import Feed19 from "../components/feed/19";
import Feed20 from "../components/feed/20";
import Feed21 from "../components/feed/21";
import Feed22 from "../components/feed/22";
import Feed23 from "../components/feed/23";
import Feed24 from "../components/feed/24";
import Feed25 from "../components/feed/25";
import Feed26 from "../components/feed/26";
import Feed27 from "../components/feed/27";
import Feed28 from "../components/feed/28";
import Feed29 from "../components/feed/29";

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
        A feed of my work, sketches, ideas and experiments.
      </p>
      <section className={styles.imagesContainer}>
        <div className={styles.imageContainer}>
          <Feed29 />
          <div className={styles.caption}>
            <p>Task title reveal</p>
            <p>May, '26</p>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <Feed28 />
          <div className={styles.caption}>
            <p>Article layout</p>
            <p>May, '26</p>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <Feed27 />
          <div className={styles.caption}>
            <p>Blog posts</p>
            <p>May, '26</p>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <Feed26 />
          <div className={styles.caption}>
            <p>Color & icon picker</p>
            <p>May, '26</p>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <Feed25 />
          <div className={styles.caption}>
            <p>Revised home page</p>
            <p>April, '26</p>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <Feed24 />
          <div className={styles.caption}>
            <p>Inbox</p>
            <p>March, '26</p>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <Feed23 />
          <div className={styles.caption}>
            <p>Input & status bar</p>
            <p>March, '26</p>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <Feed22 />
          <div className={styles.caption}>
            <p>For agents</p>
            <p>March, '26</p>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <Feed21 />
          <div className={styles.caption}>
            <p>Landing page</p>
            <p>February, '26</p>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <Feed20 />
          <div className={styles.caption}>
            <p>Delete confirmation</p>
            <p>February, '26</p>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <Feed19 />
          <div className={styles.caption}>
            <p>MacOS app</p>
            <p>February, '26</p>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <Feed18 />
          <div className={styles.caption}>
            <p>Logo animation</p>
            <p>January, '26</p>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <Feed17 />
          <div className={styles.caption}>
            <p>UI refinement</p>
            <p>January, '26</p>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <Feed16 />
          <div className={styles.caption}>
            <p>Beta launch page</p>
            <p>January, '26</p>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <Feed15 />
          <div className={styles.caption}>
            <p>Steps to complete</p>
            <p>January, '26</p>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <Feed14 />
          <div className={styles.caption}>
            <p>Thinking animation</p>
            <p>January, '26</p>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <Feed13 />
          <div className={styles.caption}>
            <p>File preview</p>
            <p>January, '26</p>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <Feed12 />
          <div className={styles.caption}>
            <p>The Light of Day</p>
            <p>December, '25</p>
            <a
              href="https://thelightof.day"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.link}
            >
              thelightof.day
            </a>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <Feed11 />
          <div className={styles.caption}>
            <p>Logo variations</p>
            <p>December, '25</p>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <Feed10 />
          <div className={styles.caption}>
            <p>Copy to clipboard</p>
            <p>December, '25</p>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <Feed9 />
          <div className={styles.caption}>
            <p>Dialog</p>
            <p>December, '25</p>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <Feed8 />
          <div className={styles.caption}>
            <p>Task proposal</p>
            <p>December, '25</p>
          </div>
        </div>
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
