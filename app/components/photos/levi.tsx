import levi400 from "../../assets/photos/levi-400w.webp";
import levi800 from "../../assets/photos/levi-800w.webp";
import levi1200 from "../../assets/photos/levi-1200w.webp";
import leviOriginal from "../../assets/photos/levi.jpg";

export default function levi() {
  return (
    <img
      srcSet={`${levi400} 400w, ${levi800} 800w, ${levi1200} 1200w`}
      sizes="(max-width: 400px) 400px, (max-width: 800px) 800px, (min-width: 1001px) 1200px"
      src={leviOriginal}
      alt="Levi van Reijn at CPH Real Street Contest"
      width="2512"
      height="1600"
    />
  );
}
