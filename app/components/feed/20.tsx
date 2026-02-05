import vid20 from "../../assets/feed/20.mp4";

export default function feed20() {
  return (
    <video width="1918" height="1080" autoPlay playsInline muted loop preload="auto" style={{ border: '0.5px solid rgba(0, 0, 0, 0.08)' }}>
      <source src={vid20} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  );
}
