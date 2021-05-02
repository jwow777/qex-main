import Popup from "../Popup/Popup";

function FeedbackPopup({isOpen, onClose}) {
  return (
    <Popup isOpen={isOpen} onClose={onClose}>
      <h2 className="popup__title">Обратная связь</h2>
      <form className="popup__form">
        <input
          type="tel"
          placeholder="(987) 654-32-00"
          className="input popup__input"
        />
        <input
          type="text"
          placeholder="Имя Фамилия"
          className="input popup__input"
        />
        <input
          type="text"
          placeholder="Компания"
          className="input popup__input"
        />
        <textarea placeholder="О задаче" className="popup__textarea" />
        <label className="popup__label">
          <input type="checkbox" className="popup__checkbox" />Я согласен с
          политикой обработки данных
        </label>
        <button type="submit" className="button popup__submit">
          Отправить
        </button>
      </form>
    </Popup>
  );
}

export default FeedbackPopup;
        