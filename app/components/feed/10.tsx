import vid10 from "../../assets/feed/10.mp4";

export default function feed10() {
  return (
    <video width="1920" height="1080" autoPlay playsInline muted loop preload="auto">
      <source src={vid10} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  );
}
