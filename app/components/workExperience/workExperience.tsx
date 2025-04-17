import { useEffect, useState, useRef } from "react";
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
  const observerRef = useRef(null);
  const carouselRef = useRef(null);
  const imageRefs = useRef<(HTMLImageElement | null)[]>([]);
  const [, setOverlappingElement] = useState(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry: any) => {
          if (entry.isIntersecting) {
            setOverlappingElement(entry.target);
            setActiveImage(parseInt(entry.target.id.split("-")[1]));
            console.log("Overlapping element:", entry.target);
          }
        });
      },
      { threshold: 0.8 }
    );

    if (observerRef.current) {
      imageRefs.current.forEach((element) => {
        if (element) {
          observer.observe(element);
        }
      });
    }

    return () => {
      imageRefs.current.forEach((element) => {
        if (element) {
          observer.unobserve(element);
        }
      });
    };
  }, []);

  function handleNextImage() {
    const scrollContainer = carouselRef.current;
    const imageRef = imageRefs.current[activeImage + 1];

    scrollContainer.scrollLeft = imageRef.offsetLeft;
    console.log(scrollContainer.scrollLeft);
  }

  function handlePrevImage() {
    if (activeImage !== 0) {
      const scrollContainer = carouselRef.current;
      const imageRef = imageRefs.current[activeImage - 1];

      if (scrollContainer && imageRef) {
        scrollContainer.scrollLeft = imageRef.offsetLeft;
        console.log(imageRef.offsetLeft);
      }
    }
  }

  function handleImageClick(image) {
    const scrollContainer = carouselRef.current;
    scrollContainer.scrollLeft = image.offsetLeft;
  }

  return (
    <div>
      {props.project && <p className={styles.year}>{props.project}</p>}
      <div className={styles.headingContainer}>
        <h2 className={styles.title}>{props.title}</h2>
        {props.year && <p className={styles.year}>{props.year}</p>}
      </div>
      <p
        className={styles.description}
        dangerouslySetInnerHTML={{ __html: props.description }}
      />
      {props.images && (
        <>
          <div className={styles.carouselObserver} ref={observerRef} />
          <div className={styles.carousel} ref={carouselRef}>
            <div className={styles.carouselInner}>
              {props.images.map((image) => (
                <img
                  key={image.index}
                  id={"image-" + image.index}
                  src={image.src}
                  alt={`${image.index}`}
                  onClick={() =>
                    handleImageClick(imageRefs.current[image.index])
                  }
                  ref={(el) => (imageRefs.current[image.index] = el)}
                />
              ))}
              <div className={styles.spacer} />
            </div>
          </div>
          <button onClick={handlePrevImage}>Prev</button>
          <button onClick={handleNextImage}>Next</button>
          <p>{activeImage}</p>
        </>
      )}
    </div>
  );
}
