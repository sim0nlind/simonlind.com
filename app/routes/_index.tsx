import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <>
      <div>
        <ul>
          <li>Simon Lind</li>
          <li>Software designer</li>
          <li>Copenhagen, Denmark</li>
        </ul>
      </div>
      <div>
        <p>
          I have more than 8 years of experience shaping products through
          software design, frontend development and strategic product thinking.
          I co-founded Eduflow where I led all product and design. We sold
          Eduflow to Multiverse in 2023 and that’s where I’m currently working
          as a Design Lead. When I’m not mulling over pixels, user stories and
          code I like to spend my time in a pair of running shoes. I enjoy
          distance running, but these days I’m mostly running after my two
          toddlers to keep them out of trouble.
        </p>
      </div>
    </>
  );
}
