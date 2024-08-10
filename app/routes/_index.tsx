import type { MetaFunction } from "@remix-run/node";
import styles from "../styles/_index.module.css";
import profileImage from "../assets/profile-image.jpg";
import HandwritteName from "../components/handwrittenName/handwrittenName";
import { useCallback, useState } from "react";
import * as Toast from "@radix-ui/react-toast";

export const meta: MetaFunction = () => {
  return [
    { title: "Simon Lind" },
    { name: "description", content: "Simon Lind's personal website" },
  ];
};

export default function Index() {
  const copyEmailToClipboard = useCallback(() => {
    const email = "simonlindhansen91@gmail.com";
    navigator.clipboard
      .writeText(email)
      .then(() => {
        setOpen(true);
      })
      .catch((err) => {
        console.error("Failed to copy: ", err);
      });
  }, []);

  const [open, setOpen] = useState(false);

  return (
    <>
      <Toast.Provider duration={4000}>
        <Toast.Root open={open} onOpenChange={setOpen}>
          <Toast.Title>copied</Toast.Title>
        </Toast.Root>
        <Toast.Viewport />
      </Toast.Provider>

      <div>
        <img
          src={profileImage}
          alt="portrait of Simon Lind"
          className={styles.profileImage}
        />
        <div className={styles.infoAndLinks}>
          <ul>
            <li className={styles.name}>Simon Lind</li>
            <li>Software designer</li>
            <li>Copenhagen, Denmark</li>
          </ul>
          <ul className={styles.links}>
            <li>
              <a onClick={copyEmailToClipboard} className={styles.link}>
                Email
              </a>
            </li>
            <li>
              <a href="#" className={styles.link}>
                Twitter
              </a>
            </li>
            <li>
              <a href="#" className={styles.link}>
                Dribbble
              </a>
            </li>
            <li>
              <a href="#" className={styles.link}>
                Strava
              </a>
            </li>
            <li>
              <a href="#" className={styles.link}>
                LinkedIn
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div>
        <div className={styles.text}>
          <p>
            I have more than 8 years of experience shaping products through
            software design, frontend development and strategic product
            thinking.
          </p>
          <p>
            I co-founded{" "}
            <a
              href="https://eduflow.com"
              target="_blank"
              className={styles.link}
            >
              Eduflow
            </a>{" "}
            where I led product and design. We sold Eduflow to{" "}
            <a
              href="https://multiverse.io"
              target="_blank"
              className={styles.link}
            >
              Multiverse
            </a>{" "}
            in 2023 and that’s where I’m currently working as a Design Lead.
          </p>
          <p>
            When I’m not mulling over pixels, user stories and code I like to
            spend my time in a pair of running shoes. I enjoy distance running,
            but these days I’m mostly running after my two toddlers to keep them
            out of trouble.
          </p>
        </div>
      </div>
      <HandwritteName />
    </>
  );
}
