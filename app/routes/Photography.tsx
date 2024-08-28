import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "Simon Lind › Photography" },
    { name: "description", content: "Simon Lind's personal website" },
  ];
};

export default function Photography() {
  return <div>stuff on photography</div>;
}
