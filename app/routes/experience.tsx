import type { MetaFunction } from "@remix-run/node";
import { createMetaTags } from "~/utils/meta";
import styles from "../styles/experience.module.css";

// Components
import WorkExperience from "~/components/workExperience/workExperience";

// Data
import WorkExperiences from "../data/work-experiences";

export const meta: MetaFunction = () => {
  return createMetaTags({
    title: "Simon Lind › Work",
    url: "https://simonlind.com/experience",
  });
};

export default function Experience() {
  return (
    <section className={styles.page}>
      <div className={styles.cvContainer}>
        <h2 className={styles.sectionTitle}>Employment</h2>
        <div className={styles.list}>
          {Object.values(WorkExperiences)
            .filter((experience) => experience.type === "job")
            .map((experience) => (
              <WorkExperience
                key={experience.title}
                title={experience.title}
                description={experience.description}
                year={experience.year}
              />
            ))}
        </div>
      </div>

      <div className={styles.cvContainer}>
        <h2 className={styles.sectionTitle}>Education</h2>
        <div className={styles.list}>
          {Object.values(WorkExperiences)
            .filter((experience) => experience.type === "education")
            .map((experience) => (
              <WorkExperience
                key={experience.title}
                title={experience.title}
                description={experience.description}
                year={experience.year}
              />
            ))}
        </div>
      </div>
    </section>
  );
}
