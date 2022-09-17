import React from 'react';
import Link from 'next/link';
import 'primeicons/primeicons.css';

const Navbar = () => {
  return (
    <div className="navbar-container">
        <p className='logo'>
            <Link href="/">Logo from assets</Link>
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