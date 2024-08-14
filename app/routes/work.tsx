import styles from "../styles/work.module.css";
import WorkExperience from "~/components/workExperience/workExperience";

import image1 from "../assets/projects/eduflow-app/1.png";
import image2 from "../assets/projects/eduflow-app/2.png";
import image3 from "../assets/projects/eduflow-app/3.png";
import image4 from "../assets/projects/eduflow-app/4.png";

const WorkExperiences = {
  1: {
    title: "Design Lead at Multiverse",
    project: undefined,
    description:
      "I currently work as a Design Lead at Multiverse. As the most senior designer on the team, I lead cross-pillar projects, manage designers and bridge the gap between design and engineering.",
    year: "2023 — Present",
    type: "cv",
    images: [],
  },
  2: {
    title: "Co-founder & CPO at Eduflow",
    project: undefined,
    description:
      "I co-founded Eduflow where I led all product and design. Eduflow got acquired by Multiverse in 2023.",
    year: "2016 — 2023",
    type: "cv",
    images: [],
  },
  3: {
    title: "S17 batch at Y Combinator",
    project: undefined,
    description:
      "As part of our startup journey with Eduflow we got accepted into Y Combinator in San Fransisco to participate in their S17 batch.",
    year: "2017",
    type: "cv",
    images: [],
  },
  4: {
    title: "Digital Design & Communication at IT-University of CPH",
    project: undefined,
    description:
      "I hold both a B.Sc. and M.Sc. degree from the IT-University of Copenhagen specialising in Interaction Design.",
    year: "2011 — 2016",
    type: "cv",
    images: [],
  },
  5: {
    title: "Learning Experience Platform",
    project: "Eduflow",
    description:
      "Eduflow was an edtech platform allowing users to create engaging courses quickly to drive outcomes through social learning. Through 4 years I led product and design at Eduflow from its inception to acquisition.",
    year: undefined,
    type: "project",
    images: [
      {
        index: 0,
        src: image1,
      },
      {
        index: 1,
        src: image2,
      },
      {
        index: 2,
        src: image3,
      },
      {
        index: 3,
        src: image4,
      },
    ],
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
              project={experience.project}
              images={experience.images}
              ref={experience.ref}
            />
          ))}
      </div>
    </section>
  );
}
