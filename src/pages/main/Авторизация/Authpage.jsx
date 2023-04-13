import React from 'react';
import { WindowAuth } from './WindowAuth';
import styled from 'styled-components';
import AuthpageImg from '../../../images/AuthPageImg.svg';

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 60px 141px 80px 60px
`
const LeftBlock = styled.div`
  display: flex;
  flex-direction: column;
`
const Image = styled.img`
  width: 42%;
  margin-left: 14%;
`

const Text = styled.p`
  font-size: 375%;
  font-weight: 900;
  line-height: 110%;
`
const ImageBlock = styled.div`
  display: flex;
`
const BlockWindowAuth = styled.div`
  width: 40%;
`

const Authpage = () => {
  return (
    <Container>
      <LeftBlock>
        <Text>Для оформления подписки <br></br> на тариф, необходимо <br></br> авторизоваться.</Text>
        <ImageBlock>
          <Image src={AuthpageImg} alt='img' />
        </ImageBlock>      
      </LeftBlock>
      <BlockWindowAuth>
        <WindowAuth />
      </BlockWindowAuth>
    </Container>
  )
}

export {Authpage}