import "./CasePopup.css";
import Popup from "../Popup";
import image from "../../../images/cases/image.png";
import circle from "../../../images/cases/circle.png";

function CasePopup({ isOpen, onClose, onDetailsCase }) {
  return (
    <Popup isOpen={isOpen} onClose={onClose} box="case">
      {isOpen ? (
        <>
          <div className="case-popup__block">
            <img src={image} alt="ERP" className="case-popup__image"/>
            <div className="case-popup__block-title">
              <h2 className="case-popup__title">Разработали ERP</h2>
              <p className="case-popup__text case-popup__text_bold">+500% к скорости обработки заявок</p>
              <div className="case-popup__block-text">
                <p className="case-popup__text case-popup__text_bold">Задача:</p>
                <span className="case-popup__text case-popup__text_bold">123</span>
              </div>
            </div>
            <button className="button case-popup__button" onClick={onDetailsCase}>
              <img src={circle} alt="ERP"/>
              <span>Почему не раскрываем все детали кейсов?</span>
            </button>
          </div>
          <div>
            <h3 className="case-popup__subtitle">Описание: </h3>
            <p className="case-popup__text">Что сделали</p>
          </div>
          <div>
            <h3 className="case-popup__subtitle">Результат: </h3>
            <p className="case-popup__text">Что получили</p>
          </div>
        </>
      ) : (
        ""
      )}
    </Popup>
  );
}

export default CasePopup;
