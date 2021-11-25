import React from 'react';
import { useNavigate } from 'react-router-dom';
import { notFoundText } from '../../utils/constants';
import './NotFound.css'

function NotFound() {

  const navigate = useNavigate();

  return (
    <div className='not-found'>
      <div className='not-found__content'>
        <h1 className='not-found__title'>{notFoundText.title}</h1>
        <p className='not-found__text'>{notFoundText.text}</p>
        <button className='not-found__button' onClick={() => { navigate(-1) }} >{notFoundText.backLink}</button>
      </div>
    </div>
  )
}

export default NotFound;