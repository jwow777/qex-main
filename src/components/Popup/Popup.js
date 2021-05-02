import "./Popup.css";

function Popup({ children, isOpen, onClose }) {
  return (
    <div className={`popup${isOpen ? " popup_opened" : ""}`}>
      <div className="popup__container">
        <button type="button" className="button popup__close" onClick={onClose}>
          X
        </button>
        {children}
      </div>
    </div>
  );
}

export default Popup;
