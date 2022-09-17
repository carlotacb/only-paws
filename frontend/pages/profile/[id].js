import React from 'react';
import Card from '../../components/card';
import Image from 'next/image';
import sample from '../../assets/sample.png';

const Profile = () => {
  return (
    <div className='profile-container'>

          <div className='card-container-left'>
                ..
          </div>
              
            <div className='card-container-right'>
              <Image src={sample} alt="logo" />
            </div>
    </div>
    
  )
}

export default Profile