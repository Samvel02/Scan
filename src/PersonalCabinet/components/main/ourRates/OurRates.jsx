import React from 'react'
import Lamp from "../../../../images/ourRatesImg/Lamp.svg"
import Dart from "../../../../images/ourRatesImg/Dart.svg"
import Computer from "../../../../images/ourRatesImg/Computer.svg"
import CheckMark from "../../../../images/ourRatesImg/CheckMark.svg"
import styled from 'styled-components'

const Container = styled.div`
    display: flex;
    flex-direction: column;
    padding: 0 60px;
    margin-bottom: 8%;
`
const HeaderContainer = styled.div`
    display: flex;
    margin-bottom: 5%;
`
const TextHeaderContainer = styled.p`
    font-style: normal;
    font-weight: 900;
    font-size: 55px;
    line-height: 54px;
    letter-spacing: 0.01em;
    color: #000000;
    @media (max-width: 1390px) {   
      font-weight: 700; 
      font-size: 33px;
      line-height: 38px;
      @media (max-width: 1200px) {   
      font-weight: 600; 
      font-size: 32px;
      line-height: 38px;
    }
    }
`

const ContainerCards = styled.div`
      display: flex;
      justify-content: space-between;
`

const Card = styled.div`
    width: 32%;
    height: auto;
    display: flex;
    flex-direction: column;
    background: #FFFFFF;
    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.2);
    border-radius: 10px;
`

const HeaderCard = styled.div`
    display: flex;
    align-items: center;
    height: 25%;
    border-radius: 10px 10px 0px 0px;
    @media (max-width: 1000px) {
        padding: 10px 0;
    }
`
const DescriptionHeaderCard = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 4%;
`
const TitleDescriptionHeaderCard = styled.h2`
  font-style: normal;
  font-weight: 500;
  font-size: 30px;
  line-height: 1.5;
  letter-spacing: 0.01em;
  color: #000000;
    @media (max-width: 1390px) {
      font-size: 30px;
      @media (max-width: 1200px) {
      font-size: 25px;
      @media (max-width: 1050px) {
        font-size: 22px;
      }
      }
    }
`
const TextDescriptionHeaderCard = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: 22px;
  line-height: 1.5;
  letter-spacing: 0.01em;
  @media (max-width: 1390px) {
    font-size: 15px;
    @media (max-width: 1200px) {
    font-size: 15px;
    @media (max-width: 1050px) {
        font-size: 10px;
      }
  }
  }
`

const MainCard = styled.div`
  display: flex;
  flex-direction: column;
`
const PriceMainCard = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 7%;
  margin-top: 7%;
  @media (max-width: 1200px) {
    padding-left: 7%;
    margin-top: 5%;
  }
`
const TopPriceMainCard = styled.div`
    display: flex;
    align-items: center;
`
const CurrentTopPriceMainCard = styled.p`
  font-style: normal;
  font-weight: 500;
  font-size: 30px;
  line-height: 36px;
  letter-spacing: 0.01em;
  color: #000000;
  @media (max-width: 1390px) {
    font-size: 25px;
    @media (max-width: 1200px) {
    font-size: 20px;
    @media (max-width: 1050px) {
        font-size: 18px;
      }
  }
  }
`
const PastTopPriceMainCard = styled.p`
  font-style: normal;
  font-weight: 500;
  font-size: 25px;
  line-height: 0;
  letter-spacing: 0.01em;
  text-decoration-line: line-through;
  color: #000000;
  opacity: 0.5;
  margin-left: 19px;
  @media (max-width: 1390px) {
    font-size: 20px;
    @media (max-width: 1200px) {
    font-size: 16px;
    @media (max-width: 1050px) {
        font-size: 14px;
      }
  }
  }
`
const BottomPriceMainCard = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 22px;
  letter-spacing: 0.01em;
  @media (max-width: 1390px) {
    font-size: 15px;
    @media (max-width: 1200px) {
    font-size: 12px;
    @media (max-width: 1050px) {
        font-size: 10px;
      }
  }
  }
`
const BottomPriceMainThreeCard = styled.div`
  height: 22px;
`
const RatesMainCard = styled.div`
  display: flex;
  margin-top: 6%;
  @media (max-width: 1200px) {
    margin-top: 0;
    
  }
`
const TitleListRatesMainCard = styled.h3`
  font-style: normal;
  padding-left: 0;
  margin-bottom: 10px;
  font-weight: 600;
  font-size: 20px;
  line-height: 24px;
  letter-spacing: 0.01em;
  color: #000000;
  @media (max-width: 1390px) {
    font-size: 18px;
    @media (max-width: 1200px) {
    font-size: 16px;
    @media (max-width: 1050px) {
        font-size: 14px;
      }
  }
  }
`
const ListRatesMainCard = styled.ul`
    margin-left: 7%;
    @media (max-width: 1200px) {
      margin-left: -5%;
    }
`
const ItemListRatesMainCard = styled.li`
  list-style-type: none;
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 22px;
  letter-spacing: 0.01em;
  color: #000000;
  display: flex;
  margin-top: 5px;
  @media (max-width: 1390px) {
    font-size: 14px;
    margin-top: 0;
    @media (max-width: 1200px) {
    font-size: 12px;
    margin-top: 0;
    @media (max-width: 1050px) {
        font-size: 10px;
      }
  }
  }
`
const CheckMarkImg = styled.img`
  margin-right: 8px
`

const FooterCard = styled.div`
  display: flex;
  justify-content: center;
  aling-items: center;
  margin-top: 9%;
  margin-bottom: 24px;

`
const BottomFooterCard = styled.button`
  text-decoration: none;
  background: #5970FF;
  border-radius: 5px;
  border: none;
  cursor: pointer;
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 24px;
  letter-spacing: 0.01em;
  color: #FFFFFF;
  padding: 17px 31%;
  @media (max-width: 1390px) {
    font-size: 18px;
    @media (max-width: 1200px) {
    font-size: 16px;
    @media (max-width: 1050px) {
        font-size: 14px;
        padding: 11px 27%;
      }
   }
  }
`
const ImgHeaderOneCard = styled.img`
  @media (max-width: 1390px) {
    width: 90%;
    height: auto;
    @media (max-width: 1200px) {
      width: 80%;
      height: auto;
      @media (max-width: 1050px) {
        width: 70%;
        height: auto;
      }
    }
  }
`
const ImgHeaderTwoCard = styled.img`
  @media (max-width: 1390px) {
    width: 90%;
    height: auto;
    @media (max-width: 1200px) {
      width: 90%;
      height: auto;
      @media (max-width: 1050px) {
        width: 90%;
        height: auto;
      }
    }
  }
`
const ContainerImg = styled.div`
  display: flex;
  justify-content: flex-start;
  @media (max-width: 1390px) {
    width: 25%;
    height: auto;
  }
`
const ContainerImgTwoCard = styled.div`
  display: flex;
  justify-content: center;
  @media (max-width: 1390px) {
    width: 25%;
    height: auto;
  }
`
const ImgHeaderThreeCard = styled.img`
  margin-left: 14%;
  @media (max-width: 1390px) {
    width: 90%;
    height: auto;
    @media (max-width: 1200px) {
      width: 80%;
      height: auto;
      @media (max-width: 1050px) {
        width: 70%;
        height: auto;
      }
    }
  }
`



const OurRates = () => {
  return (
    <Container>

      <HeaderContainer>
        <TextHeaderContainer>НАШИ ТАРИФЫ</TextHeaderContainer>
      </HeaderContainer>

      <ContainerCards>

          <Card>
            <HeaderCard style={{ background:` #FFB64F`, justifyContent: `center` }}>
              <DescriptionHeaderCard>
                <TitleDescriptionHeaderCard style={{color: `#000000`}}>Beginner</TitleDescriptionHeaderCard>
                <TextDescriptionHeaderCard style={{color: `#000000`}}>Для небольшого исследования</TextDescriptionHeaderCard>
              </DescriptionHeaderCard>
              <ContainerImg>
                <ImgHeaderOneCard src={Lamp} alt="img" />
              </ContainerImg>
            </HeaderCard>
            <MainCard>
              <PriceMainCard>
                <TopPriceMainCard>
                  <CurrentTopPriceMainCard>799 ₽</CurrentTopPriceMainCard>
                  <PastTopPriceMainCard>1 200 ₽</PastTopPriceMainCard>
                </TopPriceMainCard>
                <BottomPriceMainCard>
                или 150 ₽/мес. при рассрочке на 24 мес.
                </BottomPriceMainCard>
              </PriceMainCard>
              <RatesMainCard>
                <ListRatesMainCard>
                <TitleListRatesMainCard>В тариф входит:</TitleListRatesMainCard>
                  <ItemListRatesMainCard>
                    <CheckMarkImg src={CheckMark} alt="CheckMarkImg" /> 
                    Безлимитная история запросов          
                  </ItemListRatesMainCard>
                  <ItemListRatesMainCard>
                    <CheckMarkImg src={CheckMark} alt="CheckMarkImg" /> 
                    Безопасная сделка      
                  </ItemListRatesMainCard>
                  <ItemListRatesMainCard>
                    <CheckMarkImg src={CheckMark} alt="CheckMarkImg" />  
                    Поддержка 24/7     
                  </ItemListRatesMainCard>
                </ListRatesMainCard>
              </RatesMainCard>
            </MainCard>
            <FooterCard>
              <BottomFooterCard>Подробнее</BottomFooterCard>
            </FooterCard>
          </Card>

          <Card>
            <HeaderCard style={{ background:` #7CE3E1`, justifyContent: `space-around`}}>
              <DescriptionHeaderCard>
                <TitleDescriptionHeaderCard style={{color: `#000000`}}>Pro</TitleDescriptionHeaderCard>
                <TextDescriptionHeaderCard style={{color: `#000000`}}>Для HR и фрилансеров</TextDescriptionHeaderCard>
              </DescriptionHeaderCard>
              <ContainerImgTwoCard>
                <ImgHeaderTwoCard src={Dart} alt="img" />
              </ContainerImgTwoCard>
            </HeaderCard>
            <MainCard>
              <PriceMainCard>
                <TopPriceMainCard>
                  <CurrentTopPriceMainCard>1 299 ₽</CurrentTopPriceMainCard>
                  <PastTopPriceMainCard>2 600 ₽</PastTopPriceMainCard>
                </TopPriceMainCard>
                <BottomPriceMainCard>
                или 279 ₽/мес. при рассрочке на 24 мес.
                </BottomPriceMainCard>
              </PriceMainCard>
              <RatesMainCard>
                <ListRatesMainCard>
                <TitleListRatesMainCard>В тариф входит:</TitleListRatesMainCard>
                  <ItemListRatesMainCard>
                    <CheckMarkImg src={CheckMark} alt="CheckMarkImg" />
                    Все пункты тарифа Beginner
                  </ItemListRatesMainCard>
                  <ItemListRatesMainCard>
                    <CheckMarkImg src={CheckMark} alt="CheckMarkImg" /> 
                    Экспорт истории      
                  </ItemListRatesMainCard>
                  <ItemListRatesMainCard>
                    <CheckMarkImg src={CheckMark} alt="CheckMarkImg" /> 
                    Рекомендации по приоритетам      
                  </ItemListRatesMainCard>
                </ListRatesMainCard>
              </RatesMainCard>
            </MainCard>
            <FooterCard>
              <BottomFooterCard>Подробнее</BottomFooterCard>
            </FooterCard>
          </Card>

          <Card>
            <HeaderCard style={{ background:` #000000`, justifyContent: `center` }}>
              <DescriptionHeaderCard>
                <TitleDescriptionHeaderCard style={{ color:` #FFFFFF` }}>Business</TitleDescriptionHeaderCard>
                <TextDescriptionHeaderCard style={{ color:` #FFFFFF` }}>Для корпоративных клиентов</TextDescriptionHeaderCard>
              </DescriptionHeaderCard>
              <ContainerImg>
                <ImgHeaderThreeCard src={Computer} alt="img" />
              </ContainerImg>
            </HeaderCard>
            <MainCard>
              <PriceMainCard>
              <TopPriceMainCard>
                  <CurrentTopPriceMainCard>2 379 ₽</CurrentTopPriceMainCard>
                  <PastTopPriceMainCard>3 700 ₽</PastTopPriceMainCard>
                </TopPriceMainCard>
                <BottomPriceMainThreeCard>
                  
                </BottomPriceMainThreeCard>
              </PriceMainCard>
              <RatesMainCard>
                <ListRatesMainCard>
                <TitleListRatesMainCard>В тариф входит:</TitleListRatesMainCard>
                  <ItemListRatesMainCard>
                    <CheckMarkImg src={CheckMark} alt="CheckMarkImg" />   
                    Все пункты тарифа Pro    
                  </ItemListRatesMainCard>
                  <ItemListRatesMainCard>
                    <CheckMarkImg src={CheckMark} alt="CheckMarkImg" />       
                    Безлимитное количество запросов
                  </ItemListRatesMainCard>
                  <ItemListRatesMainCard>
                    <CheckMarkImg src={CheckMark} alt="CheckMarkImg" />  
                    Приоритетная поддержка     
                  </ItemListRatesMainCard>
                </ListRatesMainCard>
              </RatesMainCard>
            </MainCard>
            <FooterCard>
              <BottomFooterCard>Подробнее</BottomFooterCard>
            </FooterCard>
          </Card>

      </ContainerCards>
    </Container>
  )
}

export {OurRates}