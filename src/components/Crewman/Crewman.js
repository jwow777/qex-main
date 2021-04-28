import "./Crewman.css";

function Crewman({data}) {
  const { name, position, quote } = data;
  return (
    <li className="crewman">
      <h3 className="crewman__name">{name}</h3>
      <p className="crewman__position">{position}</p>
      <blockquote className="crewman__quote">{quote}</blockquote>
    </li>
  );
}

export default Crewman;