import styled from "styled-components";

export const Image = styled.a`
display: flex;
align-items: center;
justify-content: center;
box-shadow: rgba(0, 0, 0, 0.25) 0px 0.0625em 0.0625em,
rgba(0, 0, 0, 0.25) 0px 0.125em 0.5em,
rgba(255, 255, 255, 0.1) 0px 0px 0px 1px inset;
border-radius: 6px;
margin: 0 auto;
position: relative;
z-index: 1;

  &:before {
    transform: translateX(0%);
    transform: translateY(0%);
    position: absolute;
    z-index: 0;
    content: "";
    top: -0%;
    height: 100%;
    width: 100%;
    border: 0;
    border-radius: 5px;
    background: #0000008a;
    right: 0;
    transform: translateX(1.05%) rotate(2deg) translateY(-2.5%);
    }

    img {
        width: 100%;
        height: 10%;
        object-fit: cover;
        border-radius:6px;
        background-color: blue;  
        margin: 0 auto;
        position: relative;
        width: 100%;
        height: 10%;
        object-fit: cover;
        }
`;

export const Item = styled.article`
/* display: flex; */
/* align-items: start; */
/* justify-content: start; */
margin-bottom: 50px;
/* 

p, span{
  font-family: Roboto, Verdana, Geneva, Tahoma, sans-serif;
}


.icon{
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid black;
  padding: 10px;
  position: relative;
  margin-right: 20px;

  position: relative;
  height: 50px;
  width:  50px;

  min-height: 50px;
  min-width:  50px;

  text-align: center;
  line-height: 66px;
  border: 1px solid #ebebeb;

  color: var(--main-color);

  margin-right: 21px;
  margin-left: 6px;

  &:before{
    height: 100%;
    width: 100%;
    content: "";
    position: absolute;
    top: 5px;
    border: 1px solid #ebebeb;
    left: -5px;
  }

}

.content{
  .content-main{
  }

  h3{
    font-size: 1.75rem;
    margin-bottom: 5px;
  }
  p{
    color: var(--main-color);
    font-weight: normal;
    font-size: 1.2rem;
  }

  .desc{
    padding-top: 10px;
    color: #484848;
    font-size: 0.8rem;
  }

} */


`

export const Container = styled.div`
background-color: white;
width: 58.33333333%;
/* max-width: 900px; */
padding: 50px;


`
// 41.66666667%
export const PricesContainer = styled.section`
width: 100%;

.test{
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 10%;

  
  .child{
    /* min-width: fit-content; */
    width: 40%;
  }


  @media (max-width: 999px){
   flex-direction :column;

   .child{
     width: 100%;
   }
  }

}
`
