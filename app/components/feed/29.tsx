import vid29 from "../../assets/feed/29.mp4";

export default function feed29() {
  return (
    <video width="1920" height="1080" autoPlay playsInline muted loop preload="auto" style={{ border: '0.5px solid rgba(0, 0, 0, 0.08)' }}>
      <source src={vid29} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  );
}
