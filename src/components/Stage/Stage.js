import React from 'react';
import './Stage.css';

function Stage({ data }) {
  const { image, title, description } = data;
  return (
    <li className='stage'>
      <img src={image} alt={title} className='stage__image' />
      <h4 className='stage__title'>{title}</h4>
      <p className='stage__text'>{description}</p>
    </li>
  );
}

export default Stage;
