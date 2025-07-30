import React from "react";
import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import type { LinksFunction, MetaFunction } from "@remix-run/node";
import { Analytics } from "@vercel/analytics/react";

import Nav from "./components/nav/nav";
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

export const meta: MetaFunction = () => {
  return [
    { title: "Simon Lind" },
    { name: "description", content: "Simon Lind's personal website" },
    { property: "og:title", content: "Simon Lind" },
    { property: "og:description", content: "Simon Lind's personal website" },
    { property: "og:image", content: "https://simonlind.com/OG.png" },
    { property: "og:image:width", content: "1200" },
    { property: "og:image:height", content: "630" },
    { property: "og:type", content: "website" },
    { property: "og:url", content: "https://simonlind.com" },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: "Simon Lind" },
    { name: "twitter:description", content: "Simon Lind's personal website" },
    { name: "twitter:image", content: "https://simonlind.com/OG.png" },
  ];
};

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
        <main className={styles.main}>
          <div className={styles.container}>
            <Nav />
            {children}
            <ScrollRestoration />
            <Scripts />
            <Analytics />
          </div>
        </main>
      </body>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}
