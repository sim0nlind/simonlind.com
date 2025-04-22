import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "Simon Lind › Photos" },
    { name: "description", content: "Simon Lind's personal website" },
  ];
};

export default function Photos() {
  return <div>stuff on photography</div>;
}
