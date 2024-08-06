import styles from "./logoButton.module.css";

export default function LogoButton() {
  return (
    <button className={styles.button}>
      <svg
        width="9"
        height="12"
        viewBox="0 0 9 12"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0.359796 4.65195L8.16802 0.0802457C8.67692 -0.217713 9.24062 0.376285 8.89209 0.843233L5.73212 5.07689L8.57492 6.2922C8.97594 6.46364 9.01354 7.00052 8.64026 7.22493L0.837781 11.9156C0.317006 12.2287 -0.257668 11.6032 0.123773 11.1384L3.29034 7.28029L0.358977 5.55717C0.00828348 5.35102 0.00872932 4.8575 0.359796 4.65195Z"
          fill="#FFC53D"
        />
      </svg>
    </button>
  );
}
