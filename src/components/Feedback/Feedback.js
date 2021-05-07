import "./Feedback.css";
import bg from "../../images/feedback/bg.png";
import pdf from "../../images/feedback/pdf.png";
import { useEffect, useRef, useState } from "react";
import PhoneInput from "react-phone-input-2";
import { Button, Checkbox, Dialog, DialogActions, DialogContent, DialogTitle, FormControl, Grid, makeStyles, MenuItem, Select, Snackbar, TextField } from "@material-ui/core";
import { Add, LocalPhoneRounded, MailOutlineRounded, Telegram, WhatsApp } from "@material-ui/icons";
import MuiAlert from '@material-ui/lab/Alert';
import Policy from "../Popup/Policy/Policy";
import checked from "../../images/feedback/checked.svg";
import clsx from "clsx";

function Feedback() {
  const [state, setState] = useState({
    communication: 'call',
    phone: '',
    email: '',
    policy: false,
  });
  const [openError, setOpenError] = useState(false);
  const [openSuccess, setOpenSuccess] = useState(false);
  const [phone, setPhone] = useState("");

  const handleChange = (event) => setState({...state, [event.target.name]: event.target.value,});

  const handleCloseError = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpenError(false);
  };

  const handleCloseSuccess = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpenSuccess(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!phone & !state.email) {
      setOpenError(true);
    }
    if (phone || state.email) {
      setOpenSuccess(true);
    }
    console.log(state, phone);
  }

  const [openPolicy, setOpenPolicy] = useState(false);
  const [scrollPolicy, setScrollPolicy] = useState('paper');

  const useStyles = makeStyles((theme) => ({
    icon: {
      width: 10,
      height: 10,
      borderRadius: 2,
      boxSizing: 'border-box',
      border: '1px solid #b8b8b8',
      backgroundImage: 'linear-gradient(180deg,hsla(0,0%,100%,.8),hsla(0,0%,100%,0))',
    },
    checkedIcon: {
      border: '1px solid #3e7bfa',
      '&:before': {
        display: 'block',
        width: 10,
        height: 10,
        backgroundImage: `url(${checked})`,
        position: 'absolute',
        top: 8,
        content: '""',
      },
    },
  }));
  const classes = useStyles();

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
  console.log(state)
  console.log(state.policy)
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
        <FormControl
          component="form"
          variant="outlined"
          size="small"
          className="feedback__form"
          onSubmit={handleSubmit}
        >
          <div className="feedback__phone-block">
            <Select
              name="communication"
              defaultValue={state.communication}
              value={state.communication}
              onChange={handleChange}
              className="feedback__select"
            >
              <MenuItem value="call">
                <LocalPhoneRounded className="feedback__select-image"/>
                Звонок
              </MenuItem>
              <MenuItem value="whatsapp">
                <WhatsApp className="feedback__select-image"/>
                WhatsApp
              </MenuItem>
              <MenuItem value="telegram">
                <Telegram className="feedback__select-image"/>
                Telegram
              </MenuItem>
              <MenuItem value="email">
                <MailOutlineRounded className="feedback__select-image"/>
                Email
              </MenuItem>
            </Select>
            {state.communication === "email" ? (
              <TextField
                name="email"
                type="email"
                variant="outlined"
                size="small"
                placeholder="email@mail.com"
                value={state.email}
                onChange={handleChange}
                className="feedback__input-email"
              />
            ) : (
              <PhoneInput
                country={"ru"}
                className="input popup__input popup__input_feedback"
                value={phone}
                onChange={setPhone}
                containerClass={"feedback__input-phone-block"}
                inputClass={"input feedback__input-phone"}
                buttonClass={"feedback__button-phone"}
                inputProps={{
                  required: true,
                  name: "phone",
                }}
              />
            )}
          </div>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            className="feedback__submit-site"
            // disabled={`${Boolean(phone) || Boolean(state.email)}`}
          >
            Обсудить проект
          </Button>
          <Grid
            container
            direction="row"
            justify="flex-start"
            alignItems="center"
          >
            <label className="feedback__label">
              <Checkbox 
                // required
                name="policy"
                size="small"
                color="primary"
                checkedIcon={<span className={clsx(classes.icon, classes.checkedIcon)} />}
                icon={<span className={classes.icon} />}
              />
              Я согласен с
            </label>
            <div
              className="feedback__label-politics"
              onClick={handleClickOpenPolicy("paper")}
            >
              политикой обработки данных
            </div>          
          </Grid>
          <Button
            className="feedback__file"
            startIcon={<Add />}
          >
            Оставлю еще данных за чек-лист "Свое решение или готовое?"
            <img src={pdf} alt="pdf"/>
          </Button>

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
            <DialogActions>
              <Button onClick={handleClosePolicy} color="primary">
                Ок
              </Button>
            </DialogActions>
          </Dialog>
          <Snackbar anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'right',
            }} open={openError} autoHideDuration={3000} onClose={handleCloseError}>
            <MuiAlert elevation={6} variant="filled" severity="error" onClose={handleCloseError}>
              Вы не указали номер телефона или эл. почту!
            </MuiAlert>
          </Snackbar>
          <Snackbar anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'right',
            }} open={openSuccess} autoHideDuration={3000} onClose={handleCloseSuccess}>
            <MuiAlert elevation={6} variant="filled" severity="success" onClose={handleCloseSuccess}>
              Заявка уже в нашей CRM, мы скоро с вами свяжемся :)
            </MuiAlert>
          </Snackbar>
        </FormControl>
        {/* <form className="feedback__form" onSubmit={handleSubmit}>
          <div className="feedback__form-block">
            <select
              value={feedbackValue}
              onChange={handleChangeFeedBack}
              className="input feedback__select feedback__select"
            >
              <option
                value="call"
                style={{ backgroundImage: `url(${phone})` }}
              >
                Звонок
              </option>
              <option value="whatsapp">Whatsapp</option>
              <option value="telegram">Telegram</option>
              <option value="email">
                Email
              </option>
            </select>
            {feedbackValue === "email" ? (
              <input
                type="email"
                placeholder="emal@email.com"
                className="input feedback__input"
              />
            ) : (
              <PhoneInput
                country={"ru"}
                value={phone}
                onChange={setPhone}
                containerClass={"feedback__input-phone-block"}
                buttonClass={"feedback__button-phone"}
                inputClass={"input feedback__input-phone"}
              />
            )}
          </div>
          <label className="feedback__label">
            <input type="checkbox" className="feedback__checkbox" />
            <span className="feedback__checkbox-true"></span>Я согласен с
            <Link to="/" className="feedback__label-politics">
              политикой обработки данных
            </Link>
          </label>
          <label className="feedback__file-block">
            <input type="file" className="feedback__file" accept="application/pdf"/>
            <img src={plus} alt="Добавить" />
            Оставлю еще данных за чек-лист "Свое решение или готовое?"
            <img src={pdf} alt="Решение" />
          </label>
          <button type="submit" className="button feedback__submit">
            Обсудить проект
          </button>
        </form> */}
      </div>
    </section>
  );
}

export default Feedback;
