import vid33 from "../../assets/feed/33.mp4";

export default function feed33() {
  return (
    <video width="1920" height="1080" autoPlay playsInline muted loop preload="auto">
      <source src={vid33} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  );
}
