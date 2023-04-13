import React from 'react';
import Google from '../../../images/Google.svg'
import Facebook from '../../../../images/Facebook.svg'
import Yandex from '../../../../images/Yandex.svg'
import Lock from '../../../../images/Lock.svg'
import { useForm } from 'react-hook-form';
import styled from 'styled-components';
import { Login } from '../Авторизация/Login'


const Container = styled.form`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;

    border: 1px solid white;
    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.15);
`
const ImageLock = styled.img`
    width: 75px;
    height: 92px;
    margin-left: -50px;
    margin-top: -59px;
`
const WrapperTop = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 25px;
    padding-bottom: 40px;
    padding-top: 0px;
`
const BtnTop = styled.button`
    cursor: pointer;
    color: #029491;
    font-size: 16px;
    line-height: 19px;
    font-weight: 400;
    text-decoration: none;
    border: none;
    border-color: #029491;
    border-bottom: 2px solid #029491;
    background-color: #FFFFFF;
    padding: 8px 63px;
`
const WrapperMiddle = styled.div`
    display: flex;
    flex-direction: column;
    padding: 0px 25px 30px 25px;
`
const BtnTopRegistr = styled.button`
    cursor: pointer;
    color: #C7C7C7;
    font-size: 16px;
    line-height: 19px;
    font-weight: 400;
    text-decoration: none;
    border: none;
    border-color: #C7C7C7;
    border-bottom: 2px solid #C7C7C7;
    background-color: #FFFFFF;
    padding: 8px 63px;
`
const WrapperButton = styled.div`
    display: flex;
    flex-direction: column;
    width: 70%;
    margin-left: 25px;
    margin-bottom: 38px;
`
const TextWrapperButton = styled.p`
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    letter-spacing: 0.02em;
    color: #949494;
    margin-bottom: 15px;
`
const WrapperButtonLinks = styled.div`
    display: flex;
`

const GoogleLinks = styled.div`
    box-sizing: border-box;
    width: 96px;
    height: 31px;
    background: #FFFFFF;
    border: 1px solid rgba(89, 112, 255, 0.51);
    border-radius: 3px;
`
const FacebookLinks = styled.div`
    box-sizing: border-box;
    width: 96px;
    height: 31px;
    background: #FFFFFF;
    border: 1px solid rgba(89, 112, 255, 0.51);
    border-radius: 3px;
    margin: 0px 10px;
`
const YandexLinks = styled.div`
    box-sizing: border-box;
    width: 96px;
    height: 31px;
    background: #FFFFFF;
    border: 1px solid rgba(89, 112, 255, 0.51);
    border-radius: 3px;
`
const ImgBtnLinks = styled.img`
    margin-top: 6%;
    margin-left: 19%;
    cursor: pointer;
`



const WindowAuth = () => {

  const {
    handleSubmit
  } = useForm();

  const onSambit = (data) => {
    console.log(JSON.stringify(data))
  }

  return (
    <Container onSubmit={handleSubmit(onSambit)}>
    <ImageLock src={Lock} alt='img'/>
      <WrapperTop>
          <BtnTop>Войти</BtnTop>        
          <BtnTopRegistr disabled>Зарегистрироваться</BtnTopRegistr>
      </WrapperTop>
      <WrapperMiddle>
        <Login />
      </WrapperMiddle>
      <WrapperButton>
        <TextWrapperButton>Войти через:</TextWrapperButton>
        <WrapperButtonLinks>
          <GoogleLinks className='google-links'><ImgBtnLinks src={Google} alt='logo-google'/></GoogleLinks>
          <FacebookLinks className='facebook-links'><ImgBtnLinks src={Facebook} alt='logo-facebook'/></FacebookLinks>
          <YandexLinks className='yandex-links'><ImgBtnLinks src={Yandex} alt='logo-yandex'/></YandexLinks>
        </WrapperButtonLinks>
      </WrapperButton>
    </Container>
  )
}

export {WindowAuth}