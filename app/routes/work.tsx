import type { MetaFunction } from "@remix-run/node";
import styles from "../styles/work.module.css";

// Components
import WorkExperience from "~/components/workExperience/workExperience";

// Data
import WorkExperiences from "../data/work-experiences";

export const meta: MetaFunction = () => {
  return [
    { title: "Simon Lind › Work" },
    { name: "description", content: "Simon Lind's personal website" },
  ];
};

export default function Work() {
  return (
    <section className={styles.page}>
      <div className={styles.cvContainer}>
        <h2 className={styles.sectionTitle}>Employment & Education</h2>
        <div className={styles.list}>
          {Object.values(WorkExperiences)
            .filter((experience) => experience.type === "cv")
            .map((experience) => (
              <WorkExperience
                key={experience.title}
                title={experience.title}
                description={experience.description}
                year={experience.year}
                hoverImageSrc={experience.hoverImageSrc}
              />
            ))}
        </div>
      </div>
      <div className={styles.projectsContainer}>
        <h2 className={styles.sectionTitle}>Projects</h2>
        <div className={styles.list}>
          {Object.values(WorkExperiences)
            .filter((experience) => experience.type === "project")
            .map((experience) => (
              <WorkExperience
                key={experience.title}
                title={experience.title}
                description={experience.description}
                project={experience.project}
                images={experience.images}
                ref={experience.ref}
              />
            ))}
        </div>
      </div>
    </section>
  );
}
