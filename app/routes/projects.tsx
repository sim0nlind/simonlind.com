import type { MetaFunction } from "@remix-run/node";
import { createMetaTags } from "~/utils/meta";
import styles from "../styles/projects.module.css";

// Components
import WorkExperience from "~/components/workExperience/workExperience";

// Data
import WorkExperiences from "../data/work-experiences";

export const meta: MetaFunction = () => {
  return createMetaTags({
    title: "Simon Lind › Work",
    url: "https://simonlind.com/projects",
  });
};

export default function Projects() {
  return (
    <section className={styles.page}>
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
              />
            ))}
        </div>
      </div>
    </section>
  );
}
