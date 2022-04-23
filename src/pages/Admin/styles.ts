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

  img {
    height: 466px;
    width:  466px;
    border-radius: 5px;
    align-self: center;    
    margin: 5px 0 20px 0;
  }

  .logo {
    height: 266px;
    width:  266px;
  }

  p{
    font-size: 15px;
  }

  input {
    height: 48px;
    width: 466px;
    border-radius: 4px;
    border: 0;
    background: #F2F2F2 !important;
    padding: 0 5px;
    margin: 10px 0;
    @media (max-width: 768px) {
      width: 100%;
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
    height: 48px;
    width: 466px;
    border-radius: 4px;
    border: 0;
    background: #F2F2F2 !important;
    padding: 0 5px;
    margin: 10px 0;
    @media (max-width: 768px) {
      width: 100%;
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