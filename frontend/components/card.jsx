import React from 'react';
import sample from '../assets/sample.png';
import Image from 'next/image';
import 'primeicons/primeicons.css';


// this is the profile
const Profile = () => {
  return (
    <div className='profile-container'>
        <Image src={sample} alt="logo" />
        <div className='btn-container-profile'>
            <button classname='btn-profile' style={{backgroundColor: '#F8333C'}}>
                <i className='pi pi-check' style={{color : "white" , backgroundColor: '#F8333C'}}></i>
            </button>
            <button classname='btn-profile' style={{backgroundColor: '#F8333C'}}>
                <i className='pi pi-times' style={{color : "white" , backgroundColor: '#44AF69'}}></i>
            </button>
        </div>
        
    </div>
  )
}

export default Profile;