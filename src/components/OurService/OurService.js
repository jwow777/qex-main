import "./OurService.css"

function OurService({ item, isOpenPopup, styles }) {
  const { title, subtitle, bgColor, textColor, icon, alpha, colorAlpha, clock } = item;

  const handleClick = () => isOpenPopup(item);

  return (
    <li
      className={`our-service${styles ? ` our-service_${styles}` : ""}`}
      style={{ background: bgColor, color: textColor }}
      onClick={handleClick}
    >
      <img src={icon} alt={title} className="our-service__image" />
      <h3 className="our-service__title">{title}</h3>
      <p className="our-service__about">{subtitle}</p>
      {alpha && (
        <div className="our-service__alpha-block">
          <img src={clock} alt="Иконка"/>
          <span style={{ color: colorAlpha }}>alpha</span>
        </div>
      )}
    </li>
  );
}

export default OurService;
