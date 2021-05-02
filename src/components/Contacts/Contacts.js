import "./Contacts.css";
import { Loader } from "@googlemaps/js-api-loader";
import qex from "../../images/icons/qex.png";

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
            <div className="map__info"></div>
          </li>
          <li className="contacts__item">
            <div id="map-ny" className="map"></div>
            <div className="map__info"></div>
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
