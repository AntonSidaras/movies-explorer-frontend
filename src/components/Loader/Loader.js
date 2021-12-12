import React from 'react'
import './Loader.css'

function Loader({ isOpen }) {
  return (
    <section className={`loader ${isOpen ? 'loader_opened' : ''}`}>
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