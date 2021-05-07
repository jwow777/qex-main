import { Link } from "react-router-dom";
import OurService from "../../OurService/OurService";
import Popup from "../Popup";

function ReadyServicesPopup({ isOpen, onClose }) {
  return (
    <Popup isOpen={isOpen} onClose={onClose} box="ready-services">
      {isOpen ? (
        <>
          <OurService item={isOpen} styles="popup"/>
          <ol>
            <li>Зачем</li>
            <li>Все шелка</li>
            <li>Цветные облака</li>
          </ol>
          <Link to="/" className="ready-services__button">
            На сайт продукта
          </Link>
        </>
      ) : (
        ""
      )}
    </Popup>
  );
}

export default ReadyServicesPopup;
