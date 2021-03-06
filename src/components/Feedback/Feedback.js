import React, { useEffect, useState } from 'react';
import MuiAlert from '@material-ui/lab/Alert';
import {
  Button,
  Checkbox,
  FormControl,
  Grid,
  InputAdornment,
  makeStyles,
  MenuItem,
  Select,
  Snackbar,
  TextField,
} from '@material-ui/core';
import {
  Add,
  ArrowDropDown,
  Event,
  LocalPhoneRounded,
  MailOutlineRounded,
  Telegram,
  WhatsApp,
} from '@material-ui/icons';
import {
  DatePicker,
  MuiPickersUtilsProvider,
  TimePicker,
} from '@material-ui/pickers';
import clsx from 'clsx';
import DateFnsUtils from '@date-io/date-fns';
import ru from 'date-fns/locale/ru';
import PhoneInput from 'react-phone-input-2';
import './Feedback.css';
import bg from '../../images/feedback/bg.png';
import pdf from '../../images/feedback/pdf.png';
import checked from '../../images/feedback/checked.svg';

const useStyles = makeStyles(() => ({
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

function Feedback({ openPolicy }) {
  const classes = useStyles();
  const [state, setState] = useState({
    communication: 'call',
    phone: '',
    email: '',
    policy: true,
    date: '',
  });
  const [phone, setPhone] = useState('');
  const [openSuccess, setOpenSuccess] = useState(false);

  const [selectedDate, setSelectedDate] = useState(new Date());
  const handleDateChange = (date) => {
    setState({ ...state, date });
    setSelectedDate(date);
  };

  const handleChange = (e) => setState({ ...state, [e.target.name]: e.target.value });
  const handleChangeCheckbox = (e) => setState({ ...state, [e.target.name]: e.target.checked });

  const handleCloseSuccess = (reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpenSuccess(false);
  };

  useEffect(() => setState({ ...state, phone }), [phone]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setOpenSuccess(true);
  };

  const [openInputs, setOpenInputs] = useState(false);
  function handleVisibleInputs() {
    if (openInputs) {
      setOpenInputs(false);
    } else {
      setOpenInputs(true);
    }
  }

  return (
    <section className='feedback'>
      <div className='feedback__container'>
        <div
          className='feedback__image'
          style={{ backgroundImage: `url(${bg})` }}
        ></div>
        <h2 className='feedback__title'>
          ???????????????? ?????????????????? ?? ?????????????????? ??????????????, ?????????????? ?????????????? ??????????
          ?????????????????? ?????????? ??????????
        </h2>
        <h3 className='feedback__subtitle'>???? ??????????, ??????</h3>
        <FormControl
          component='form'
          variant='outlined'
          size='small'
          className={`feedback__form${openInputs ? ' feedback__form_extra' : ''}`}
          onSubmit={handleSubmit}
        >
          <div className='feedback__phone-block'>
            <Select
              name='communication'
              defaultValue={state.communication}
              value={state.communication}
              onChange={handleChange}
              className='feedback__select'
            >
              <MenuItem value='call'>
                <LocalPhoneRounded className='feedback__select-image'/>
                ????????????
              </MenuItem>
              <MenuItem value='whatsapp'>
                <WhatsApp className='feedback__select-image'/>
                WhatsApp
              </MenuItem>
              <MenuItem value='telegram'>
                <Telegram className='feedback__select-image'/>
                Telegram
              </MenuItem>
              <MenuItem value='email'>
                <MailOutlineRounded className='feedback__select-image'/>
                Email
              </MenuItem>
            </Select>
            {state.communication === 'email' ? (
              <TextField
                name='email'
                type='email'
                variant='outlined'
                size='small'
                placeholder='email@mail.com'
                value={state.email}
                onChange={handleChange}
                className='feedback__input-email'
              />
            ) : (
              <PhoneInput
                country={'ru'}
                className='input popup__input popup__input_feedback'
                value={phone}
                onChange={setPhone}
                containerClass={'feedback__input-phone-block'}
                inputClass={'input feedback__input-phone'}
                buttonClass={'feedback__button-phone'}
                inputProps={{
                  required: true,
                  name: 'phone',
                }}
              />
            )}
          </div>
          <Button
            type='submit'
            variant='contained'
            color='primary'
            className={`feedback__submit-site${openInputs ? ' feedback__submit-site_hidden' : ''}`}
            disabled={!(state.email || phone)}
          >
            ???????????????? ????????????
          </Button>
          <div className={`feedback__extra-input${openInputs ? ' feedback__extra-input_visible' : ''}`}>
            <TextField
              label='??????'
              type='text'
              variant='outlined'
              size='small'
              className='feedback__input feedback__input_site'
            />
            <TextField
              label='????????????????'
              type='text'
              variant='outlined'
              size='small'
              className='feedback__input feedback__input_site'
            />
            <TextField
              label='?? ????????????'
              multiline
              rows={4}
              variant='outlined'
              size='small'
              className='feedback__input feedback__input_site'
            />
          </div>
          <Grid
            container
            direction='row'
            justify='flex-start'
            alignItems='center'
            className='feedback__checkbox feedback__checkbox_site'
          >
            <label className='feedback__label'>
              <Checkbox
                checked={state.policy}
                onChange={handleChangeCheckbox}
                name='policy'
                size='small'
                color='primary'
                checkedIcon={<span className={clsx(classes.icon, classes.checkedIcon)} />}
                icon={<span className={classes.icon} />}
              />
              ?? ???????????????? ??
            </label>
            <div
              className='feedback__label-politics'
              onClick={openPolicy('paper')}
            >
              ?????????????????? ?????????????????? ????????????
            </div>
          </Grid>
          <div className={`feedback__extra-input feedback__button-block${openInputs ? ' feedback__extra-input_visible' : ''}`}>
            <MuiPickersUtilsProvider utils={DateFnsUtils} locale={ru}>
              <TimePicker
                autoOk
                variant='inline'
                ampm={false}
                inputVariant='outlined'
                InputProps={{
                  endAdornment: (
                    <InputAdornment position='end'>
                      <ArrowDropDown/>
                    </InputAdornment>
                  ),
                }}
                value={selectedDate}
                minutesStep={5}
                size='small'
                onChange={handleDateChange}
                className='feedback__input-time'
              />
              <DatePicker
                autoOk
                disableToolbar
                disablePast={true}
                variant='inline'
                format='dd.MM.yyyy'
                inputVariant='outlined'
                InputProps={{
                  startAdornment: (
                    <InputAdornment position='start'>
                      <Event />
                    </InputAdornment>
                  ),
                  endAdornment: (
                    <InputAdornment position='end'>
                      <ArrowDropDown/>
                    </InputAdornment>
                  ),
                }}
                value={selectedDate}
                size='small'
                onChange={handleDateChange}
                className='feedback__input-date'
              />
            </MuiPickersUtilsProvider>
            <Button
              type='submit'
              variant='contained'
              className='feedback__submit feedback__submit_site-down'
              disabled={!(state.email || phone)}
            >
              ?????????????????? ?? ??????????????
              <img src={pdf} alt='pdf' className='feedback__image-pdf feedback__image-pdf_big'/>
            </Button>
          </div>
          <Button
            className={`feedback__file${openInputs ? ' feedback__file_hidden' : ''}`}
            startIcon={<Add />}
            onClick={handleVisibleInputs}
          >
            ?????????????? ?????? ???????????? ???? ??????-???????? &apos;???????? ?????????????? ?????? ???????????????&apos;
            <img src={pdf} alt='pdf' className='feedback__image-pdf feedback__image-pdf_small'/>
          </Button>
          <Snackbar anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'right',
          }} open={openSuccess} autoHideDuration={3000} onClose={handleCloseSuccess}>
            <MuiAlert elevation={6} variant='filled' severity='success' onClose={handleCloseSuccess}>
              ???????????? ?????? ?? ?????????? CRM, ???? ?????????? ?? ???????? ???????????????? :)
            </MuiAlert>
          </Snackbar>
        </FormControl>
      </div>
    </section>
  );
}

export default Feedback;
