import React, { useEffect, useState } from 'react';

import { Container } from './styles';
import IportfolioInfo from '../../types/IportfolioInfo'
import Landing from '../../components/Landing';
import Menu from '../../components/Menu';
import About from '../../components/About';
import Prices from '../../components/Prices';
import Carrousel from '../../components/Carrousel';
import landingService from '../../service/landing/landing';
import sobreService from '../../service/sobre/sobre';
import sliderService from '../../service/slider/slider';
import categoriaService from '../../service/categoria/categoria';
import socialMediaService from '../../service/socialMedia/socialMedia';

export default function Home() {
  // const [info, setInfo] = useState<IportfolioInfo[]>([]) 


  const [landing, setLanding] = useState([])
  const [categorias, setCategorias] = useState([])
  const [socialMedias, setSocialMedias] = useState([]) //this are for the already existent ones       
  const [sliders, setSliders] = useState([])
  const [sobre, setSobre] = useState([])


  async function handleLoadLanding() {
    let allLandingData = await landingService.list()
    let firstLandingData = allLandingData[0]

    setLanding(firstLandingData || {})
  }

  async function handleLoadSobre() {
    let sobreData = await sobreService.list()
    console.log(sobreData[0])
    setSobre(sobreData[0])
  }

  async function handleLoadSlider() {
    let sliderData = await sliderService.list()
    setSliders(sliderData || [])
  }

  async function handleLoadCategorias() {
    let categoriaData = await categoriaService.list()
    setCategorias(categoriaData || [])
  }

  async function handleLoadSocialMedias() {
    let SocialMediaData = await socialMediaService.list()
    console.log("mnvkfjnvbfndvgjnsdjvnsdjvnsdjknv sdjknnj")
    let socialMedia = SocialMediaData[0];
    setSocialMedias(socialMedia)
  }

  async function handleLoadAll() {
    handleLoadLanding()
    handleLoadSobre()
    handleLoadSlider()
    handleLoadCategorias()
    handleLoadSocialMedias()
  }

  useEffect(
    () => {
      handleLoadAll()
    }, []
  )
   
  return (
    <>
      <Menu
      logoBranca={landing?.logoBranca}
      facebookLink={socialMedias?.facebook}
      instagramLink={socialMedias?.instagram}
      whatsappLink={socialMedias?.whatsapp}
      />
      <Landing
        titulo={landing?.titulo}
        logo={landing?.logo}
        logoBranca={landing?.logoBranca}
        backgroundWide={landing?.backgroundWide}
        backgroundMobile={landing?.backgroundMobile}
        facebookLink={socialMedias?.facebook}
        instagramLink={socialMedias?.instagram}
        whatsappLink={socialMedias?.whatsapp}
      />


      <About
        enderecoDesc={sobre?.enderecoDesc}
        enderecoTitulo={sobre?.enderecoTitulo}
        faleConoscoTitulo={sobre?.faleConoscoTitulo}
        faleConoscoDesc={sobre?.faleConoscoDesc}
        horFuncDesc={sobre?.horFuncDesc}
        horFuncTitulo={sobre?.horFuncTitulo}
        sobreTitulo={sobre?.sobreTitulo}
        sobreDesc={sobre?.sobreDesc}
      />

      <Prices
        backgroundPricesMobile={landing?.backgroundPricesMobile}
        backgroundPricesWide={landing?.backgroundPricesWide}
        categories={categorias}
      />
      <Carrousel
        sliders={sliders}
      />
    </>
  );
}

