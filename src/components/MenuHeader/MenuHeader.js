import "./MenuHeader.css";
import { Link } from "react-router-dom";

function Menu() {
  return (
    <nav>
      <ul className="list menu__list">
        <li>
          <Link to="/" className="link menu__link">
            Услуги
          </Link>
        </li>
        <li>
          <Link to="/" className="link menu__link">
            Почитать
          </Link>
        </li>
        <li>
          <Link to="/" className="link menu__link">
            Кейсы
          </Link>
        </li>
        <li>
          <Link to="/" className="link menu__link">
            Контакты
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Menu;
