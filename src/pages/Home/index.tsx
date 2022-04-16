import React, { useEffect, useState } from 'react';

import { Container } from './styles';
import IportfolioInfo from '../../types/IportfolioInfo'
import Landing from '../../components/Landing';
import Menu from '../../components/Menu';
import About from '../../components/About';
import Prices from '../../components/Prices';
import Carrousel from '../../components/Carrousel';

export default function LandingPage() {
  const [info, setInfo] = useState<IportfolioInfo[]>([]) 
   
  return (
    <>
      <Menu/>
      <Landing/>
      <About/>
      <Prices/>
      <Carrousel/>
    </>
  );
}

