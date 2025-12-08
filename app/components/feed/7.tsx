import vid7 from "../../assets/feed/7.mp4";

export default function feed7() {
  return (
    <video width="1920" height="1080" autoPlay muted loop>
      <source src={vid7} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  );
}
