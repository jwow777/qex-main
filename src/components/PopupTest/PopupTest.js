import React, { useState } from 'react';
import './PopupTest.css';
import {
  Button,
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
  Snackbar,
  Typography,
} from '@material-ui/core';
import { ChevronRight, Lens, PanoramaFishEye } from '@material-ui/icons';
import MuiAlert from '@material-ui/lab/Alert';
import Popup from '../Popup/Popup';
import result from '../../images/test/result.png';

function PopupTest({ open, close }) {
  const [position, setPosition] = useState(null);
  const [range, setRange] = useState(0);
  const [openError, setOpenError] = useState(false);

  const handleChangePosition = (e) => setPosition(e.target.value);

  const handleCloseError = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpenError(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (position) {
      setRange(100);
      // setStore({ ...store, range: rangeValueName });
      setTimeout(() => {
        close();
        setRange(0);
        setPosition('');
      }, 1000);
    } else {
      setOpenError(true);
    }
  };

  return (
    <Popup
      open={open}
      close={close}
      classContainer='test'
    >
      <Typography
        variant='h2'
        className='popup__title popup__title_test'
      >
        Какой софт вам нужен?
      </Typography>
      <div className='popup__test-range-block'>
        <img src={result} alt='Результат' className='popup__test-range-image' />
        <p className='popup__test-range-result'>
          Готово: <span className='popup__test-range-result_percent'>{range}%</span>
        </p>
        <p className='popup__test-range-finish'>тут результат</p>
      </div>
      <input
        type='range'
        className='popup__test-range'
        value={range}
        step='20'
      />
      <Typography
        variant='h3'
        className='popup__test-title popup__test-form-title'
      >
        Кто вы в компании?
      </Typography>
      <FormControl component='form' className='popup__test-form' onSubmit={handleSubmit}>
        <RadioGroup
          value={position}
          onChange={handleChangePosition}
          className='popup__test-form-block'
        >
          <FormControlLabel
            control={
              <Radio
                value='leader'
                color='primary'
                icon={<PanoramaFishEye/>}
                checkedIcon={<Lens/>}
                className='popup__test-radio'
              />
            }
            label='Топ-менеджер \ Руководитель \ Собственник'
            className='popup__test-label'
          />
          <FormControlLabel
            control={
              <Radio
                value='other'
                color='primary'
                icon={<PanoramaFishEye/>}
                checkedIcon={<Lens/>}
                className='popup__test-radio'
              />
            }
            label='Иная должность'
            className='popup__test-label'
          />
          <FormControlLabel
            control={
              <Radio
                value='freelance'
                color='primary'
                icon={<PanoramaFishEye/>}
                checkedIcon={<Lens/>}
                className='popup__test-radio'
              />
            }
            label='Внештатный человек'
            className='popup__test-label'
          />
        </RadioGroup>
        <Button
          type='submit'
          variant='contained'
          color='primary'
          className='popup__test-submit'
        >
          Далее
          <ChevronRight/>
        </Button>
      </FormControl>
      <Snackbar anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'right',
      }} open={openError} autoHideDuration={3000} onClose={handleCloseError}>
        <MuiAlert elevation={6} variant='filled' severity='error' onClose={handleCloseError}>
          Вы не выбрали вариант!
        </MuiAlert>
      </Snackbar>
    </Popup>
  );
}

export default PopupTest;
