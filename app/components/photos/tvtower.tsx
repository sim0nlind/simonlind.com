import tvtower400 from "../../assets/photos/tvtower-400w.webp";
import tvtower800 from "../../assets/photos/tvtower-800w.webp";
import tvtower1200 from "../../assets/photos/tvtower-1200w.webp";
import tvtowerOriginal from "../../assets/photos/tvtower.jpg";

export default function tvtower() {
  return (
    <img
      srcSet={`${tvtower400} 400w, ${tvtower800} 800w, ${tvtower1200} 1200w`}
      sizes="(max-width: 400px) 400px, (max-width: 800px) 800px, (min-width: 1001px) 1200px"
      src={tvtowerOriginal}
      alt="Berlin TV tower"
      width="1200"
      height="1882"
    />
  );
}
