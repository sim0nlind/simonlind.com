import car1400 from "../../assets/photos/car1-400w.webp";
import car1800 from "../../assets/photos/car1-800w.webp";
import car11200 from "../../assets/photos/car1-1200w.webp";
import car1Original from "../../assets/photos/car1.jpg";

export default function car1() {
  return (
    <img
      srcSet={`${car1400} 400w, ${car1800} 800w, ${car11200} 1200w`}
      sizes="(max-width: 400px) 400px, (max-width: 800px) 800px, (min-width: 1001px) 1200px"
      src={car1Original}
      alt="Car on Bornholm"
      width="1224"
      height="1920"
    />
  );
}
