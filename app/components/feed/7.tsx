import vid7 from "../../assets/feed/7.mp4";

export default function feed7() {
  return (
    <video width="2000" height="1126" autoPlay playsInline muted loop preload="auto">
      <source src={vid7} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  );
}
