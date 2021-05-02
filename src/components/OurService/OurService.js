function OurService({item, isOpenPopup, onCardClick}) {
  const {
    title,
    subtitle,
    bgColor,
    textColor,
    icon,
    alpha,
    colorAlpha
  } = item;

  const handleClick = () => isOpenPopup(item);

  return (
    <li
      className="ready-services__item"
      style={{ background: bgColor, color: textColor }}
      onClick={handleClick}
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
    </li>
  );
}

export default OurService;
