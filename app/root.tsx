import React from "react";
import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import type { LinksFunction } from "@remix-run/node";
import { Analytics } from "@vercel/analytics/react";

import Nav from "./components/nav/nav";
import { useTheme } from "./hooks/useTheme";
import "./global.css";
import "./tailwind.css";
import geist from "./assets/fonts/Geist-Variable.woff2";
import styles from "./root.module.css";

export const links: LinksFunction = () => [
  {
    rel: "preload",
    href: geist,
    as: "font",
    type: "font/woff2",
    crossOrigin: "anonymous",
  },
];

function ThemeProvider({ children }: { children: React.ReactNode }) {
  // Initialize theme but don't block rendering
  useTheme();

  return <>{children}</>;
}

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <ThemeProvider>
          <main className={styles.main}>
            <div className={styles.container}>
              <Nav />
              {children}
              <ScrollRestoration />
              <Scripts />
              <Analytics />
            </div>
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}
