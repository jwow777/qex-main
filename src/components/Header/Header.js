import "./Header.css";
import background from "../../images/header/bg.png";
import logo from "../../images/header/logo.png";

import ru from "../../images/flags/ru.png";
import us from "../../images/flags/us.png";
import de from "../../images/flags/de.png";
import es from "../../images/flags/es.png";
import fr from "../../images/flags/fr.png";
import it from "../../images/flags/it.png";
import ch from "../../images/flags/ch.png";

import profile from "../../images/header/profile.png";
import test from "../../images/header/test.png";
import MenuHeader from "../MenuHeader/MenuHeader";
import { Link } from "react-router-dom";
import { useState } from "react";
import { Avatar, MenuItem, MenuList, Popover } from "@material-ui/core";

function Header({ onFeedback, onTest }) {
  const [language, setLanguage] = useState(ru);
  const [anchorEl, setAnchorEl] = useState(null);
  const [anchorElLang, setAnchorElLang] = useState(null);
  const open = Boolean(anchorEl);
  const openLang = Boolean(anchorElLang);
  const handleMenu = (event) => setAnchorEl(event.currentTarget);
  const handleMenuLang = (event) => setAnchorElLang(event.currentTarget);
  const handleClose = () =>  setAnchorEl(null);
  const handleCloseLang = (e) =>  {
    setLanguage(e.target.lang || language);
    setAnchorElLang(null);
  };
  return (
    <header
      className="header"
      style={{ backgroundImage: `url(${background})` }}
    >
      <div className="header__container">
        <div className="header__content header__content_top">
          <Link to="/">
            <img src={logo} alt="QEX" />
          </Link>
          <MenuHeader/>
          <div className="header__block">
            <a href="tel:+74954899696" className="link header__phone">
              +7 (495) 489-96-96
            </a>
            <button
              className="button header__button_request"
              onClick={onFeedback}
            >
              Оставить заявку
            </button>
            <img src={language} alt="language" className="header__lang-current" onClick={handleMenuLang}/>
            <Popover
              anchorEl={anchorElLang}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'right',
              }}
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={openLang}
              onClose={handleCloseLang}
            >
              <MenuList>
                <MenuItem onClick={handleCloseLang} lang={ru}>
                  <img src={ru} alt="Русский" className="header__lang-image"/>
                  Русский
                </MenuItem>
                <MenuItem onClick={handleCloseLang} lang={us}>
                  <img src={us} alt="English" className="header__lang-image"/>
                  English
                </MenuItem>
                <MenuItem onClick={handleCloseLang} lang={de}>
                  <img src={de} alt="Deutsch" className="header__lang-image"/>
                  Deutsch
                </MenuItem>
                <MenuItem onClick={handleCloseLang} lang={es}>
                  <img src={es} alt="Español" className="header__lang-image"/>
                  Español
                </MenuItem>
                <MenuItem onClick={handleCloseLang} lang={fr}>
                  <img src={fr} alt="Français" className="header__lang-image"/>
                  Français
                </MenuItem>
                <MenuItem onClick={handleCloseLang} lang={it}>
                  <img src={it} alt="Italiano" className="header__lang-image"/>
                  Italiano
                </MenuItem>
                <MenuItem onClick={handleCloseLang} lang={ch}>
                  <img src={ch} alt="中文" className="header__lang-image"/>
                  中文
                </MenuItem>
              </MenuList>
            </Popover>
            <Avatar alt="Профиль" src={profile} onClick={handleMenu}/>
            {/* <img src={profile} alt="flag" className="header__image" onClick={handleMenu}/> */}
            <Popover
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'right',
              }}
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={open}
              onClose={handleClose}
            >
              <MenuList>
                <MenuItem onClick={handleClose}>Профиль</MenuItem>
                <MenuItem onClick={handleClose}>Выйти</MenuItem>
              </MenuList>
            </Popover>
          </div>
        </div>
        <div className="header__content header__content_middle">
          <h1 className="header__title">
            Разработка готовых решений автоматизации
          </h1>
          <h2 className="header__subtitle">
            Разрабатываем и внедряем софт для автоматизации бизнес-процессов
          </h2>
          <button className="button header__button_test" onClick={onTest}>
            Какой софт вам нужен? <img src={test} alt="тест"/> Тест
          </button>
        </div>
      </div>
      <ul className="list header__list">
        <li className="header__item">
          Всегда удобный <span className="header__important">интерфейс</span>
        </li>
        <li className="header__item">
          Ваша команда cможет <span className="header__important">больше</span>
        </li>
        <li className="header__item">
          Погружаемся в{" "}
          <span className="header__important">бизнес-процессы</span>
        </li>
      </ul>
    </header>
  );
}

export default Header;
