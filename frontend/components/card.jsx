import React from 'react';
import sample from '../assets/sample.png';
import Image from 'next/image';
import 'primeicons/primeicons.css';
import Link from 'next/link';

// need a function to change the pictures on Click
// we also need to link our pictures to the respective ids

const handleClick = () =>{

}

const Card = () => {
  return (
    <div className='card-window'>
        <button className='btn-card' style={{backgroundColor: '#F8333C'}} onClick= {handleClick}>
                <i className='pi pi-times' style={{color : "white" , backgroundColor: '#F8333C'}}></i>
        </button>
        <Link href="/">
          <div className='card-container'>
              <Image className="card-img" src={sample} alt="logo" />
          </div>
        </Link>
        <button className='btn-card' style={{backgroundColor: '#44AF69'}} onClick={handleClick}>
                <i className='pi pi-check' style={{color : "white" , backgroundColor: '#44AF69'}}></i>
        </button>
    </div>
    

  )
}

export default Card;