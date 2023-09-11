import React from 'react';
import Link from 'next/link';
import 'primeicons/primeicons.css';
import Logo from '../assets/Logo.png';
import Image from 'next/image';


//add link to the personal profile of the user by extracting the user from the back-end
// add a function for logging out

const Logout = () =>{

}
const Navbar = () => {
  return (
    <div className="navbar-container">
        <p className='navbar-logo'>
            <Link href="/"><Image src={Logo} alt="logo" height={80} width={120}/></Link>
        </p>
        <div className="btn-container">
            <Link href="/">
                <button type="button" className="profile-icon" onClick="">
                    <i className='pi pi-user'></i>
                </button>
            </Link>
            <button type="button" className="logout-icon" onClick={Logout}>
                <i className='pi pi-sign-out'></i>
            </button>
        </div>

    </div>
  )
}

export default Navbar
