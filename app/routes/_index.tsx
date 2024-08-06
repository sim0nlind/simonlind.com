import type { MetaFunction } from "@remix-run/node";
import styles from "../styles/_index.module.css";
import profileImage from "../assets/profile-image.jpg";
import HandwritteName from "../components/handwrittenName/handwrittenName";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <>
      <div>
        <img
          src={profileImage}
          alt="portrait of Simon Lind"
          className={styles.profileImage}
        />
        <div className={styles.infoAndLinks}>
          <ul>
            <li>Simon Lind</li>
            <li>Software designer</li>
            <li>Copenhagen, Denmark</li>
          </ul>
          <ul className={styles.links}>
            <li>
              <a href="#">Link</a>
            </li>
            <li>
              <a href="#">Link</a>
            </li>
            <li>
              <a href="#">Link</a>
            </li>
            <li>
              <a href="#">Link</a>
            </li>
            <li>
              <a href="#">Link</a>
            </li>
          </ul>
        </div>
      </div>
      <div>
        <p className={styles.text}>
          I have more than 8 years of experience shaping products through
          software design, frontend development and strategic product thinking.
          I co-founded Eduflow where I led all product and design. We sold
          Eduflow to Multiverse in 2023 and that’s where I’m currently working
          as a Design Lead. When I’m not mulling over pixels, user stories and
          code I like to spend my time in a pair of running shoes. I enjoy
          distance running, but these days I’m mostly running after my two
          toddlers to keep them out of trouble.
        </p>
      </div>
      <HandwritteName />
    </>
  );
}
