import React from 'react';
import { NavLink } from 'react-router-dom';
import logoHeader from '../../../images/Title.svg';
import { Avatar } from './Avatar';
import { Loader } from './Loader';
import './style.css';


const HeaderPersonal = () => {
  return (
    <>
        <div className='logo-header_container'>
            <img src={logoHeader} alt='logo' className='logo' />
        </div>
        <div className='navig-header_container'>
            <NavLink to='/' className="title-navig">Главная</NavLink>
            <NavLink to='' className="title-navig title-navig-center">Тарифы</NavLink>
            <NavLink to='' className="title-navig">FAQ</NavLink>
        </div>
        <div className='navig-header-auth'>
            <Loader />
            <Avatar />
        </div>
    </>
  )
}

export {HeaderPersonal}