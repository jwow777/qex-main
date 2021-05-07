import { Link } from "react-router-dom";
import review from "../../utils/review";
import Arrow from "../Arrow/Arrow";
import Reviewer from "../Reviewer/Reviewer";
import "./AboutUs.css";

function AboutUs() {
  return (
    <section className="aboutus">
      <div className="aboutus__container">
        <h2 className="title aboutus__title">О нас говорят</h2>
        <ul className="list aboutus__list">
          {review.map((item, index) => (
            <Reviewer data={item} key={index} />
          ))}
        </ul>
        <Link to="/" className="link link_navigation">
          Еще отзывы <Arrow down={true}/>
        </Link>
      </div>
    </section>
  );
}

export default AboutUs;
