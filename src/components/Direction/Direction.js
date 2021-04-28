import "./Direction.css";
import clock from "../../images/icons/clock.svg";
import price from "../../images/icons/price.png";

function Direction({ data }) {

  return (
    <li className="direction">
      <img src={data.image} alt={data.title} className="direction__image" />
      <h4 className="direction__title">{data.title}</h4>
      <p className="direction__text">{data.description}</p>
      <div className="direction__block">
        <span className="direction__block-text">
          От {data.time} <img src={clock} alt="time" />
        </span>
        <span className="direction__block-text">
          От {data.price} <img src={price} alt="price" />
        </span>
      </div>
    </li>
  );
}

export default Direction;
