import React from 'react';
import './style.css';
import { Outlet } from 'react-router-dom';
import { Footer } from '../pages/header/footer/Footer';
import { Header } from '../pages/header/header/Header';

const Layout = () => {
  return (
    <div className='container'>
        <header className='header'>
            <Header />
        </header>

        <main className='main'>
            <Outlet />
        </main>
        
        <footer className='footer'>
            <Footer />
        </footer>
    </div>
  )
}

export {Layout}