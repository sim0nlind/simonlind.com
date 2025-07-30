import type { MetaFunction } from "@remix-run/node";
import { createMetaTags } from "~/utils/meta";
import styles from "../styles/photos.module.css";

import Thailand from "../components/photos/thailand";
import Sunflowers from "../components/photos/sunflowers";
import Ubahn from "../components/photos/ubahn";
import Farvemollen from "../components/photos/farvemollen";
import Levi from "../components/photos/levi";
import Tvtower from "../components/photos/tvtower";
import Slowshutter from "../components/photos/slowshutter";
import Car1 from "../components/photos/car1";
import Yellowwindows from "../components/photos/yellowwindows";

export const meta: MetaFunction = () => {
  return createMetaTags({
    title: "Simon Lind › Photos",
    url: "https://simonlind.com/photos",
  });
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
          <Thailand />
          <div className={styles.caption}>
            <p>Thailand ‘16</p>
            <p>Koh Samet</p>
            <p>iPhone</p>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <Ubahn />
          <div className={styles.caption}>
            <p>Berlin ‘22</p>
            <p>U-bahn</p>
            <p>Mju ii · Portra 400</p>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <Farvemollen />
          <div className={styles.caption}>
            <p>Copenhagen '23</p>
            <p>Farvemøllen</p>
            <p>Mju ii · Portra 400</p>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <Levi />
          <div className={styles.caption}>
            <p>Copenhagen '20</p>
            <p>Levi van Reijn at Real Street</p>
            <p>GX80</p>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <Sunflowers />
          <div className={styles.caption}>
            <p>Copenhagen '22</p>
            <p>Sunflowers at home</p>
            <p>Mju ii · Portra 400</p>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <Tvtower />
          <div className={styles.caption}>
            <p>Berlin ‘22</p>
            <p>TV tower</p>
            <p>Mju ii · Portra 400</p>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <Slowshutter />
          <div className={styles.caption}>
            <p>Tokyo ‘18</p>
            <p>Slow shutter</p>
            <p>GX80</p>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <Car1 />
          <div className={styles.caption}>
            <p>Bornholm ‘25</p>
            <p>Old car</p>
            <p>GR iiix</p>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <Yellowwindows />
          <div className={styles.caption}>
            <p>Copenhagen ‘24</p>
            <p>Windows</p>
            <p>GR iiix</p>
          </div>
        </div>
      </section>
    </div>
  );
}
