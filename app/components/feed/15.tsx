import vid15 from "../../assets/feed/15.mp4";

export default function feed15() {
  return (
    <video width="1440" height="810" autoPlay playsInline muted loop preload="auto" style={{ border: '0.5px solid rgba(0, 0, 0, 0.08)' }}>
      <source src={vid15} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  );
}
