import slowshutter400 from "../../assets/photos/slowshutter-400w.webp";
import slowshutter800 from "../../assets/photos/slowshutter-800w.webp";
import slowshutter1200 from "../../assets/photos/slowshutter-1200w.webp";
import slowshutterOriginal from "../../assets/photos/slowshutter.jpg";

export default function slowshutter() {
  return (
    <img
      srcSet={`${slowshutter400} 400w, ${slowshutter800} 800w, ${slowshutter1200} 1200w`}
      sizes="(max-width: 400px) 400px, (max-width: 800px) 800px, (min-width: 1001px) 1200px"
      src={slowshutterOriginal}
      alt="slowshutter in Tokyo"
      width="2512"
      height="1600"
    />
  );
}
