import "./Popup.css";
import plus from "../../images/icons/plus.svg";

function Popup({ children, isOpen, onClose, box }) {
  return (
    <div className={`popup${isOpen ? " popup_opened" : ""}`}>
      <div
        className={`popup__container${box ? ` popup__container_${box}` : ""}`}
      >
        <button type="button" className="button popup__close" onClick={onClose}>
          <img src={plus} alt="Закрыть" />
        </button>
        {children}
      </div>
    </div>
  );
}

export default Popup;
