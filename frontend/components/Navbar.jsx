import React from 'react';
import Link from 'next/link';
import 'primeicons/primeicons.css';
import Logo from '../assets/Logo.png';
import Image from 'next/image';

const Navbar = () => {
  return (
    <div className="navbar-container">
        <p className='navbar-logo'>
            <Link href="/"><Image src={Logo} alt="logo" height={80} width={100}/></Link>
        </p>
        <div className="btn-container">
            <button type="button" className="profile-icon" onClick="">
                <i className='pi pi-user'></i>
            </button>
            <button type="button" className="logout-icon" onClick="">
                <i className='pi pi-sign-out'></i>
            </button>
        </div>
        
    </div>
  )
}

export default Navbar