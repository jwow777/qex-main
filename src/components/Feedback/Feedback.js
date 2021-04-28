import "./Feedback.css";

function Feedback() {
  function handleSubmit(e) {
    e.preventDefault();
  }
  return (
    <section className="feedback">
      <h2 className="feedback__title">Проведем аналитику и предложим решение, которое поможет вашим процессам стать лучше</h2>
      <h3 className="feedback__subtitle">Мы знаем, как</h3>
      <form className="feedback__form" onSubmit={handleSubmit}>
        <input type="tel" placeholder="(987) 654-32-00" className="feedback__input"/>
        <label className="feedback__label"><input type="checkbox" className="feedback__checkbox"/> Я согласен с политикой обработки данных</label>
        <button type="submit" className="button feedback__button">Обсудить проект</button>
      </form>
    </section>
  );
}

export default Feedback;