import "./Case.css";
import image from "../../images/cases/image.png";

function Case({ data }) {
  const { text } = data;
  return (
    <li className="case">
      <ul className="list case__list">
        <li>Производство</li>
        <li>Продажи</li>
        <li>Eris</li>
      </ul>
      <img src={image} alt="" className="case__image" />
      <p className="case__text">{text}</p>
    </li>
  );
}

export default Case;
