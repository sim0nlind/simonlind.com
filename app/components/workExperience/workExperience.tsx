import { useRef } from "react";
import styles from "./workExperience.module.css";
import { ArrowCircleLeft } from "@phosphor-icons/react/dist/ssr/ArrowCircleLeft";
import { ArrowCircleRight } from "@phosphor-icons/react/dist/ssr/ArrowCircleRight";

export interface WorkExperienceProps {
  project?: string;
  title: string;
  description: string;
  year?: string;
  images?: {
    src: string;
    index: number;
  }[];
}

export default function WorkExperience(props: WorkExperienceProps) {
  const carouselRef = useRef<HTMLDivElement>(null);
  const carouselInnerRef = useRef<HTMLDivElement>(null);

  function handleNextImage() {
    const scrollContainer = carouselRef.current;
    const innerScrollContainer = carouselInnerRef.current;

    if (scrollContainer && innerScrollContainer) {
      scrollContainer.scrollLeft =
        scrollContainer.scrollLeft + innerScrollContainer.offsetWidth;
    }
  }

  function handlePrevImage() {
    const scrollContainer = carouselRef.current;
    const innerScrollContainer = carouselInnerRef.current;

    if (scrollContainer && innerScrollContainer) {
      scrollContainer.scrollLeft =
        scrollContainer.scrollLeft - innerScrollContainer.offsetWidth;
    }
  }

  return (
    <div>
      {props.project && <p className={styles.year}>{props.project}</p>}
      <div className={styles.headingContainer}>
        <h2
          className={styles.title + " " + (props.project ? styles.project : "")}
        >
          {props.title}
        </h2>
        {props.year && <p className={styles.year}>{props.year}</p>}
      </div>
      <div
        className={
          styles.description + " " + (props.project ? styles.project : "")
        }
        dangerouslySetInnerHTML={{ __html: props.description }}
      />
      {props.images && (
        <>
          <div className={styles.carousel} ref={carouselRef}>
            <div className={styles.carouselInner} ref={carouselInnerRef}>
              {props.images.map((image) => (
                <img
                  className={styles.image}
                  key={image.index}
                  src={image.src}
                  alt={`${image.index}`}
                />
              ))}
              <div className={styles.spacer} />
            </div>
          </div>
          <div className={styles.carouselButtonsContainer}>
            <button className={styles.carouselButton} onClick={handlePrevImage}>
              <ArrowCircleLeft size={24} />
            </button>
            <button className={styles.carouselButton} onClick={handleNextImage}>
              <ArrowCircleRight size={24} />
            </button>
          </div>
        </>
      )}
    </div>
  );
}
