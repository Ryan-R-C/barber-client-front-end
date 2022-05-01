
import { CarrouselContainer } from './styles';

import { useState } from 'react';

import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, {
  Autoplay,
  Pagination,
  Navigation,
  Scrollbar,
  A11y
} from 'swiper';




// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';



const Carrousel = (
  { sliders }
  ) => {

  let banners = [

    {
      image: "https://i.ibb.co/zShNszK/Whats-App-Image-2021-10-14-at-13-49-28-1.jpg",
      alt:"Uma selfie com de um pai e um filho com o Proprietário, Bruno"
    },

    {
      image: "https://i.ibb.co/8NwMkD4/Whats-App-Image-2021-10-14-at-13-49-28-16.jpg",
      alt:"Cliente tendo seu cabelo cortado com estílo"
    },

    {
      image: "https://i.ibb.co/YWFn35s/Whats-App-Image-2021-10-14-at-13-49-28-3.jpg",
      alt:"Cliente tendo seu cabelo cortado com estílo"
    },

    {
      image: "https://i.ibb.co/rcxtG74/Whats-App-Image-2021-10-14-at-13-49-28-9.jpg",
      alt:"Fique com seu cabelo 'na régua' como ele!"
    },

    {
      image: "https://i.ibb.co/StGMDkW/Whats-App-Image-2021-10-14-at-13-49-28-4.jpg",
      alt:"Até desenhos e detalhes!"
    },

  ]


  return (
    <>
      <CarrouselContainer id="last-clone">
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          loop={true}
          navigation={true}
          modules={[Navigation, Pagination, A11y]}
          slidesPerView={1}
          pagination={{ clickable: true } }  
        >
          {
            sliders.map(
              (banner, index) => 
              (
                <SwiperSlide
                key={index}
                >

                  <img src={banner.imagem} alt={banner.texto} />

                </SwiperSlide>
              ) 
            )
          }
        </Swiper>
      </CarrouselContainer>
    </>
  );
}
export default Carrousel
