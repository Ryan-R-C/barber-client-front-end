import styled from "styled-components";


export const CarrouselContainer = styled.div`
  background-color: black;


  .swiper-container {
    z-index: 0;

  }

  .swiper-pagination-bullet{
    background: var(--main-color-light);
  }
  .swiper-button-prev  {
    color: white !important
  }
  
  .swiper-button-next {
    color: white !important
  }

  .swiper-slide
  {

    img {
      width: 100%;
      height: 100vh;
      object-fit: contain;
      margin: 0;

      @media (max-width: 768px)
      {
        width: 100%;
        height: 100vh;
        object-fit: cover;
      }
    } 
  }
`; 


export const BannerHomeImage = styled.div`
  .swiper-container {
    z-index: 0;
  }

  .swiper-slide {
    img {
      width: 100%;
      height: 417px !important;
      object-fit: cover;
      margin: 0;

      @media (max-width: 768px)
      {
        width: 100%;
        height: 190px !important;
        object-fit: cover;
      }
    } 
  }
`;