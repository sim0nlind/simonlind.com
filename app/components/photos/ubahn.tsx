import ubahn400 from "../../assets/photos/ubahn-400w.webp";
import ubahn800 from "../../assets/photos/ubahn-800w.webp";
import ubahn1200 from "../../assets/photos/ubahn-1200w.webp";
import ubahnOriginal from "../../assets/photos/ubahn.jpg";

export default function Ubahn() {
  return (
    <img
      srcSet={`${ubahn400} 400w, ${ubahn800} 800w, ${ubahn1200} 1200w`}
      sizes="(max-width: 400px) 400px, (max-width: 800px) 800px, (min-width: 1001px) 1200px"
      src={ubahnOriginal}
      alt="Ubahn in Berlin"
      width="1224"
      height="1920"
    />
  );
}
