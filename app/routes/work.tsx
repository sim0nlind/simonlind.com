import styles from "../styles/work.module.css";
import WorkExperience from "~/components/workExperience/workExperience";
import profileImage from "../assets/profile-image.jpg";

const WorkExperiences = {
  1: {
    title: "Design Lead at Multiverse",
    description:
      "I currently work as a Design Lead at Multiverse. As the most senior designer on the team, I lead cross-pillar projects, manage designers and bridge the gap between design and engineering.",
  },
  2: {
    title: "Co-founder & CPO at Eduflow",
    description:
      "I co-founded Eduflow where I led all product and design. Eduflow got acquired by Multiverse in 2023.",
  },
};

export default function Work() {
  return (
    <div>
      {Object.values(WorkExperiences).map((experience) => (
        <WorkExperience
          title={experience.title}
          description={experience.description}
        />
      ))}
    </div>
  );
}
