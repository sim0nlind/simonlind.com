import { NavLink } from "@remix-run/react";
import styles from "./nav.module.css";

export default function Nav() {
  return (
    <nav className={styles.nav}>
      <ul className={styles.navLinks}>
        <li>
          <NavLink
            to="/"
            className={({ isActive }) =>
              `${styles.navItem} ${isActive ? styles.active : ""}`
            }
          >
            About
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/work"
            className={({ isActive }) =>
              `${styles.navItem} ${isActive ? styles.active : ""}`
            }
          >
            Work
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/photography"
            className={({ isActive }) =>
              `${styles.navItem} ${isActive ? styles.active : ""}`
            }
          >
            Photography
          </NavLink>
        </li>
      </ul>
      <div>logo</div>
    </nav>
  );
}
