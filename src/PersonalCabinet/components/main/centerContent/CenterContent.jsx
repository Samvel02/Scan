import React from 'react'
import styled from 'styled-components'
import CenterContainerMain from '../../../../images/CenterContainerMain.svg'
import { MySlider } from '../Slider/Slider'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 109px 60px
`
const Text = styled.p`
  font-style: normal;
  font-weight: 900;
  font-size: 45px;
  line-height: 54px;
  letter-spacing: 0.01em;
  color: #000000;
  text-transform: uppercase;
`

const BlockSlider = styled.div`
  padding: 70px 0;
`

const CenterContent = () => {
  return (
    <Container>
      <Text>Почему именно мы</Text>
      <BlockSlider>
        <MySlider />
      </BlockSlider>
      <img src={CenterContainerMain} alt='img' />
    </Container>
  )
}

export {CenterContent}