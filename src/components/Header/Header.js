import "./Header.css";
import background from "../../images/header/bg.png";
import logo from "../../images/header/logo.png";
import flag from "../../images/header/flag.png";
import profile from "../../images/header/profile.png";
import Menu from "../Menu/Menu";

function Header({ onFeedback }) {
  return (
    <header
      className="header"
      style={{ backgroundImage: `url(${background})` }}
    >
      <div className="header__container">
        <div className="header__content header__content_top">
          <img src={logo} alt="QEX" />
          <Menu />
          <div className="header__block">
            <a href="tel:+74954899696" className="link header__phone">
              +7 (495) 489-96-96
            </a>
            <button
              className="button header__button_request"
              onClick={onFeedback}
            >
              Оставить заявку
            </button>
            <button className="button">
              <img src={flag} alt="flag" className="header__image" />
            </button>
            <button className="button header__button_profile">
              <img src={profile} alt="flag" className="header__image" />
            </button>
          </div>
        </div>
        <div className="header__content header__content_middle">
          <h1 className="header__title">
            Разработка готовых решений автоматизации
          </h1>
          <h2 className="header__subtitle">
            Разрабатываем и внедряем софт для автоматизации бизнес-процессов
          </h2>
          <button className="button header__button_test">
            Какой софт вам нужен? Тест
          </button>
        </div>
      </div>
      <ul className="list header__list">
        <li className="header__item">
          Всегда удобный <span className="header__important">интерфейс</span>
        </li>
        <li className="header__item">
          Ваша команда cможет <span className="header__important">больше</span>
        </li>
        <li className="header__item">
          Погружаемся в{" "}
          <span className="header__important">бизнес-процессы</span>
        </li>
      </ul>
    </header>
  );
}

export default Header;
