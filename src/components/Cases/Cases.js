import "./Cases.css";
import cases from "../../utils/case";
import Case from "../Case/Case";
import { Link } from "react-router-dom";
import Arrow from "../Arrow/Arrow";

function Cases({ openPopup, dataCase }) {
  return (
    <section className="cases">
      <div className="cases__container">
        <h2 className="title cases__title">Кейсы</h2>
        <ul className="list cases__list">
          {cases.map((item, index) => <Case item={item} openPopup={openPopup} data={dataCase} key={index} />)}
        </ul>
        <Link to="/" className="link link_navigation">
          Ещё <Arrow/>
        </Link>
      </div>
    </section>
  );
}

export default Cases;
