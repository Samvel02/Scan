import React from 'react';
import styled from 'styled-components';
import RequestDataImg from '../../../../images/RequestDataImg.svg'
import { NavLink } from 'react-router-dom';
import './styleRequestData.css'

const Container = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 0 60px;
`
const Data = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 30px

`
const DataTop = styled.p`
  color: #000000;
  font-weight: 900;
  font-size: 70px;
  line-height: 76px;
  letter-spacing: 0.01em;
`
const DataBottom = styled.div`
  display: flex;
  flex-direction: column;
`
const TextDataBottom = styled.p`
  font-weight: 400;
  font-size: 20px;
  line-height: 24px;
  letter-spacing: 0.01em;
  margin-bottom: 70px;
  margin-top: 20px;
`


const RequestData = () => {
  return (
    <Container>
        <Data>
          <DataTop>
            СЕРВИС ПО ПОИСКУ
            <br></br>ПУБЛИКАЦИИ
            <br></br>О КОМПАНИИ
            <br></br>ПО ЕГО ИНН
          </DataTop>
          <DataBottom>
            <TextDataBottom>
            Комплексный анализ публикаций, получение данных 
            <br></br>в формате PDF на электронную почту.
            </TextDataBottom>
            <NavLink to='searchoptions' className='btn-request-data' >
                Запросить данные
            </NavLink>
          </DataBottom>
        </Data>
        <img src={RequestDataImg} alt='img' />
    </Container>
  )
}

export {RequestData}