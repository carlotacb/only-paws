import React from 'react';
import Card from '../../components/card';
import Image from 'next/image';
import sample from '../../assets/sample.png';

const Profile = () => {
  return (
    <div className='profile-container'>

          <div className='card-container-left'>
                <h1 className='profile-heading'> UserName : ""</h1>
                <h1 className='profile-heading'> Pet Type : ""</h1>
                <h1 className='profile-heading'> Availability : ""</h1>
                <h1 className='profile-heading'> Days Available : ""</h1>
          </div>
              
            <div className='card-container-right'>
              <Image className='profile-image' src={sample} alt="logo" />
            </div>
    </div>
    
  )
}

export default Profile