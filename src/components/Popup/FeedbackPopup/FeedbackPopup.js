import './FeedbackPopup.css';
import { useEffect, useRef, useState } from "react";
import Popup from "../Popup";
import Policy from "../Policy/Policy";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/plain.css";
import checked from "../../../images/feedback/checked.svg";
import DateFnsUtils from '@date-io/date-fns';
import ru from "date-fns/locale/ru";
import { MuiPickersUtilsProvider, DatePicker, TimePicker } from '@material-ui/pickers';
import { Button, Checkbox, Dialog, DialogActions, DialogContent, DialogTitle, FormControl, Grid, InputAdornment, makeStyles, MenuItem, Select, TextField } from "@material-ui/core";
import { ArrowDropDown, Event, LocalPhoneRounded, MailOutlineRounded, Telegram, WhatsApp } from "@material-ui/icons";
import clsx from "clsx";

function FeedbackPopup({ isOpen, onClose, politics }) {
  // const [state, setState] = useState({});
  // const handleChange = (event) => {
  //   const name = event.target.name;
  //   setState({
  //     ...state,
  //     [name]: event.target.value,
  //   });
  // };

  const [phone, setPhone] = useState("");
  const [feedbackValue, setFeedbackValue] = useState("call");
  const handleChangeFeedBack = (event) => setFeedbackValue(event.target.value);

  const [selectedDate, setSelectedDate] = useState(new Date());
  const handleDateChange = (date) => setSelectedDate(date);

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


  const handleSubmit = (e) => e.preventDefault();

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
    <Popup isOpen={isOpen} onClose={onClose}>
      <h2 className="popup__title">Обратная связь</h2>
      <FormControl
        component="form"
        variant="outlined"
        size="small"
        className="popup__form"
        onSubmit={handleSubmit}
      >
        <div className="feedback__phone-block">
          <Select
            defaultValue={feedbackValue}
            value={feedbackValue}
            onChange={handleChangeFeedBack}
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
          {feedbackValue === "email" ? (
            <input
              type="email"
              placeholder="email@email.com"
              className="input feedback__input-email"
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
                required: true
              }}
            />
          )}
        </div>
        <TextField
          label="Имя"
          type="text"
          variant="outlined"
          size="small"
          className="feedback__input"
        />
        <TextField
          label="Компания"
          type="text"
          variant="outlined"
          size="small"
          className="feedback__input"
        />
        <TextField
          label="О задаче"
          multiline
          rows={4}
          variant="outlined"
          size="small"
          className="feedback__input"
        />
        <Grid
          container
          direction="row"
          justify="flex-start"
          alignItems="center"
        >
          <label className="feedback__label">
            <Checkbox 
              // required
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
        <div className="popup__button-block">
          <MuiPickersUtilsProvider utils={DateFnsUtils} locale={ru}>
            <TimePicker
              autoOk
              variant="inline"
              ampm={false}
              inputVariant="outlined"
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <ArrowDropDown/>
                  </InputAdornment>
                ),
              }}
              value={selectedDate}
              minutesStep={10}
              size="small"
              onChange={handleDateChange}
              className='feedback__input-time'
            />
            <DatePicker
              autoOk
              disableToolbar
              disablePast={true}
              variant="inline"
              format="dd.MM.yyyy"
              inputVariant="outlined"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Event />
                  </InputAdornment>
                ),
                endAdornment: (
                  <InputAdornment position="end">
                    <ArrowDropDown/>
                  </InputAdornment>
                ),
              }}
              value={selectedDate}
              size="small"
              onChange={handleDateChange}
              className='feedback__input-date'
            />
          </MuiPickersUtilsProvider>
          <Button
            type="submit" 
            variant="contained" 
            className='feedback__submit'
          >
            Отправить
          </Button>
        </div>
      </FormControl>
    </Popup>
  );
}

export default FeedbackPopup;
