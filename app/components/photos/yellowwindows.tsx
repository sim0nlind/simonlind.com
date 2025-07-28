import yellowwindows400 from "../../assets/photos/yellowwindows-400w.webp";
import yellowwindows800 from "../../assets/photos/yellowwindows-800w.webp";
import yellowwindows1200 from "../../assets/photos/yellowwindows-1200w.webp";
import yellowwindowsOriginal from "../../assets/photos/yellowwindows.jpg";

export default function yellowwindows() {
  return (
    <img
      srcSet={`${yellowwindows400} 400w, ${yellowwindows800} 800w, ${yellowwindows1200} 1200w`}
      sizes="(max-width: 400px) 400px, (max-width: 800px) 800px, (min-width: 1001px) 1200px"
      src={yellowwindowsOriginal}
      alt="yellowwindows in Berlin"
      width="4000"
      height="6000"
    />
  );
}
