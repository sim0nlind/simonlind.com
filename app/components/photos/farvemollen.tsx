import farvemollen400 from "../../assets/photos/farvemollen-400w.webp";
import farvemollen800 from "../../assets/photos/farvemollen-800w.webp";
import farvemollen1200 from "../../assets/photos/farvemollen-1200w.webp";
import farvemollenOriginal from "../../assets/photos/farvemollen.jpg";

export default function farvemollen() {
  return (
    <img
      srcSet={`${farvemollen400} 400w, ${farvemollen800} 800w, ${farvemollen1200} 1200w`}
      sizes="(max-width: 400px) 400px, (max-width: 800px) 800px, (min-width: 1001px) 1200px"
      src={farvemollenOriginal}
      alt="Farvemøllen in Copenhagen"
      width="1224"
      height="1920"
    />
  );
}
