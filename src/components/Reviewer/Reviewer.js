import React, { useState } from 'react';
import './Reviewer.css';
import { Fade, Modal } from '@material-ui/core';
import Backdrop from '@material-ui/core/Backdrop';
import letter from '../../images/aboutus/letter.png';

function Reviewer({ data }) {
  const {
    name,
    company,
    companyCountry,
    position,
    review,
    photo,
  } = data;

  const [openLetter, setOpenLetter] = useState(false);
  const handleOpenLetter = () => setOpenLetter(true);
  const handleCloseLetter = () => setOpenLetter(false);
  return (
    <>
      <li className='reviewer'>
        <div className='reviewer__block'>
          <img src={photo} alt={name} className='reviewer__photo' />
          <h3 className='reviewer__name'>{name}</h3>
          <div className='reviewer__company-block'>
            {
              company.startsWith('/images/')
                ? <img src={company} alt='Компания' className='reviewer__company-image'/>
                : <p className='reviewer__company-title'>{company}</p>
            }
            {
              companyCountry
                ? <img src={companyCountry} alt='Страна'/>
                : ''
            }
          </div>
          <p className='reviewer__position'>{position}</p>
        </div>
        <p className='reviewer__text'>{review}</p>
        <div className='reviewer__document-block' onClick={handleOpenLetter}>
          <img
            src={letter}
            alt='Благодарственное письмо'
            className='reviewer__letter-image'
          />
          <span className='reviewer__letter-name'>Благодарственное письмо</span>
        </div>
      </li>
      <Modal
        className='reviewer__letter-modal'
        open={openLetter}
        onClose={handleCloseLetter}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={openLetter}>
          <div className='reviewer__letter-modal-content'>
            <img
              src={letter}
              alt='Благодарственное письмо'
              // className='reviewer__letter-image'
            />
          </div>
        </Fade>
      </Modal>
    </>
  );
}

export default Reviewer;
