import vid12 from "../../assets/feed/12.mp4";

export default function feed12() {
  return (
    <video width="1920" height="1080" autoPlay playsInline muted loop preload="auto">
      <source src={vid12} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  );
}
