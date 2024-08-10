import styles from "./workExperience.module.css";

export interface WorkExperienceProps {
  title: string;
  description: string;
}

export default function WorkExperience(props: WorkExperienceProps) {
  return (
    <div>
      <h1 className={styles.title}>{props.title}</h1>
      <p>{props.description}</p>
    </div>
  );
}
