import "./PopupCase.css";
import Popup from "../Popup/Popup";
import image from "../../images/cases/image.png";
import circle from "../../images/cases/circle.svg";
import { Button } from "@material-ui/core";

function PopupCase({ open, close, data, onDetailsCase }) {
  return (
    <Popup
      open={open}
      close={close}
      classContainer="case"
    >
      <div className="popup__case-block">
        <img src={image} alt="ERP" className="popup__case-image"/>
        <div className="popup__case-block-title">
          <h2 className="popup__case-title">Разработали ERP</h2>
          <p className="popup__case-text popup__case-text_bold">+500% к скорости обработки заявок</p>
          <div className="popup__case-block-text">
            <p className="popup__case-text popup__case-text_bold">Задача:</p>
            <span className="popup__case-text popup__case-text_bold">123</span>
          </div>
        </div>
        <Button
          variant="outlined"
          className="popup__case-button"
          onClick={onDetailsCase}
        >
          <img src={circle} alt="Детали"/>
          Почему не раскрываем все детали кейсов?
        </Button>
      </div>
      <div className="popup__case-subtitle-block">
        <h3 className="popup__case-subtitle">Описание:</h3>
        <p className="popup__case-text">Что сделали</p>
      </div>
      <div className="popup__case-subtitle-block">
        <h3 className="popup__case-subtitle">Результат:</h3>
        <p className="popup__case-text">Что получили</p>
      </div>
    </Popup>
  );
}

export default PopupCase;
