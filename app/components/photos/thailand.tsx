import thailand400 from "../../assets/photos/thailand-400w.webp";
import thailand800 from "../../assets/photos/thailand-800w.webp";
import thailand1200 from "../../assets/photos/thailand-1200w.webp";
import thailandOriginal from "../../assets/photos/thailand.jpg";

export default function Thailand() {
  return (
    <img
      srcSet={`${thailand400} 400w, ${thailand800} 800w, ${thailand1200} 1200w`}
      sizes="(max-width: 400px) 400px, (max-width: 800px) 800px, (min-width: 1001px) 1200px"
      src={thailandOriginal}
      alt="Fishermen in Thailand"
      width="2512"
      height="1600"
    />
  );
}
