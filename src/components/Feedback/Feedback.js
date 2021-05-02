import "./Feedback.css";
import bg from "../../images/feedback/bg.png";
import pdf from "../../images/feedback/pdf.png";

function Feedback() {
  function handleSubmit(e) {
    e.preventDefault();
  }
  return (
    <section className="feedback">
      <div className="feedback__container">
        <div
          className="feedback__image"
          style={{ backgroundImage: `url(${bg})` }}
        ></div>
        <h2 className="feedback__title">
          Проведем аналитику и предложим решение, которое поможет вашим
          процессам стать лучше
        </h2>
        <h3 className="feedback__subtitle">Мы знаем, как</h3>
        <form className="feedback__form" onSubmit={handleSubmit}>
          <input
            type="tel"
            placeholder="(987) 654-32-00"
            className="feedback__input"
          />
          <label className="feedback__label">
            <input type="checkbox" className="feedback__checkbox" /> Я согласен
            с политикой обработки данных
          </label>
          <button type="file" className="button feedback__button">
            Оставлю еще данных за чек-лист ”Свое решение или готовое?”{" "}
            <img src={pdf} alt="Решение" />
          </button>
          <button type="submit" className="button feedback__submit">
            Обсудить проект
          </button>
        </form>
      </div>
    </section>
  );
}

export default Feedback;
