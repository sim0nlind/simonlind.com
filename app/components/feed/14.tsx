import vid14 from "../../assets/feed/14.mp4";

export default function feed14() {
  return (
    <video width="1280" height="720" autoPlay playsInline muted loop preload="auto" style={{ border: '0.5px solid rgba(0, 0, 0, 0.08)' }}>
      <source src={vid14} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  );
}


