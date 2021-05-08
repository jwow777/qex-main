import './FormFeedback.css';
import { useState } from 'react';
import PhoneInput from 'react-phone-input-2';
import "react-phone-input-2/lib/plain.css";
import checked from "../../images/feedback/checked.svg";
import DateFnsUtils from '@date-io/date-fns';
import ru from "date-fns/locale/ru";
import { Button, Checkbox, FormControl, Grid, InputAdornment, makeStyles, MenuItem, Select, Snackbar, TextField } from '@material-ui/core';
import { ArrowDropDown, Event, LocalPhoneRounded, MailOutlineRounded, Telegram, WhatsApp } from '@material-ui/icons';
import { DatePicker, MuiPickersUtilsProvider, TimePicker } from '@material-ui/pickers';
import clsx from "clsx";
import MuiAlert from '@material-ui/lab/Alert';

function FormFeedback({ isOpen, onClose, politics, openPolicy }) {
  const [state, setState] = useState({
    communication: 'call',
    phone: '',
    email: '',
    policy: false,
  });

  const [phone, setPhone] = useState("");
  const [openError, setOpenError] = useState(false);
  const [openSuccess, setOpenSuccess] = useState(false);

  const [selectedDate, setSelectedDate] = useState(new Date());
  const handleDateChange = (date) => setSelectedDate(date);

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

  return (
    <FormControl
      component="form"
      variant="outlined"
      size="small"
      className="popup__form popup__form_feedback"
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
          onClick={openPolicy('paper')}
        >
          политикой обработки данных
        </div>          
      </Grid>
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
  );
}

export default FormFeedback;
