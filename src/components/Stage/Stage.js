import "./Stage.css";

function Stage({ data }) {
  return (
    <li className="stage">
      <img src={data.image} alt={data.title} className="stage__image" />
      <h4 className="stage__title">{data.title}</h4>
      <p className="stage__text">{data.description}</p>
    </li>
  );
}

export default Stage;
