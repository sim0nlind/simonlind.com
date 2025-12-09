import vid4 from "../../assets/feed/4.mp4";

export default function feed4() {
  return (
    <video width="1920" height="1080" autoPlay playsInline muted loop preload="auto">
      <source src={vid4} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  );
}
