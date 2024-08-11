import type { MetaFunction } from "@remix-run/node";
import styles from "../styles/_index.module.css";
import profileImage from "../assets/profile-image.jpg";
import HandwritteName from "../components/handwrittenName/handwrittenName";
import { useCallback, useState } from "react";
import * as Toast from "@radix-ui/react-toast";
// import { X, Clipboard, ArrowUpRight } from "@phosphor-icons/react";

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
        <Toast.Root open={open} onOpenChange={setOpen} className={styles.toast}>
          <Toast.Title>
            <span className={styles.email}>simonlindhansen91@gmail.com</span>{" "}
            was copied to clipboard
          </Toast.Title>
          <Toast.Close className={styles.close} aria-label="Dismiss">
            {/* <X size={12} /> */}
          </Toast.Close>
        </Toast.Root>
        <Toast.Viewport className={styles.toastViewport} />
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
                {/* <Clipboard size={12} className={styles.icon} /> */}
              </a>
            </li>
            <li>
              <a
                href="https://x.com/simonlind"
                target="_blank"
                className={styles.link}
              >
                Twitter
                {/* <ArrowUpRight size={12} className={styles.icon} /> */}
              </a>
            </li>
            <li>
              <a
                href="https://dribbble.com/simonlind"
                target="_blank"
                className={styles.link}
              >
                Dribbble
                {/* <ArrowUpRight size={12} className={styles.icon} /> */}
              </a>
            </li>
            <li>
              <a
                href="https://www.strava.com/athletes/32876453"
                target="_blank"
                className={styles.link}
              >
                Strava
                {/* <ArrowUpRight size={12} className={styles.icon} /> */}
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/simonlind/"
                target="_blank"
                className={styles.link}
              >
                LinkedIn
                {/* <ArrowUpRight size={12} className={styles.icon} /> */}
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
              {/* <ArrowUpRight size={12} className={styles.icon} /> */}
            </a>{" "}
            where I led product and design. We sold Eduflow to{" "}
            <a
              href="https://multiverse.io"
              target="_blank"
              className={styles.link}
            >
              Multiverse
              {/* <ArrowUpRight size={12} className={styles.icon} /> */}
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
