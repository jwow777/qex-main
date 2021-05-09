import React from 'react';
import { Link } from 'react-router-dom';
import crewman from '../../utils/crewman';
import whoelse from '../../utils/whoelse';
import Arrow from '../Arrow/Arrow';
import Crewman from '../Crewman/Crewman';
import WhoElse from '../Whoelse/Whoelse';
import './We.css';

function We() {
  return (
    <section className='we'>
      <div className='we__container'>
        <h2 className='title we__title'>Мы</h2>
        <ul className='list we__list we__list_crew'>
          {crewman.map((man, index) => <Crewman data={man} key={index}/>)}
        </ul>
        <h3 className='we__subtitle'>Кто еще:</h3>
        <ul className='list we__list we__list_whoelse'>
          {whoelse.map((item, index) => <WhoElse data={item} key={index}/>)}
        </ul>
        <Link to='/' className='link link_navigation'>
          Еще о нас <Arrow/>
        </Link>
      </div>
    </section>
  );
}

export default We;
