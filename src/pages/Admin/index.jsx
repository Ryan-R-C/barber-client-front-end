import React, { useEffect, useState } from 'react';

import { ActionButton, Btn, ButtonsHolder, Container, ContentFormNew, ModalContent } from './styles';
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
import uploadImage from '../../service/imagem/upload';
import { toast } from 'react-toastify';
import landingService from '../../service/landing/landing';
import { FiPlus, FiTrash, FiX } from 'react-icons/fi';
import sobreService from '../../service/sobre/sobre';
import sliderService from '../../service/slider/slider';
import categoriaService from '../../service/categoria/categoria';

import Modal from 'react-modal'



export default function Admin() {

/*
=====================================================================================================
                                        Form Values
=====================================================================================================
*/ 
  
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()


  function handleCheckLogin(){
    if(!token) window.location.pathname = ''
  }
  /*
  =====================================================================================================
                                            STATES
  =====================================================================================================
  */ 
  //Modals states
  const [isOpenModalLanding, setIsOpenModalLanding] = useState(false) 
  const [isOpenModalAbout, setIsOpenModalAbout] = useState(false) 
  const [isOpenModalCategories, setIsOpenModalCategories] = useState(false) 
  const [isOpenModalCategoriesNew, setIsOpenModalCategoriesNew] = useState(false) 
  const [isOpenModalSocialMedia, setIsOpenModalSocialMedia] = useState(false) 
  const [isOpenModalSlider, setIsOpenModalSlider] = useState(false) 
  const [isOpenModalSliderNew, setIsOpenModalSliderNew] = useState(false) 



  // loading state loading
  const [loading, setLoading] = useState(false) 

  const [info, setInfo] = useState([]) 
  // Landing States 
  const [landing   , setLanding     ] = useState([]) 

  const [logo      , setLogo        ] = useState("") 
  const [backgroundWide        , setBackgroundWide        ] = useState("") 
  const [backgroundMobile      , setBackgroundMobile      ] = useState("") 
  const [backgroundPricesMobile, setBackgroundPricesMobile] = useState("") 
  const [backgroundPricesWide  , setBackgroundPricesWide  ] = useState("") 

  // About States 
  const [horario   , setHorario     ] = useState([]) 
  const [endereco  , setEndereco    ] = useState([]) 
  const [sobre     , setSobre       ] = useState([]) 
  // Categories States
  const [categorias, setCategorias  ] = useState([]) 
  // Social Media States
  const [socialMedias   , setSocialMedias   ] = useState([]) //this are for the already existent ones       
  const [socialMediasNew, setSocialMediasNew] = useState([ {} ]) // and this are for the new ones!

  // Slider States
  const [sliders       , setSliders       ] = useState([]) 
  const [slidersNew    , setSlidersNew    ] = useState([{}]) 


  /*
  =====================================================================================================
                                  View Functions 
  =====================================================================================================
  */ 

  async function handleLoadLanding(){
    let landingData = await landingService.list()
    setLanding(landingData)
  }

  async function handleLoadSobre(){
    let sobreData = await sobreService.list()
    setSobre(sobreData)
  }

  async function handleLoadSlider(){
    let sliderData = await sliderService.list()
    setSliders(sliderData)
  }

  async function handleLoadCategorias(){
    let categoriaData = await categoriaService.list()
    setCategorias(categoriaData)
  }

  async function handleLoadAll(){
    handleLoadLanding()
    handleLoadSobre()
    handleLoadSlider()
    handleLoadCategorias()
  }

  useEffect(
    () => {
      handleLoadAll()
    }, []
  )
  

  /*
  =====================================================================================================
                                  Create Functions 
  =====================================================================================================
  */ 
  
  // upload images
  async function handleUploadImage(image, setImage){
    if (image.type.includes('image')) {
      
      uploadImage(image, setImage)

    }
    else {
      toast.error('Arquivo inválido!')
    }
  }
  
  // landing
  async function handleUpdateOrCreateLanding(rawData){
    let data = {
      titulo                 : rawData.titulo        , 
      logo                   : logo                  , 
      backgroundWide         : backgroundWide        , 
      backgroundMobile       : backgroundMobile      , 
      backgroundPricesMobile : backgroundPricesMobile, 
      backgroundPricesWide   : backgroundPricesWide  , 
    }

    let isCreatedOrUpdated = landingService.create(data)
    console.log(isCreatedOrUpdated)
  }
  // about
  async function handleUpdateOrCreateAbout(rawData){
    let data = {
      horFuncTitulo: rawData.horFuncTitulo,
      enderecoTitulo: rawData.enderecoTitulo,
      faleConoscoDesc: rawData.faleConoscoDesc,
      horFuncDesc: rawData.horFuncDesc,
      enderecoDesc: rawData.enderecoDesc,
      faleConoscoTitulo: rawData.faleConoscoTitulo,
    }

    let isCreatedOrUpdated = sobreService.create(data)
    console.log(isCreatedOrUpdated)
  }

  //slider
  async function handleUpdateOrCreateSlider(rawData){
    slidersNew.map(
      (e) => {

        sliderService.create(e)
      }
    )

    // let isCreatedOrUpdated = sobreService.create(data)
    // console.log(isCreatedOrUpdated)
  }


    

   /*
  =====================================================================================================
                                  Handle Change Screen elements 
  =====================================================================================================
  */ 
   const addFormFields = (state, setState) => {
    // @ts-ignore
    setState([...state, { }])
  }
  const handleChangeState = ( i, e, state, setState) => {
    const newFormValues = [...state]
    // @ts-ignore
    newFormValues[i][e.target.name] = e.target.value

    // console.log(newFormValues)
    setState(newFormValues)
  }

  const removeFormFields = (i, state, setState) => {
    // console.log(dependentes[i])
    const newFormValues = [...state]
    newFormValues.splice(i, 1)
    setState(newFormValues)
  }

  /*
  =====================================================================================================
                                          useEffects
  =====================================================================================================
  */ 
  
    useEffect(
  
      () => {
        // handleCheckLogin()
      }, []
    )

  /*
  =====================================================================================================
                                  Modal Functions 
  =====================================================================================================
  */ 

  function openModalLanding(){
    setIsOpenModalLanding(true)
  }
  function openModalAbout(){
    setIsOpenModalAbout(true)
  }
  function openModalCategories(){
    setIsOpenModalCategories(true)
  }
  function openModalCategoriesNew(){
    setIsOpenModalCategoriesNew(true)
  }
  function openModalSocialMedia(){
    setIsOpenModalSocialMedia(true)
  }
  function openModalSlider(){
    setIsOpenModalSlider(true)
  }
  function openModalSliderNew(){
    setIsOpenModalSliderNew(true)
  }


  function closeModalLanding(){
    setIsOpenModalLanding(false)
  }
  function closeModalAbout(){
    setIsOpenModalAbout(false)
  }
  function closeModalCategories(){
    setIsOpenModalCategories(false)
  }
  function closeModalCategoriesNew(){
    setIsOpenModalCategoriesNew(false)
  }
  function closeModalSocialMedia(){
    setIsOpenModalSocialMedia(false)
  }
  function closeModalSlider(){
    setIsOpenModalSlider(false)
  }
  function closeModalSliderNew(){
    setIsOpenModalSliderNew(false)
  }

  return (
    <>

      <Modal
      isOpen={isOpenModalLanding}
      onRequestClose={closeModalLanding}
      overlayClassName='react-modal-overlay'
      className='react-modal-content'
    >
      <button
        className='react-modal-close'
        type='button'
        onClick={closeModalLanding}
      >
        <FiX />
      </button>


      <ModalContent
        // onSubmit={handleSubmit(handleUpdateOrCreateLanding)}
        onSubmit={handleSubmit(handleUpdateOrCreateLanding)}
        >
          <h3>Landing Page</h3>
          <ContentFormNew>
            <label htmlFor="">Geral</label>
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
              name="courseImage"
              type="file"
              required
              onChange={(e) => {
                handleUploadImage(e.target.files[0], setLogo)
              }}
            />
            <img className='logo' src={logo} alt="" />
          </ContentFormNew>

          <ContentFormNew>
            <label htmlFor="">Background do cabeçalho para dispositívos widescreen</label>
            <p > (computadores e tvs )</p>
            <input
              name="courseImage"
              type="file"
              required
              onChange={(e) => {
                handleUploadImage(e.target.files[0], setBackgroundWide)
              }}
            />
            <img src={backgroundWide} alt="" />
          </ContentFormNew>


          <ContentFormNew>
            <label htmlFor="">Background do cabeçalho para dispositívos mobile</label>
            <p >( celulares e tablets )</p>
            <input
              name="courseImage"
              type="file"
              required
              onChange={(e) => {
                handleUploadImage(e.target.files[0], setBackgroundMobile)
              }}
            />
            <img src={backgroundMobile} alt="" />
          </ContentFormNew>


          <ContentFormNew>
            <label htmlFor="">Background dos preços para dispositívos mobile</label>
            <p >( celulares e tablets )</p>
            <input
              name="courseImage"
              type="file"
              required
              onChange={(e) => {
                handleUploadImage(e.target.files[0], setBackgroundPricesWide)
              }}
            />
            <img src={backgroundPricesWide} alt="" />
          </ContentFormNew>

          <ContentFormNew>
            <label htmlFor="">Background dos preços para dispositívos mobile</label>
            <p >( celulares e tablets )</p>
            <input
              name="courseImage"
              type="file"
              required
              onChange={(e) => {
                handleUploadImage(e.target.files[0], setBackgroundPricesMobile)
              }}
            />
            <img src={backgroundPricesMobile} alt="" />
          </ContentFormNew>


          {/* <ContentFormNew>
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
          </ContentFormNew> */}

          
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
      </Modal>

      <Modal
      isOpen={isOpenModalSocialMedia}
      onRequestClose={closeModalSocialMedia}
      overlayClassName='react-modal-overlay'
      className='react-modal-content'
    >
      <button
        className='react-modal-close'
        type='button'
        onClick={closeModalSocialMedia}
      >
        <FiX />
      </button>
      
      <ModalContent
      onSubmit={(e) => {
        e.preventDefault()
        
      }}
      >
          <h2>
            Mídias Sociais
          </h2>
          {
          socialMedias.map(
            (e, i) => (
            <ContentFormNew>
              <label htmlFor="">Icone</label>
              <ButtonsHolder>
                <select name="" id="">
                  <option value=""></option>
                </select>
                <ActionButton
                className='btn-actions btn-trash'
                type='button'
                onClick={() => removeFormFields(i, socialMedias, setSocialMedias)}
                >
                <FiTrash />
                </ActionButton>
                <ActionButton
                type='button'
                className='btn-actions'
                onClick={() => addFormFields(socialMediasNew, setSocialMediasNew)}
                >
                <FiPlus />
                </ActionButton>
              </ButtonsHolder>
            <label htmlFor="">URL</label>
            <input type="text"/>
            <hr />
            </ContentFormNew>
            )
            )
          }
          {
          socialMediasNew.map(
            (e, i) => (
            <ContentFormNew>
              <label htmlFor="">Icone</label>
              <ButtonsHolder>
                <select name="" id="">
                  <option value=""></option>
                </select>
                <ActionButton
                className='btn-actions btn-trash'
                type='button'
                onClick={() => removeFormFields(i, socialMediasNew, setSocialMediasNew)}
                >
                <FiTrash />
                </ActionButton>
                <ActionButton
                type='button'
                className='btn-actions'
                onClick={() => addFormFields(socialMediasNew, setSocialMediasNew)}
                          >
                <FiPlus />
                </ActionButton>
              </ButtonsHolder>
            <label htmlFor="">URL</label>
            <input type="text"/>
            <hr />
            </ContentFormNew>
            )
            )
          }
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
        </Modal>

      <Modal
      isOpen={isOpenModalAbout}
      onRequestClose={closeModalAbout}
      overlayClassName='react-modal-overlay'
      className='react-modal-content'
    >
      <button
        className='react-modal-close'
        type='button'
        onClick={closeModalAbout}
      >
        <FiX />
      </button>
        <ModalContent
        onSubmit={handleSubmit(handleUpdateOrCreateAbout)}
        >
          <h2>
            Sobre
          </h2>
          <h3>
            Horário de Funcionamento
          </h3>
        
            <ContentFormNew>
              <label htmlFor="">Título</label>
              <input
              type="text"
              {...register('horFuncTitulo', {
                  required: {
                    value: true,
                    message: 'Todos os campos são obrigatórios',
                  },
              })}
              />
              <label htmlFor="">Descrição</label>
              <input
              type="text"
              {...register('horFuncDesc', {
                  required: {
                    value: true,
                    message: 'Todos os campos são obrigatórios',
                  },
              })}
              />
            </ContentFormNew>
        
          <h3>
            Endereço
          </h3>
        
            <ContentFormNew>
              <label htmlFor="">Título</label>
              <input
              type="text"
              {...register('enderecoTitulo', {
                  required: {
                    value: true,
                    message: 'Todos os campos são obrigatórios',
                  },
              })}
              />
              <label htmlFor="">Descrição</label>
              <input
              type="text"
              {...register('enderecoDesc', {
                  required: {
                    value: true,
                    message: 'Todos os campos são obrigatórios',
                  },
              })}
              />
            </ContentFormNew>
          <h3>
            Fale Conosco
          </h3>
        
            <ContentFormNew>
              <label htmlFor="">Título</label>
              <input
              type="text"
              {...register('faleConoscoTitulo', {
                  required: {
                    value: true,
                    message: 'Todos os campos são obrigatórios',
                  },
              })}
              />
              <label htmlFor="">Descrição</label>
              <input
              type="text"
              {...register('faleConoscoDesc', {
                  required: {
                    value: true,
                    message: 'Todos os campos são obrigatórios',
                  },
              })}
              />
            </ContentFormNew>
          <h3>
            Sobre
          </h3>
        
            <ContentFormNew>
              <label htmlFor="">Título</label>
              <input
              type="text"
              {...register('titulo', {
                  required: {
                    value: true,
                    message: 'Todos os campos são obrigatórios',
                  },
              })}
              />
              <label htmlFor="">Descrição</label>
              <input
              type="text"
              {...register('titulo', {
                  required: {
                    value: true,
                    message: 'Todos os campos são obrigatórios',
                  },
              })}
              />
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
      </Modal>

      <Modal
      isOpen={isOpenModalSlider}
      onRequestClose={closeModalSlider}
      overlayClassName='react-modal-overlay'
      className='react-modal-content'
    >
      <button
        className='react-modal-close'
        type='button'
        onClick={closeModalSlider}
      >
        <FiX />
      </button>
      <ModalContent
      onSubmit={(e) => {
        e.preventDefault()
        
      }}
      >
        <h2>
          Sliders
        </h2>
        {
        sliders.map(
          (e, i) => (
          <ContentFormNew>
            <label htmlFor="">Imagem</label>
            <ButtonsHolder>
              <input
              type="file"
              name='imagem'
              // TODO handle change no upload porra!
              onChange={(e) => handleChangeState( i, e, sliders, setSliders)}
              />
              <ActionButton
              className='btn-actions btn-trash'
              type='button'
              onClick={() => removeFormFields(i, sliders, setSliders)}
              >
              <FiTrash />
              </ActionButton>
              <ActionButton
              type='button'
              className='btn-actions'
              onClick={() => addFormFields(slidersNew, setSlidersNew)}
              >
              <FiPlus />
              </ActionButton>
            </ButtonsHolder>
          <label htmlFor="">URL</label>
          <input type="text"/>
          <hr />
          </ContentFormNew>
          ) 
          )
        }

          {
          slidersNew.map(
            (e, i) => (
            <ContentFormNew>
              <label htmlFor="">Imagem</label>
              <ButtonsHolder>
                <input
                type="file"
                name='imagem'
                onChange={(e) => handleChangeState( i, e, slidersNew, setSlidersNew)}
                />
                <ActionButton
                className='btn-actions btn-trash'
                type='button'
                onClick={() => removeFormFields(i, slidersNew, setSlidersNew)}
                >
                <FiTrash />
                </ActionButton>
                <ActionButton
                type='button'
                className='btn-actions'
                onClick={() => addFormFields(slidersNew, setSlidersNew)}
                          >
                <FiPlus />
                </ActionButton>
              </ButtonsHolder>
            <label htmlFor="">URL</label>
            <input type="text"/>
            <hr />
            </ContentFormNew>
            )
            )
          }
  
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
        </Modal>
      {/*

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

