import Popup from "../Popup/Popup";

function ReadyServicesPopup({isOpen, onClose}) {
  if (isOpen) {
    const {
      title,
      subtitle,
      bgColor,
      textColor,
      icon,
      alpha,
      colorAlpha
    } = isOpen;

    return (
      <Popup isOpen={isOpen} onClose={onClose}>
        <div
          className="ready-services__item"
          style={{ background: bgColor, color: textColor }}
        >
          <img
            src={icon}
            alt={title}
            className="ready-services__item-image"
          />
          <h3 className="ready-services__item-title">{title}</h3>
          <p className="ready-services__item-about">{subtitle}</p>
          {alpha && (
            <div className="ready-services__alpha-block">
              <span style={{ color: colorAlpha }}>alpha</span>
            </div>
          )}
        </div>
      </Popup>
    );
  }
}

export default ReadyServicesPopup;
