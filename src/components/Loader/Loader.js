import React from 'react'
import './Loader.css'

function Loader({ isOpened }) {
  return (
    <section className={`loader ${isOpened ? 'loader_opened' : ''}`}>
      <div className='loader__container'>
        <div className='loader__child'></div>
        <div className='loader__child'></div>
        <div className='loader__child'></div>
        <div className='loader__child'></div>
        <div className='loader__child'></div>
        <div className='loader__child'></div>
        <div className='loader__child'></div>
        <div className='loader__child'></div>
        <div className='loader__child'></div>
        <div className='loader__child'></div>
        <div className='loader__child'></div>
        <div className='loader__child'></div>
      </div>
    </section>
  )
};

export default Loader