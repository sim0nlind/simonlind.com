import { Link } from "@remix-run/react";
import styles from "./nav.module.css";

export default function Nav() {
  return (
    <nav className={styles.nav}>
      <ul>
        <li>
          <Link to="#">About</Link>
        </li>
        <li>
          <Link to="#">Work</Link>
        </li>
        <li>
          <Link to="#">Photography</Link>
        </li>
      </ul>
    </nav>
  );
}
