import styles from "../styles/work.module.css";
import WorkExperience from "~/components/workExperience/workExperience";

const WorkExperiences = {
  1: {
    title: "Design Lead at Multiverse",
    description:
      "I currently work as a Design Lead at Multiverse. As the most senior designer on the team, I lead cross-pillar projects, manage designers and bridge the gap between design and engineering.",
    year: "2023 — Present",
    type: "cv",
  },
  2: {
    title: "Co-founder & CPO at Eduflow",
    description:
      "I co-founded Eduflow where I led all product and design. Eduflow got acquired by Multiverse in 2023.",
    year: "2016 — 2023",
    type: "cv",
  },
  3: {
    title: "S17 batch at Y Combinator",
    description:
      "As part of our startup journey with Eduflow we got accepted into Y Combinator in San Fransisco to participate in their S17 batch.",
    year: "2017",
    type: "cv",
  },
  4: {
    title: "Digital Design & Communication at IT-University of CPH",
    description:
      "I hold both a B.Sc. and M.Sc. degree from the IT-University of Copenhagen specialising in Interaction Design.",
    year: "2011 — 2016",
    type: "cv",
  },
  5: {
    title: "Learning Experience Platform",
    project: "Eduflow",
    description:
      "Eduflow was an edtech platform allowing users to create engaging courses quickly to drive outcomes through social learning. Through 4 years I led product and design at Eduflow from its inception to acquisition.",
    type: "project",
  },
};

export default function Work() {
  return (
    <section className={styles.page}>
      <div className={styles.cvContainer}>
        <h2 className={styles.sectionTitle}>Employment & Education</h2>
        {Object.values(WorkExperiences)
          .filter((experience) => experience.type === "cv")
          .map((experience) => (
            <WorkExperience
              key={experience.title}
              title={experience.title}
              description={experience.description}
              year={experience.year}
            />
          ))}
      </div>
      <div className={styles.cvContainer}>
        <h2 className={styles.sectionTitle}>Projects</h2>
        {Object.values(WorkExperiences)
          .filter((experience) => experience.type === "project")
          .map((experience) => (
            <WorkExperience
              key={experience.title}
              title={experience.title}
              description={experience.description}
              year={experience.year}
              project={experience.project}
            />
          ))}
      </div>
    </section>
  );
}
