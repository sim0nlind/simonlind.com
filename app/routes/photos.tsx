import type { MetaFunction } from "@remix-run/node";
import styles from "../styles/photos.module.css";

import thailand from "../assets/photos/thailand.jpg";
import ubahn from "../assets/photos/ubahn.jpg";
import farvemollen from "../assets/photos/farvemollen.jpg";
import levi from "../assets/photos/levi.jpg";
import sunflowers from "../assets/photos/sunflowers.jpg";
import tvtower from "../assets/photos/tvtower.jpg";

export const meta: MetaFunction = () => {
  return [
    { title: "Simon Lind › Photos" },
    { name: "description", content: "Simon Lind's personal website" },
  ];
};

export default function Photos() {
  return (
    <div>
      <p className={styles.text}>
        I’ve always enjoyed photography. There’s something special about
        capturing a memorable moment in time. This page includes a selection of
        photos I’ve shot over the past years. They remind me of wonderful
        places, people and occasions.
      </p>
      <section className={styles.imagesContainer}>
        <div className={styles.imageContainer}>
          <img src={thailand} alt="1" />
          <div className={styles.caption}>
            <p>Thailand ‘16</p>
            <p>Koh Samet</p>
            <p>iPhone</p>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <img src={ubahn} alt="1" />
          <div className={styles.caption}>
            <p>Berlin ‘22</p>
            <p>U-bahn</p>
            <p>Mju ii · Portra 400</p>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <img src={farvemollen} alt="1" />
          <div className={styles.caption}>
            <p>Copenhagen '23</p>
            <p>Farvemøllen</p>
            <p>Mju ii · Portra 400</p>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <img src={levi} alt="1" />
          <div className={styles.caption}>
            <p>Copenhagen '20</p>
            <p>Levi van Reijn at Real Street</p>
            <p>GX80</p>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <img src={sunflowers} alt="1" />
          <div className={styles.caption}>
            <p>Copenhagen '22</p>
            <p>Sunflowers at home</p>
            <p>Mju ii · Portra 400</p>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <img src={tvtower} alt="1" />
          <div className={styles.caption}>
            <p>Berlin ‘22</p>
            <p>TV tower</p>
            <p>Mju ii · Portra 400</p>
          </div>
        </div>
      </section>
    </div>
  );
}
