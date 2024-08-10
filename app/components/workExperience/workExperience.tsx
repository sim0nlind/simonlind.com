export default function WorkExperience(props: {
  title: string;
  description: string;
}) {
  return (
    <div>
      <h1>{props.title}</h1>
      <p>{props.description}</p>
    </div>
  );
}
