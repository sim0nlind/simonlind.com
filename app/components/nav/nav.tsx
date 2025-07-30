import { motion } from "motion/react";
import { useEffect, useState } from "react";
import { NavLink, useLocation } from "@remix-run/react";
import styles from "./nav.module.css";

let pages = [
  { id: "/", label: "About" },
  { id: "/projects", label: "Projects" },
  { id: "/experience", label: "Experience" },
  { id: "/photos", label: "Photos" },
];

export default function Nav() {
  const location = useLocation();
  const [activeTab, setActiveTab] = useState(location.pathname);

  useEffect(() => {
    setActiveTab(location.pathname);
  }, [location.pathname]);

  return (
    <nav className={styles.nav}>
      <ul className={styles.navLinks}>
        {pages.map((page) => (
          <li key={page.id}>
            <NavLink
              to={page.id}
              onClick={() => setActiveTab(page.id)}
              className={({ isActive }) =>
                `${styles.navItem} ${isActive ? styles.active : ""}`
              }
            >
              {activeTab === page.id && (
                <motion.span
                  layoutId="bubble"
                  className={styles.activeBG}
                  transition={{ type: "spring", bounce: 0.2, duration: 0.3 }}
                />
              )}
              {page.label}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}
