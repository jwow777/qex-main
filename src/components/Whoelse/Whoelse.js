import "./Whoelse.css";

function WhoElse({data}) {
  const { position, description } = data
  return (
    <li className="whoelse">
      <h3 className="whoelse__position">{position}</h3>
      <p className="whoelse__description">{description}</p>
    </li>
  );
}

export default WhoElse;