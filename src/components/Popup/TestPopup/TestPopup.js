import "./TestPopup.css";
import Popup from "../Popup";
import result from "../../../images/test/result.png";
import arrow from "../../../images/test/arrow-white.png";
import { useState } from "react";

function TestPopup({ isOpen, onClose }) {
  const [store, setStore] = useState({ range: "" });
  const [range, setRange] = useState(0);
  const [rangeValueName, setRangeValueName] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    setRange(100);
    setStore({ ...store, range: rangeValueName });
    setTimeout(() => {
      onClose();
      setRange(0);
    }, 1000);
  }

  function handleChangeRangeValue(e) {
    setRangeValueName(e.target.value);
  }

  function handleChangeValue(e) {
    setRangeValueName(e.target.value);
  }

  return (
    <Popup isOpen={isOpen} onClose={onClose} box="test">
      <h3 className="test__title">Какой софт вам нужен?</h3>
      <div className="test__range-block">
        <img src={result} alt="Результат" className="test__range-image" />
        <p className="test__range-result">
          Готово: <span className="test__range-result_percent">{range}%</span>
        </p>
        <p className="test__range-finish">тут результат</p>
      </div>
      <input
        type="range"
        className="test__range"
        value={range}
        onChange={handleChangeRangeValue}
        step="20"
      />
      <form onSubmit={handleSubmit} className="test__form">
        <h4 className="test__title test__form-title">Кто вы в компании?</h4>
        <div className="test__form-block" onChange={handleChangeValue}>
          <input
            type="radio"
            id="leader-position"
            className="test__radio"
            name="position"
            value="leader"
          />
          <label htmlFor="leader-position" className="test__label">
            Топ-менеджер \ Руководитель \ Собственник
          </label>
          <input
            type="radio"
            id="other-position"
            className="test__radio"
            name="position"
            value="other"
          />
          <label htmlFor="other-position" className="test__label">
            Иная должность
          </label>
          <input
            type="radio"
            id="freelance-position"
            className="test__radio"
            name="position"
            value="freelance"
          />
          <label htmlFor="freelance-position" className="test__label">
            Внештатный человек
          </label>
        </div>
        <button type="submit" className="button test__submit">
          Далее
          <img src={arrow} alt="Далее"/>
        </button>
      </form>
    </Popup>
  );
}

export default TestPopup;
