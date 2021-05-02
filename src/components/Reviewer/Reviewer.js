import "./Reviewer.css";
import letter from "../../images/aboutus/letter.png";

function Reviewer({ data }) {
  const { name, company, position, review, photo } = data;
  return (
    <li className="reviewer">
      <div className="reviewer__block">
        <img src={photo} alt={name} className="reviewer__photo" />
        <h3 className="reviewer__name">{name}</h3>
        {
          company.startsWith('/images/') 
          ? <img src={company} alt="" className="reviewer__company-image"/> 
          : <p className="reviewer__company-title">{company}</p>
        }
        <p className="reviewer__position">{position}</p>
      </div>
      <p className="reviewer__text">{review}</p>
      <div className="reviewer__document-block">
        <img
          src={letter}
          alt="Благодарственное письмо"
          className="reviewer__letter-image"
        />
        <span className="reviewer__letter-name">Благодарственное письмо</span>
      </div>
    </li>
  );
}

export default Reviewer;
