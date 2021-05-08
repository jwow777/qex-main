import "./PopupReadyServices.css";
import { Link } from "react-router-dom";
import OurService from "../OurService/OurService";
import Popup from "../Popup/Popup";

function PopupReadyServices({ open, close, data }) {
  return (
    <Popup
      open={open}
      close={close}
      classContainer="ready-services"
    >
      <OurService item={data} styles="popup"/>
      <ol>
        <li>Зачем</li>
        <li>Все шелка</li>
        <li>Цветные облака</li>
      </ol>
      <Link to="/" className="ready-services__button">
        На сайт продукта
      </Link>
    </Popup>
  );
}

export default PopupReadyServices;
