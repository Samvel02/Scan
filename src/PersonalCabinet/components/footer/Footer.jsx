import React from 'react';
import FooterLogo from '../../../images/FooterLogo.svg';
import styled from 'styled-components';

const ContainerLogo = styled.div`
  display: flex;
`
const FooterData = styled.div`
    display: flex;
    flex-direction: column;
    height: 137px;
    justify-content: space-evenly;
`
const TopFooterData = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
`
const BottomFooterData = styled.div`
    display: flex;
    justify-content: flex-end;
`


const Footer = () => {
  return (
    <>
      <ContainerLogo>
        <img src={FooterLogo} alt='logo' className='logo' />
      </ContainerLogo>
      <FooterData>
        <TopFooterData>
            <p style={{padding: "0", margin: "0"}}>г. Москва, Цветной б-р, 40</p>
            <p style={{padding: "0", margin: "0"}}>+7 495 771 21 11</p>
            <p style={{padding: "0", margin: "0"}}>info@skan.ru</p>
        </TopFooterData>
        <BottomFooterData>
            <p>Copyright. 2022</p>
        </BottomFooterData>
      </FooterData>
    </>
  )
}

export {Footer}