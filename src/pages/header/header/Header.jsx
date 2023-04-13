import React from 'react';
import { NavLink } from 'react-router-dom';
import logoHeader from '../../../images/Title.svg';
import HeaderVerticalLine from '../../../images/HeaderVerticalLine.svg';
import './style.css'

const Header = () => {
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
            <NavLink to='registrpage' className="title-registr">Зарегистрироваться</NavLink>
            <img src={HeaderVerticalLine} alt='line' className='headerverticalline' />
            <NavLink to='auth' className="title-auth">Войти</NavLink>
        </div>
    </>
  )
}

export {Header}