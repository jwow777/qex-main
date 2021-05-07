import "./Contacts.css";
import { Loader } from "@googlemaps/js-api-loader";
import qex from "../../images/icons/qex.png";
import metro from "../../images/contacts/metro.png";
import location from "../../images/contacts/location.svg";
import phone from "../../images/contacts/phone.png";
import letter from "../../images/contacts/letter.png";
import whatsapp from "../../images/contacts/whatsapp.png";
import facebook from "../../images/contacts/facebook.png";
import instagram from "../../images/contacts/instagram.png";
import telegram from "../../images/contacts/telegram.png";
import youtube from "../../images/contacts/youtube.png";
import ru from "../../images/flags/ru.png";
import us from "../../images/flags/us.png";

function Contacts() {
  const additionalOptions = {};
  const locationMoscow = { lat: 55.7693292, lng: 37.5887687 };
  const locationNY = { lat: 40.7649313, lng: -73.9812675 };

  const loader = new Loader({
    apiKey: "AIzaSyBKvFXo_onKAN-z8X7NsHGLv1yC0XSLIDI",
    version: "weekly",
    ...additionalOptions
  });

  function map(location, id, style) {
    const map = new window.google.maps.Map(document.getElementById(`${id}`), {
      zoom: 13,
      center: location,
      disableDefaultUI: true,
      mapId: style
    });
    new window.google.maps.Marker({
      position: location,
      map,
      icon: qex
    });
  }

  loader.load().then(() => {
    map(locationMoscow, "map-moscow");
    map(locationNY, "map-ny");
  });

  return (
    <section className="contacts">
      <div className="contacts__container">
        <h2 className="title contacts__title">Контакты</h2>
        <ul className="list contacts__list">
          <li className="contacts__item">
            <div id="map-moscow" className="map"></div>
            <div className="map__info">
              <h3 className="contacts__map-title contacts__map-title_ru">
                <img src={ru} alt="Россия" className="contacts__map-image"/>Россия, Москва
              </h3>
              <ul className="list contacts__map-list">
                <li className="contacts__map-text contacts__map-text_bold">
                  <img src={metro} alt="Станция метро" />
                  <span>Маяковская</span>
                </li>
                <li className="contacts__map-text">
                  <img src={location} alt="Location" />
                  <span>Ул. Гашека, 14, 123056, эт. 2</span>
                </li>
                <li className="contacts__map-text">
                  <img src={phone} alt="Phone" />
                  <span>+7 (495) 489-96-96</span>
                </li>
                <li className="contacts__map-text">
                  <img src={letter} alt="Email" />
                  <span>hello@qexsystems.ru</span>
                </li>
                <li className="contacts__map-text">
                  <img src={whatsapp} alt="WhatsApp" />
                  <span>+7 (977) 000-00-00</span>
                </li>
              </ul>
              <ul className="list contacts__social-list">
                <li>
                  <img src={instagram} alt="Instagram" />
                </li>
                <li>
                  <img src={facebook} alt="Facebook" />
                </li>
                <li>
                  <img src={youtube} alt="Youtube" />
                </li>
                <li>
                  <img src={telegram} alt="Telegram" />
                </li>
              </ul>
            </div>
          </li>
          <li className="contacts__item contacts__gray">
            <div id="map-ny" className="map"></div>
            <div className="map__info">
              <h3 className="contacts__map-title contacts__map-title_us">
              <img src={us} alt="USA" className="contacts__map-image"/>USA, New York
              </h3>
              <ul className="list contacts__map-list">
                <li className="contacts__map-text contacts__map-text_main">
                  <div className="contacts__circle-block">
                    <span className="contacts__circle">C</span>
                    <span className="contacts__circle">E</span>
                  </div>
                  <span>50th st subway station</span>
                </li>
                <li className="contacts__map-text">
                  <img src={location} alt="Location" />
                  <span>142 W 57th St, NY 10019</span>
                </li>
                <li className="contacts__map-text">
                  <img src={phone} alt="Phone" />
                  <span>+1 212 974-25-00</span>
                </li>
                <li className="contacts__map-text">
                  <img src={letter} alt="Email" />
                  <span>hey@qexsystems.ru</span>
                </li>
                <li className="contacts__map-text">
                  <img src={whatsapp} alt="WhatsApp" />
                  <span>+7 (977) 000-00-00</span>
                </li>
              </ul>
              <ul className="list contacts__social-list">
                <li>
                  <img src={instagram} alt="Instagram" />
                </li>
                <li>
                  <img src={facebook} alt="Facebook" />
                </li>
                <li>
                  <img src={youtube} alt="Youtube" />
                </li>
                <li>
                  <img src={telegram} alt="Telegram" />
                </li>
              </ul>
            </div>
            <div className="map__soon">
              <span>Скоро открытие</span>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Contacts;
