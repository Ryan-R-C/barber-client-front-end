import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: blue;
  width: 100vw;
`;


export const ModalContent = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  text-align: left;

  h3 {
    padding: 20px 0;
    font-size: 24px;
  }

  p {
    color: #4A4A4A;
    max-width: 420px;
    padding: 20px 0;
  }

  .buttonsNew {
    display: flex;
    cursor: pointer;
  }

  .buttonsNew button {
    cursor: pointer;

    width: 165px;
    height: 40px;

    border-radius: 5px;
    color: black;
    border: 1px solid rgba(16, 16, 16, 1);
    text-decoration: none;
  
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 5px;

    @media (max-width: 768px) {
      width: 50%;
    }
  }

  .buttonsNew button:nth-child(2) {
    width: 165px;
    height: 40px;
    cursor: pointer;

    background: #101010;
    border-radius: 5px;
    color: white;
    text-decoration: none;
  
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 5px;
    border: 0;
  }

  img {
    @media (max-width: 768px) {
      width: 100%;
      margin-top: 30px;
    }
  }
`;

export const ContentFormNew = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  // align-items: center;

  img {
    height: 466px;
    width:  466px;
    border-radius: 5px;
    align-self: center;    
    object-fit:contain;
    margin: 5px 0 20px 0;
  }

  .logo {
    height: 266px;
    width:  266px;
  }

  p{
    font-size: 15px;
  }

  p {
    width: 466px;
    margin: 10px 0;
    @media (max-width: 768px) {
      width: 100%;
    }

    &::placeholder {
      color: #747474;
    }
    & + input {
      margin-top: 1rem;
    }
  }

  input {
    height: 48px;
    width: 466px;
    border-radius: 4px;

    background: #e7e9ee;
    border: 1px solid #d7d7d7;

    padding: 0 5px;
    margin: 10px 0;
    @media (max-width: 768px) {
      width: 100%;
    }

    &::placeholder {
      color: #747474;
    }
    & + input {
      margin-top: 1rem;
    }
  }

 
  
  textarea {
    resize: vertical;
    height: 125px;
    width: 466px;
    border-radius: 4px;
    border: 0;
    font: 14px 'Poppins',sans-serif;
    background: #F2F2F2 !important;
    padding: 0 5px;
    margin: 10px 0;
    @media (max-width: 768px) {
      width: 100%;
    }
  }


  select {
    margin-top: 2px;
    padding: 0 1.5rem;
    height: 48px;
    width: 466px;
    font-size: 1rem;
    font-weight: 400;
    background: #e7e9ee;
    border: 1px solid #d7d7d7;
    border-radius: 0.25rem;


    &::placeholder {
      color: #747474;
    }
    & + input {
      margin-top: 1rem;
    }
  }

  label {
    margin: 5px 0;
  }

  @media (max-width: 768px) {
    width: 100%;
    margin: 0 20px;
  }
` 

export const Btn = styled.button`
  background: white;
  text-align: left;
  padding: 10px 0 40px 0;
  transition: .5s;

  &:hover {
    text-decoration: underline;
  }
`;

export const ModalContainerText = styled.div`
  padding-left: 25%;
  padding-right: 25%;

  padding-top: 2.5%;
  padding-bottom: 2.5%;
  

  text-align: justify;
  `

export const ButtonsHolder = styled.div`
  align-items: baseline;
  display: flex;
  align-items: center;
  width: 100%;
  margin-bottom: 20px;  


  .btn-trash{
    background-color: #EA1C24;
    margin-left: 5px;
    margin-right: 5px;
  } 
`

export const ActionButton = styled.button`
  padding: 0 1.5rem;
  width: 100%;
  font-size: 1rem;
  font-weight: 600;
  color: #ffffff;
  background: black;
  border: 0;
  border-radius: 0.25rem;
  transition: filter 0.2s ease-in-out;
  display: block;

  width: 50px;
  height: 50px;
  position: relative;

  &:hover {
    filter: brightness(0.9);

    svg {
      /* create a animation here */
    }
  }

  svg {
    position:absolute;
    left:0;
    right:0;
    margin-left:auto;
    margin-right:auto;
    top:0;
    bottom:0;
    margin-top:auto;
    margin-bottom:auto;
  }

`



export const FlexButtons = styled.div`
  display: flex;
  margin: 20px 20px;


  button {
    cursor: pointer;
    background: #000;
    border: 0;
    width: 120px;
    height: 48px;
    border-radius: 5px;
    color: white;

    display: flex;
    align-items: center;
    justify-content: center;

    svg {
      margin-left: 10px;
    }
  }
`



export const FlexContainer = styled.div`
  display: flex;
  margin: 40px 0;
  width: 100%;
  flex-wrap: wrap;
`
