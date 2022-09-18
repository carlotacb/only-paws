import React from 'react';
import sample from '../assets/sample.png';
import Image from 'next/image';
import 'primeicons/primeicons.css';


const Card = () => {
  return (
    <div className='card-window'>
        <button className='btn-card' style={{backgroundColor: '#F8333C'}}>
                <i className='pi pi-times' style={{color : "white" , backgroundColor: '#F8333C'}}></i>
        </button>
        <div className='card-container'>
            <Image className="card-img" src={sample} alt="logo" />
        </div>
        <button className='btn-card' style={{backgroundColor: '#44AF69'}}>
                <i className='pi pi-check' style={{color : "white" , backgroundColor: '#44AF69'}}></i>
        </button>
    </div>
    

  )
}

export default Card;