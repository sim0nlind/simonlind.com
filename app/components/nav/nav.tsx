import { motion } from "framer-motion";
import { useState } from "react";
import { NavLink, useLocation } from "@remix-run/react";
import styles from "./nav.module.css";

let pages = [
  { id: "/", label: "About" },
  { id: "/work", label: "Work" },
  { id: "/photography", label: "Photography" },
];

export default function Nav() {
  const location = useLocation();
  let [activeTab, setActiveTab] = useState(location.pathname);

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
