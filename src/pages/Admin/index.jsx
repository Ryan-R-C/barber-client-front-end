import React, { useEffect, useState } from 'react';

import { Btn, Container, ContentFormNew, ModalContent } from './styles';
import IportfolioInfo from '../../types/IportfolioInfo'
import Landing from '../../components/Landing';
import Menu from '../../components/Menu';
import About from '../../components/About';
import Prices from '../../components/Prices';
import Carrousel from '../../components/Carrousel';
import { token } from '../../service/api';


//@ts-ignore
import IntlCurrencyInput from "react-intl-currency-input"
import currencyConfig from '../../utils/currenryConfig';
import { SubmitButton } from '../../ui/components/SubmitButton';
import { useForm } from 'react-hook-form';
import { TextField } from '../../ui/components/TextField';

export default function Admin() {
  function handleCheckLogin(){
    if(!token) window.location.pathname = ''
  }
  // loading state loading
  const [loading, setLoading] = useState(false) 

  const [info, setInfo] = useState([]) 
  // Landing States 
  const [landing, setLanding] = useState([]) 
  // About States 
  const [horario, setHorario] = useState([]) 
  const [endereco, setEndereco] = useState([]) 
  const [sobre, setSobre] = useState([]) 
  // Categories States
  const [categorias, setCategorias] = useState([]) 
  // Social Media States
  const [socialMedia, setSocialMedia] = useState([]) 
  // Slider States
  const [sliders, setSliders] = useState([]) 

  useEffect(

    () => {
      // handleCheckLogin()
    }, []
  )

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()


  async function handleUpdateOrCreateLanding(rawData){
    let data = {
      a: rawData.email,
      b: rawData.password
    }
  }
  return (
    <>

      <>
      <ModalContent
        // onSubmit={handleSubmit(handleUpdateOrCreateLanding)}
        onSubmit={handleSubmit(handleUpdateOrCreateLanding)}
        >
          <h3>Landing Page</h3>

          - landing: 
          Campos:
          titulo
          logo - upload de arquivos
          background wide
          background mobile


          <ContentFormNew>
            <label htmlFor="">Título da Página</label>
            <TextField
              required
              // value={nome}
              type="text"
              placeholder="Título da Página"
              errorMessage={errors.titulo}
              {...register('titulo', {
                required: {
                  value: true,
                  message: 'Todos os campos são obrigatórios',
                },
              })}
            />
          </ContentFormNew>

          <ContentFormNew>
            <label htmlFor="">Logo</label>
            <input
              required
              // value={nome}
              type="text"
              placeholder="Título da Página"
              errorMessage={errors.titulo}
              {...register('titulo', {
                required: {
                  value: true,
                  message: 'Todos os campos são obrigatórios',
                },
              })}
            />
          </ContentFormNew>


          <ContentFormNew>
            <label htmlFor="">Preço</label>
            <IntlCurrencyInput 
            currency="BRL" 
            config={currencyConfig}
            // onChange={handleChangea} 
            // value={handleChangePrice}
            />
          </ContentFormNew>

          
          <ContentFormNew>
            <label htmlFor="">Tipo de frete</label>
            <select
              required
              // onChange={(text) => setFrete(text.target.value)}
            >
              <option value="por_categoria">Por Cep</option>
              <option value="a_combinar">A combinar</option>
              <option value="retirar">Retirar</option>
              <option value="gratis">Grátis</option>
            </select>
          </ContentFormNew>

          
          {loading ? (
            <img
              width="40px"
              style={{ margin: "auto" }}
              height=""
              src={"https://c.tenor.com/I6kN-6X7nhAAAAAj/loading-buffering.gif"}
              alt="Loading"
            />
          ) : (
            <SubmitButton
            title="Enviar"
            />
          )}
        </ModalContent>
      </>
      {/* 
      Tipo presper?
      */}

      {/*
      - landing: 
        Campos:
          titulo
          logo - upload de arquivos
          background wide
          background mobile

      - medias sociais
        Campos:
          url
          icone - Select no front com o fontawessome

      - Sobre
        Campos:
          titulo e desc para:
          horário de funcionamento
          endereço
          fale conosco
          sobre


      - Sliders
        ordem
        imagem - upload
        texto alternativo

      - Categorias
        Titulo
        1 - n 
        CategoriaItem
          Titulo 
          Desc
          Preco
          
      - PrecosBackground
      */}

      <Menu
      />
      <Landing
      />
      <About
      />
      <Prices
      />
      <Carrousel
      />
    </>
  );
}

