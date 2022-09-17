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
        </>
      )
}

export default Layout

