import "./Services.css";
import direction from "../../utils/direction";
import Direction from "../Direction/Direction";
import stage from "../../utils/stage";
import Stage from "../Stage/Stage";
import { Link } from "react-router-dom";
import Arrow from "../Arrow/Arrow";

function Services() {
  return (
    <section className="services">
      <div className="services__container">
        <h2 className="title services__title">Услуги</h2>
        <div>
          <h3 className="subtitle services__subtitle">Направления:</h3>
          <ul className="list services__list services__list_direction">
            {direction.map((item, index) => (
              <Direction data={item} key={index} />
            ))}
          </ul>
        </div>
        <div>
          <h3 className="subtitle services__subtitle">Этапы:</h3>
          <ul className="list services__list services__list_stage">
            {stage.map((item, index) => (
              <Stage data={item} key={index} />
            ))}
          </ul>
        </div>
        <Link to="/" className="link link_navigation">
          К услугам <Arrow/>
        </Link>
      </div>
    </section>
  );
}

export default Services;
