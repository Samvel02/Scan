import React from 'react';
import { RequestData } from './requestData/RequestData';
import { CenterContent } from './centerContent/CenterContent';
import { OurRates } from './ourRates/OurRates';

const Main = () => {
  return (
    <>
        <RequestData />
        <CenterContent />
        <OurRates />
    </>
  )
}

export {Main}