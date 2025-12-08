import vid4 from "../../assets/feed/4.webm";

export default function feed4() {
  return (
    <video width="1920" height="1080" autoPlay muted loop>
      <source src={vid4} type="video/webm" />
      Your browser does not support the video tag.
    </video>
  );
}
