import styles from "./workExperience.module.css";

export interface WorkExperienceProps {
  project?: string;
  title: string;
  description: string;
  year?: string;
}

export default function WorkExperience(props: WorkExperienceProps) {
  return (
    <div>
      {props.project && <p className={styles.year}>{props.project}</p>}
      <div className={styles.headingContainer}>
        <h2 className={styles.title}>{props.title}</h2>
        {props.year && <p className={styles.year}>{props.year}</p>}
      </div>
      <p className={styles.description}>{props.description}</p>
    </div>
  );
}
