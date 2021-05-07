import "./Footer.css";
import Policy from "../Popup/Policy/Policy";
import { Link } from "react-router-dom";
import { Dialog, DialogContent, DialogTitle } from "@material-ui/core";
import { useEffect } from "react";
import { useRef } from "react";
import { useState } from "react";

function Footer() {
  // Открытие политики
  const [openPolicy, setOpenPolicy] = useState(false);
  const [scrollPolicy, setScrollPolicy] = useState('paper');

  const handleClickOpenPolicy = (scrollType) => () => {
    setOpenPolicy(true);
    setScrollPolicy(scrollType);
  };

  const handleClosePolicy = () => setOpenPolicy(false);

  const descriptionElementRef = useRef(null);
  useEffect(() => {
    if (openPolicy) {
      const { current: descriptionElement } = descriptionElementRef;
      if (descriptionElement !== null) {
        descriptionElement.focus();
      }
    }
  }, [openPolicy]);
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__navigation">
          <nav>
            <h3 className="footer__title">Продукты</h3>
            <ul className="list footer__list">
              <li>
                <Link to="/" className="link footer__link">
                  Eris - документы
                </Link>
              </li>
              <li>
                <Link to="/" className="link footer__link">
                  VOL - мессенджер
                </Link>
              </li>
              <li>
                <Link to="/" className="link footer__link">
                  Estraid - недвижимость
                </Link>
              </li>
            </ul>
          </nav>
          <nav>
            <h3 className="footer__title">Услуги</h3>
            <ul className="list footer__list">
              <li>
                <Link to="/" className="link footer__link">
                  Разработка
                </Link>
              </li>
              <li>
                <Link to="/" className="link footer__link">
                  Поддержка
                </Link>
              </li>
            </ul>
          </nav>
          <nav>
            <h3 className="footer__title">Контакты</h3>
            <ul className="list footer__list">
              <li>
                <Link to="/" className="link footer__link">
                  Клиентам
                </Link>
              </li>
              <li>
                <Link to="/" className="link footer__link">
                  Талантам
                </Link>
              </li>
            </ul>
          </nav>
          <nav>
            <h3 className="footer__title">Навигация</h3>
            <ul className="list footer__list">
              <li>
                <a href="/" className="link footer__link">
                  Почитать
                </a>
              </li>
              <li>
                <a href="/" className="link footer__link">
                  FAQ
                </a>
              </li>
            </ul>
          </nav>
        </div>
        <div className="">
          <div className="footer__politics">
            <div className="link footer__link" onClick={handleClickOpenPolicy("paper")}>
              Политика конфиденциальности
            </div>
            <Dialog
              open={openPolicy}
              onClose={handleClosePolicy}
              scroll={scrollPolicy}
              aria-labelledby="scroll-dialog-title"
              aria-describedby="scroll-dialog-description"
            >
              <DialogTitle id="scroll-dialog-title">Политика в отношении обработки персональных данных</DialogTitle>
              <DialogContent dividers={scrollPolicy === 'paper'}>
                <Policy/>
              </DialogContent>
              {/* <DialogActions>
                <Button onClick={handleClosePolicy} color="primary">
                  Ок
                </Button>
              </DialogActions> */}
            </Dialog>
            <a href="/" className="link footer__link">
              Лицензионное соглашение
            </a>
          </div>
          <p className="footer__copyright">
            QEX © 2017-2021 Все права защищены
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
