import car2400 from "../../assets/photos/car2-400w.webp";
import car2800 from "../../assets/photos/car2-800w.webp";
import car21200 from "../../assets/photos/car2-1200w.webp";
import car2Original from "../../assets/photos/car2.jpg";

export default function car1() {
  return (
    <img
      srcSet={`${car2400} 400w, ${car2800} 800w, ${car21200} 1200w`}
      sizes="(max-width: 400px) 400px, (max-width: 800px) 800px, (min-width: 1001px) 1200px"
      src={car2Original}
      alt="Car in Italy"
      width="1224"
      height="1920"
    />
  );
}
