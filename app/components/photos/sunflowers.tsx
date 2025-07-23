import sunflowers400 from "../../assets/photos/sunflowers-400w.webp";
import sunflowers800 from "../../assets/photos/sunflowers-800w.webp";
import sunflowers1200 from "../../assets/photos/sunflowers-1200w.webp";
import sunflowersOriginal from "../../assets/photos/sunflowers.jpg";

export default function Sunflowers() {
  return (
    <img
      srcSet={`${sunflowers400} 400w, ${sunflowers800} 800w, ${sunflowers1200} 1200w`}
      sizes="(max-width: 400px) 400px, (max-width: 800px) 800px, (min-width: 1001px) 1200px"
      src={sunflowersOriginal}
      alt="Sunflowers at home"
      width="1224"
      height="1920"
    />
  );
}
