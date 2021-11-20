import React from 'react';
import { useNavigate } from 'react-router-dom';
import './NotFound.css'

function NotFound() {

  const navigate = useNavigate();

  return (
    <div className='not-found'>
      <div className='not-found__content'>
        <h1 className='not-found__title'>404</h1>
        <p className='not-found__text'>Страница не найдена</p>
        <button className='not-found__button' onClick={() => { navigate(-1) }} >Назад</button>
      </div>
    </div>
  )
}

export default NotFound;