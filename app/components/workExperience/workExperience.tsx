import { useState, useRef } from "react";
import styles from "./workExperience.module.css";

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
  const [activeImage, setActiveImage] = useState(0);
  const imageRefs = useRef<(HTMLImageElement | null)[]>([]);

  function handleImageClick(index: number, ref: HTMLImageElement) {
    setActiveImage(index);
    ref.scrollIntoView({ behavior: "smooth" });
  }

  function handleNextImage() {
    if (props.images && activeImage < props.images.length - 1) {
      const imageRef = imageRefs.current[activeImage + 1];
      setActiveImage(activeImage + 1);

      if (imageRef) {
        imageRef.scrollIntoView({ behavior: "smooth" });
      }
    }
  }

  function handlePrevImage() {
    if (activeImage !== 0) {
      const imageRef = imageRefs.current[activeImage - 1];
      setActiveImage(activeImage - 1);

      if (imageRef) {
        imageRef.scrollIntoView({ behavior: "smooth" });
      }
    }
  }

  return (
    <div>
      {props.project && <p className={styles.year}>{props.project}</p>}
      <div className={styles.headingContainer}>
        <h2 className={styles.title}>{props.title}</h2>
        {props.year && <p className={styles.year}>{props.year}</p>}
      </div>
      <p className={styles.description}>{props.description}</p>
      {props.images && (
        <div className={styles.carousel}>
          <div className={styles.carouselInner}>
            {props.images.map((image) => (
              <img
                key={image.index}
                id={"image-" + image.index}
                src={image.src}
                alt={`Image ${image.index}`}
                ref={(el) => (imageRefs.current[image.index] = el)}
                onClick={() =>
                  handleImageClick(image.index, imageRefs.current[image.index])
                }
              />
            ))}
            <div className={styles.spacer} />
          </div>
        </div>
      )}
      <button onClick={handlePrevImage}>Prev</button>
      <button onClick={handleNextImage}>Next</button>
      <p>{activeImage}</p>
    </div>
  );
}
