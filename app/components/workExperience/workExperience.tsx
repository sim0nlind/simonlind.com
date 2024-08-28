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
  const carouselOffset = 0;
  const imageRefs = useRef<(HTMLImageElement | null)[]>([]);
  const [overlappingElement, setOverlappingElement] = useState(null);

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

  function handleImageClick(index: number, ref?: HTMLImageElement | null) {
    if (carouselRef.current) {
      (carouselRef.current as HTMLDivElement).scrollTo({
        left: 640,
        behavior: "smooth",
      });
    }
  }

  function handleNextImage() {
    if (props.images && activeImage < props.images.length - 1) {
      const imageRef = imageRefs.current[activeImage + 1];

      if (imageRef) {
        imageRef.scrollIntoView({ behavior: "smooth", inline: "center" });
      }
    }
  }

  function handlePrevImage() {
    if (activeImage !== 0) {
      const imageRef = imageRefs.current[activeImage - 1];

      if (imageRef) {
        imageRef.scrollIntoView({ behavior: "smooth", inline: "center" });
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
                  alt={`Image ${image.index}`}
                  ref={(el) => (imageRefs.current[image.index] = el)}
                  onClick={() =>
                    handleImageClick(
                      image.index,
                      imageRefs.current[image.index]
                    )
                  }
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
