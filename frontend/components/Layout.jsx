import React from 'react';
import Header from '../components/Header'
import Head from 'next/head';
import Navbar from './Navbar';
import Footer from './Footer';


const Layout = ({children}) => {
    return (
        <div className="general-div">
            <Header/>
            {children}
            <Footer />

        </div>
      )
}

export default Layout

