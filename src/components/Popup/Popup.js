import React from 'react';
import './Popup.css';
import { Dialog, IconButton } from '@material-ui/core';
import { Clear } from '@material-ui/icons';

function Popup({
  children,
  open,
  close,
  classContainer,
}) {
  return (
    <Dialog
      open={open}
      onClose={close}
      scroll='body'
      className={`popup__${classContainer}`}
    >
      <IconButton onClick={close} className='popup__close'>
        <Clear />
      </IconButton>
      {children}
    </Dialog>
  );
}

export default Popup;
