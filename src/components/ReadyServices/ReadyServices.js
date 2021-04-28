import "./ReadyServices.css";
import document from "../../images/icons/document.svg";
import calendar from "../../images/icons/calendar.svg";
import messanger from "../../images/icons/messanger.svg";
import base from "../../images/icons/base.svg";
import cloud from "../../images/icons/cloud.svg";
import task from "../../images/icons/task.svg";
import ats from "../../images/icons/ats.svg";
import { Link } from "react-router-dom";

function Services() {
  return (
    <section className="ready-services">
      <div className="ready-services__container">
        <h2 className="title ready-services__title">Наши готовые сервисы</h2>
        <p className="ready-services__subtitle">
          Топовые решения
          <span className="ready-services__subtitle ready-services__subtitle_light">
            Одна из самых сильных команд на рынке в области разработки готовых
            решений.
          </span>
        </p>
        <ul className="list ready-services__list">
          <li className="ready-services__item">
            <img
              src={document}
              alt="Документы"
              className="ready-services__item-image"
            />
            <h3 className="ready-services__item-title">Eris</h3>
            <p className="ready-services__item-about">Документы</p>
          </li>
          <li className="ready-services__item">
            <img
              src={calendar}
              alt="Календарь"
              className="ready-services__item-image"
            />
            <h3 className="ready-services__item-title">Bbook</h3>
            <p className="ready-services__item-about">Автоматизация записи</p>
          </li>
          <li className="ready-services__item">
            <img
              src={messanger}
              alt="Мессенджер"
              className="ready-services__item-image"
            />
            <h3 className="ready-services__item-title">VOL</h3>
            <p className="ready-services__item-about">
              Корпоративный мессенджер
            </p>
          </li>
          <li className="ready-services__item">
            <img
              src={base}
              alt="База"
              className="ready-services__item-image ready-services__item-image_column"
            />
            <h3 className="ready-services__item-title">Estraid</h3>
            <p className="ready-services__item-about">
              База объектов недвижимости
            </p>
          </li>
          <li className="ready-services__item">
            <img
              src={cloud}
              alt="Облако"
              className="ready-services__item-image"
            />
            <h3 className="ready-services__item-title">Tolp</h3>
            <p className="ready-services__item-about">Облачное хранилище</p>
          </li>
          <li className="ready-services__item">
            <img
              src={task}
              alt="Таскер"
              className="ready-services__item-image"
            />
            <h3 className="ready-services__item-title">Tamer</h3>
            <p className="ready-services__item-about">Таскер</p>
          </li>
          <li className="ready-services__item">
            <img src={ats} alt="АТС" className="ready-services__item-image" />
            <h3 className="ready-services__item-title">Rite</h3>
            <p className="ready-services__item-about">Международная АТС</p>
          </li>
          <li className="ready-services__item">
            <Link to="/" className="link ready-services__link">
              Смотреть все
            </Link>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Services;
