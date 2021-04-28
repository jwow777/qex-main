import "./Footer.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__navigation">
          <nav>
            <h3 className="footer__title">Продукты</h3>
            <ul className="list footer__list">
              <li>
                <Link to="/" className="link footer__link">
                  Eris - документы
                </Link>
              </li>
              <li>
                <Link to="/" className="link footer__link">
                  VOL - мессенджер
                </Link>
              </li>
              <li>
                <Link to="/" className="link footer__link">
                  Estraid - недвижимость
                </Link>
              </li>
            </ul>
          </nav>
          <nav>
            <h3 className="footer__title">Услуги</h3>
            <ul className="list footer__list">
              <li>
                <Link to="/" className="link footer__link">
                  Разработка
                </Link>
              </li>
              <li>
                <Link to="/" className="link footer__link">
                  Поддержка
                </Link>
              </li>
            </ul>
          </nav>
          <nav>
            <h3 className="footer__title">Контакты</h3>
            <ul className="list footer__list">
              <li>
                <Link to="/" className="link footer__link">
                  Клиентам
                </Link>
              </li>
              <li>
                <Link to="/" className="link footer__link">
                  Талантам
                </Link>
              </li>
            </ul>
          </nav>
          <nav>
            <h3 className="footer__title">Навигация</h3>
            <ul className="list footer__list">
              <li>
                <a href="/" className="link footer__link">
                  Почитать
                </a>
              </li>
              <li>
                <a href="/" className="link footer__link">
                  FAQ
                </a>
              </li>
            </ul>
          </nav>
        </div>
        <div className="">
          <div className="footer__politics">
            <a href="/" className="link footer__link">
              Политика конфиденциальности
            </a>
            <a href="/" className="link footer__link">
              Лицензионное соглашение
            </a>
          </div>
          <p className="footer__copyright">
            QEX © 2017-2021 Все права защищены
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
