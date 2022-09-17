import React from 'react';
import Header from '../components/Header'
import Head from 'next/head';
import Navbar from './Navbar';
import Footer from './Footer';


const Layout = ({children}) => {
    return (
        <>
            <Header/>
            {children}
            <Footer style={{fontSize:"3rem"}}/>
            <p className="footer-text">OnlyPaws 2022</p>
        </>
      )
}

export default Layout

