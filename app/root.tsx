import React, { useEffect } from "react";
import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import Nav from "./components/nav/nav";

import "./global.css";
import "./tailwind.css";
import styles from "./root.module.css";

export function Layout({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    // Check if the user has dark mode enabled
    const darkModeMediaQuery = window.matchMedia(
      "(prefers-color-scheme: dark)"
    );

    // Function to update the body class based on the media query
    const updateBodyClass = (e: MediaQueryListEvent) => {
      if (e.matches) {
        document.body.classList.add("dark");
      } else {
        document.body.classList.remove("dark");
      }
    };

    // Initial check
    updateBodyClass(darkModeMediaQuery);

    // Add event listener for changes in the media query
    darkModeMediaQuery.addEventListener("change", updateBodyClass);

    // Cleanup listener on component unmount
    return () => {
      darkModeMediaQuery.removeEventListener("change", updateBodyClass);
    };
  }, []);

  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <main className={styles.main}>
          <div className={styles.container}>
            <Nav />
            {children}
            <ScrollRestoration />
            <Scripts />
          </div>
        </main>
      </body>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}
