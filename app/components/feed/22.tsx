import vid22 from "../../assets/feed/22.mp4";

export default function feed22() {
  return (
    <video width="1800" height="1012" autoPlay playsInline muted loop preload="auto" style={{ border: '0.5px solid rgba(0, 0, 0, 0.08)' }}>
      <source src={vid22} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  );
}
