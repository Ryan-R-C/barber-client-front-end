import React, { useEffect, useState } from 'react';

import { ActionButton, Btn, ButtonsHolder, Container, ContentFormNew, FlexButtons, FlexContainer, ModalContent } from './styles';
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
import { FiEdit, FiPlus, FiTrash, FiX } from 'react-icons/fi';
import sobreService from '../../service/sobre/sobre';
import sliderService from '../../service/slider/slider';
import categoriaService from '../../service/categoria/categoria';

import Modal from 'react-modal'
import { isReturnStatement } from 'typescript';
import categoriaItemService from '../../service/categoriaItem/categoriaItem';
import socialMediaService from '../../service/socialMedia/socialMedia';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';




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


  function handleCheckLogin() {
    if (!token) window.location.pathname = ''
  }
  /*
  =====================================================================================================
                                            STATES
  =====================================================================================================
  */
  //Modals states
  const [isOpenModalLanding, setIsOpenModalLanding] = useState(false)
  const [isOpenModalAbout, setIsOpenModalAbout] = useState(false)
  const [isOpenModalSocialMedia, setIsOpenModalSocialMedia] = useState(false)
  const [isOpenModalSlider, setIsOpenModalSlider] = useState(false)
  const [isOpenModalSliderNew, setIsOpenModalSliderNew] = useState(false)

  const [isOpenModalCategories, setIsOpenModalCategories] = useState(false)
  const [isOpenModalCategoriesNew, setIsOpenModalCategoriesNew] = useState(false)
  const [isOpenModalCategoriesChange, setIsOpenModalCategoriesChange] = useState(false)

  // loading state loading
  const [loading, setLoading] = useState(false)

  const [info, setInfo] = useState([])
  // Landing States 
  const [landing, setLanding] = useState([])

  const [titulo, setTitulo] = useState("")
  const [logo, setLogo] = useState("")
  const [logoBranca, setLogoBranca] = useState("")
  const [backgroundWide, setBackgroundWide] = useState("")
  const [backgroundMobile, setBackgroundMobile] = useState("")
  const [backgroundPricesMobile, setBackgroundPricesMobile] = useState("")
  const [backgroundPricesWide, setBackgroundPricesWide] = useState("")

  // About States 
  const [horario, setHorario] = useState([])
  const [endereco, setEndereco] = useState([])
  const [sobre, setSobre] = useState([])
  // Categories States
  const [categorias, setCategorias] = useState([])

  const [categoriaSeleted, setCategoriaSeleted] = useState({})
  const [categoriaItemSeleted, setCategoriaItemSeleted] = useState([])

  const [categoriaTitulo, setCategoriaTitulo] = useState("")

  const [categoriasNew, setCategoriasNew] = useState([])


  // Social Media States
  const [socialMedias, setSocialMedias] = useState([]) //this are for the already existent ones       
  const [facebook, setFacebook  ] = useState("") // and this are for the new ones!
  const [instagram, setInstagram] = useState("") // and this are for the new ones!
  const [whatsapp, setWhatsapp  ] = useState("") // and this are for the new ones!

  // Slider States
  const [sliders, setSliders] = useState([])
  const [slidersNew, setSlidersNew] = useState([{}])


  /*
  =====================================================================================================
                                  View Functions 
  =====================================================================================================
  */

  async function handleLoadLanding() {
    let allLandingData = await landingService.list()
    let firstLandingData = allLandingData[0]

    setLanding(firstLandingData || {})

    setTitulo(firstLandingData?.titulo)
    setLogo(firstLandingData?.logo)
    setLogoBranca(firstLandingData?.logoBranca)
    setBackgroundWide(firstLandingData?.backgroundWide)
    setBackgroundMobile(firstLandingData?.backgroundMobile)
    setBackgroundPricesMobile(firstLandingData?.backgroundPricesMobile)
    setBackgroundPricesWide(firstLandingData?.backgroundPricesWide)
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
    let socialMedia = SocialMediaData[0] || {};
    setSocialMedias(socialMedia)
    setFacebook(socialMedia?.facebook)
    setInstagram(socialMedia?.instagram)
    setWhatsapp(socialMedia?.whatsapp)
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


  /*
  =====================================================================================================
                                  Create Functions 
  =====================================================================================================
  */

  // upload images
  async function handleUploadImage(image, setImage) {
    if (image.type.includes('image')) {
      return uploadImage(image, setImage)
    }
    else {
      toast.error('Arquivo inválido!')
    }
  }

  // landing
  async function handleUpdateOrCreateLanding() {

    let data = {
      titulo: titulo,
      logo: logo,
      logoBranca: logoBranca,
      backgroundWide: backgroundWide,
      backgroundMobile: backgroundMobile,
      backgroundPricesMobile: backgroundPricesMobile,
      backgroundPricesWide: backgroundPricesWide,
    }
    let isCreatedOrUpdated;

    if (!landing.id) isCreatedOrUpdated = await landingService.create(data)
    if (landing.id) isCreatedOrUpdated = await landingService.update(landing.id, data)

    if (isCreatedOrUpdated) closeModalLanding()
    handleLoadLanding()
  }
  // about
  async function handleUpdateOrCreateAbout(rawData) {
    let data = {
      horFuncTitulo: rawData.horFuncTitulo,
      enderecoTitulo: rawData.enderecoTitulo,
      faleConoscoDesc: rawData.faleConoscoDesc,
      horFuncDesc: rawData.horFuncDesc,
      enderecoDesc: rawData.enderecoDesc,
      faleConoscoTitulo: rawData.faleConoscoTitulo,
      sobreTitulo: rawData.sobreTitulo,
      sobreDesc: rawData.sobreDesc,
    }
    let isCreatedOrUpdated;
    if(!sobre?.id) isCreatedOrUpdated = await sobreService.create(data)
    if(sobre?.id) isCreatedOrUpdated =  await sobreService.update(sobre.id, data)

    handleLoadSobre()
    if (isCreatedOrUpdated) closeModalAbout()
  }

  //slider
  async function handleUpdateOrCreateSlider() {
    slidersNew.map(
      (e) => {
        sliderService.create(e)
      }
    )

    sliders.map(
      (e) => {
        if (!e.id) return;
        sliderService.update(e.id, e)
      }
    )

    closeModalSlider()
    closeModalSliderNew()
  }

  //socialMedia
  async function handleCreateOrUpdateSocialMedia() {
    console.log("entrei entrei")


    let data = {
      facebook:  facebook,
      instagram: instagram,
      whatsapp:  whatsapp,
    }

    console.log(data)
    console.log("socialMedias.id")
    console.log(socialMedias.id)
    let createdSocialMedia;
    if(!socialMedias.id) createdSocialMedia = await socialMediaService.create(data)
    if(socialMedias.id) createdSocialMedia = await socialMediaService.update(socialMedias.id, data)
    
    // closeModalSocialMedia()
  }

  //categories
  async function handleCreateCategories() {
    let data = {
      titulo: categoriaTitulo
    }

    let newCategory = await categoriaService.create(data)

    categoriasNew.map(
      async (e) => {
        e.categoriaId = newCategory.id
        console.log(e)
        let newCategorieItem = await categoriaItemService.create(e)
        console.log(newCategorieItem)
      }
    )

    if (newCategory) closeModalCategoriesNew()
    handleLoadCategorias()
  }


  async function handleUpdateCategories() {
    let data = {
      titulo: categoriaTitulo
    }

    let updatedCategory = await categoriaService.update(categoriaSeleted.id, data)


    categoriaItemSeleted.map(
      async (e) => {
        console.log(e)
        let newCategorieItem;
        if (e.id) newCategorieItem = await categoriaItemService.update(e.id, e)
      }

    )

    categoriasNew.map(
      async (e) => {
        e.categoriaId = categoriaSeleted.id
        console.log(e)
        let newCategorieItem = await categoriaItemService.create(e)
      }
    )

    if (updatedCategory) closeModalCategoriesChange()

    handleLoadCategorias()
  }




/*
 =====================================================================================================
                                 Handle Change Screen elements 
 =====================================================================================================
 */
  const addFormFields = (state, setState) => {
    // @ts-ignore
    setState([...state, {}])
  }

  const handleChangeState = (i, e, state, setState) => {

    console.log("e.target.value")
    console.log(e.target.value)

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


  const handleChangeStateSlide = async (i, e, state, setState) => {
    let image = await handleUploadImage(e.target.files[0])

    const newFormValues = [...state]
    // @ts-ignore
    newFormValues[i][e.target.name] = image

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

  //===============================   open modal functions   =========================================
  function openModalLanding() {
    setIsOpenModalLanding(true)
  }
  function openModalAbout() {
    setIsOpenModalAbout(true)
  }
  function openModalCategories() {
    setIsOpenModalCategories(true)
  }
  function openModalCategoriesNew() {
    setIsOpenModalCategoriesNew(true)
  }

  function openModalCategoriesChange() {
    setIsOpenModalCategoriesChange(true)
  }


  function openModalSocialMedia() {
    setIsOpenModalSocialMedia(true)
  }
  function openModalSlider() {
    setIsOpenModalSlider(true)
  }
  function openModalSliderNew() {
    setIsOpenModalSliderNew(true)
  }

  //===============================   close modal functions   =========================================
  function closeModalLanding() {
    setIsOpenModalLanding(false)
  }
  function closeModalAbout() {
    setIsOpenModalAbout(false)
  }
  function closeModalCategories() {
    setIsOpenModalCategories(false)
  }
  function closeModalCategoriesNew() {
    setIsOpenModalCategoriesNew(false)
  }


  function closeModalCategoriesChange() {
    setIsOpenModalCategoriesChange(false)
  }

  function closeModalSocialMedia() {
    setIsOpenModalSocialMedia(false)
  }
  function closeModalSlider() {
    setIsOpenModalSlider(false)
  }
  function closeModalSliderNew() {
    setIsOpenModalSliderNew(false)
  }


  return (
    <>

      <FlexContainer>

        <FlexButtons>
          <button
            onClick={openModalLanding}
          >
            Abrir Landing
          </button>
        </FlexButtons>

        <FlexButtons>
          <button
            onClick={openModalAbout}
          >
            Abrir About
          </button>
        </FlexButtons>

        <FlexButtons>
          <button
            onClick={openModalCategories}
          >
            Abrir Categorias
          </button>
        </FlexButtons>

        {/*
        <FlexButtons>
          <button
          onClick={openModalCategoriesNew}
          >
            Abrir CategoriesNew
          </button>
        </FlexButtons>
        */}

        <FlexButtons>
          <button
            onClick={openModalSocialMedia}
          >
            Abrir SocialMedia
          </button>
        </FlexButtons>

        <FlexButtons>
          <button
            onClick={openModalSlider}
          >
            Abrir Slider
          </button>
        </FlexButtons>

        {/*
        <FlexButtons>
          <button
          onClick={openModalSliderNew}
          >
            Abrir SliderNew
          </button>
        </FlexButtons>
        */}

      </FlexContainer>



      {/* 
=====================================================================================================
                                  Page Components 
=====================================================================================================
*/}

      <Menu
      logoBranca={logoBranca}
      facebookLink={facebook}
      instagramLink={instagram}
      whatsappLink={whatsapp}
      />
      <Landing
        titulo={titulo}
        logo={logo}
        logoBranca={logoBranca}
        backgroundWide={backgroundWide}
        backgroundMobile={backgroundMobile}
        facebookLink={facebook}
        instagramLink={instagram}
        whatsappLink={whatsapp}
      />


      <About
        enderecoDesc={sobre?.enderecoDesc}
        enderecoTitulo={sobre?.enderecoDesc}
        faleConoscoTitulo={sobre?.enderecoDesc}
        faleConoscoDesc={sobre?.enderecoDesc}
        horFuncDesc={sobre?.enderecoDesc}
        horFuncTitulo={sobre?.enderecoDesc}
        sobreTitulo={sobre?.sobreTitulo}
        sobreDesc={sobre?.sobreDesc}
      />

      <Prices
        backgroundPricesMobile={backgroundPricesMobile}
        backgroundPricesWide={backgroundPricesWide}
        categories={categorias}
      />
      <Carrousel
        sliders={sliders}
      />





      {/* 
=====================================================================================================
                                  Modals Components 
=====================================================================================================
*/}

      {/* 
=======================================   LANDING   =================================================
*/}

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
          onSubmit={e => {
            e.preventDefault()
            handleUpdateOrCreateLanding()
          }
          }
        >
          <h3>Landing Page</h3>

          <ContentFormNew>
            <label htmlFor="">Geral</label>
            <TextField
              // value={nome}
              type="text"
              defaultValue={landing?.titulo}
              placeholder="Título da Página"
              onChange={e => setTitulo(e.target.value)}
            />
          </ContentFormNew>

          <ContentFormNew>
            <label htmlFor="">Logo</label>
            <input
              name="courseImage"
              type="file"
              onChange={(e) => {
                handleUploadImage(e.target.files[0], setLogo)
              }}
            />
            <img className='logo' src={logo} alt="" />
          </ContentFormNew>

          <ContentFormNew>
            <label htmlFor="">Logo Branca</label>
            <input
              name="courseImage"
              type="file"
              onChange={(e) => {
                handleUploadImage(e.target.files[0], setLogoBranca)
              }}
            />
            <img className='logo' src={logoBranca} alt="" />
          </ContentFormNew>

          <ContentFormNew>
            <label htmlFor="">Background do cabeçalho para dispositívos widescreen</label>
            <p > (computadores e tvs )</p>
            <input
              name="courseImage"
              type="file"
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
              onChange={(e) => {
                handleUploadImage(e.target.files[0], setBackgroundPricesMobile)
              }}
            />
            <img src={backgroundPricesMobile} alt="" />
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


{/* 
====================================   SOCIAL MEDIA   ==============================================
*/}
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
          onSubmit={
            (e) =>{
              e.preventDefault()
              handleCreateOrUpdateSocialMedia()
            }
          }
        >
          <h2>
            Mídias Sociais
          </h2>


          <ContentFormNew>
            <label htmlFor="">Link do Facebook</label>
            <input
              type="text"
              value={facebook}
              onChange={(e) => setFacebook(e.target.value)}
            />
          </ContentFormNew>



          <ContentFormNew>
            <label htmlFor="">Link do Instagram</label>
            <input
              type="text"
              value={instagram}
              onChange={(e) => setInstagram(e.target.value)}
            />
          </ContentFormNew>



          <ContentFormNew>
            <label htmlFor="">Link do Whatsapp</label>
            <input
              type="text"
              value={whatsapp}
              onChange={(e) => setWhatsapp(e.target.value)}
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
            
            // <input 
            // type="submit"
            // value="ente"
            // />
            <SubmitButton
              title="Enviar"
            />
            
          )}
        </ModalContent>
      </Modal>

      {/* 
====================================   ABOUT MODAL   ==============================================
*/}

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
              defaultValue={sobre?.horFuncTitulo}
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
              defaultValue={sobre?.horFuncDesc}
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
              defaultValue={sobre?.enderecoTitulo}
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
              defaultValue={sobre?.enderecoDesc}
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
              defaultValue={sobre?.faleConoscoTitulo}
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
              defaultValue={sobre?.sobreTitulo}
              {...register('sobreTitulo', {
                required: {
                  value: true,
                  message: 'Todos os campos são obrigatórios',
                },
              })}
            />
            <label htmlFor="">Descrição</label>
            <input
              type="text"
              defaultValue={sobre?.sobreDesc}
              {...register('sobreDesc', {
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

      {/* 
====================================    SLIDER    ==============================================
*/}

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
            handleUpdateOrCreateSlider()

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
                      onChange={
                        (e) => handleChangeStateSlide(i, e, sliders, setSliders)
                      }
                    />
                    <ActionButton
                      className='btn-actions btn-trash'
                      type='button'
                      onClick={() => removeFormFields(i, sliders, setSliders)}
                    >
                      <FiTrash />
                    </ActionButton>
                    {/*
                    <ActionButton
                      type='button'
                      className='btn-actions'
                      onClick={() => addFormFields(slidersNew, setSlidersNew)}
                    >
                      <FiPlus />
                    </ActionButton>
                    */}
                  </ButtonsHolder>
                  <label htmlFor=""> Texto alternativo para deficientes visuais</label>
                  <input
                    type="text"
                    defaultValue={e.texto}
                    name="texto"
                    onChange={(e) => handleChangeState(i, e, slidersNew, setSlidersNew)}
                  />
                  <img src={e.imagem} alt="" />
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
                        onChange={(e) => handleChangeStateSlide(i, e, slidersNew, setSlidersNew)}
                      />
                      <ActionButton
                        className='btn-actions btn-trash'
                        type='button'
                        onClick={() => removeFormFields(i, slidersNew, setSlidersNew)}
                      >
                        <FiTrash />
                      </ActionButton>
                    </ButtonsHolder>
                    <label htmlFor=""> Texto alternativo para deficientes visuais </label>
                    <input
                      type="text"
                      name="texto"
                      onChange={(e) => handleChangeState(i, e, slidersNew, setSlidersNew)}
                    />
                    <img src={e.imagem} alt="" />

                    <hr />
                  </ContentFormNew>
                )
              )
            }
          <ActionButton
            type='button'
            className='btn-actions'
            onClick={() => addFormFields(slidersNew, setSlidersNew)}
          >
            <FiPlus />
          </ActionButton>

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
====================================    Categorias    ==============================================
*/}

      <Modal
        isOpen={isOpenModalCategories}
        onRequestClose={closeModalCategories}
        overlayClassName='react-modal-overlay'
        className='react-modal-content'
      >
        <button
          className='react-modal-close'
          type='button'
          onClick={closeModalCategories}
        >
          <FiX />
        </button>
        <ModalContent
          onSubmit={(e) => {
            e.preventDefault()

          }}
        >
          <h2>
            Categorias
          </h2>
          {
            categorias.map(
              (e, i) => (
                <ContentFormNew>
                  <label htmlFor="">Imagem</label>
                  <ButtonsHolder>
                    <p>
                      {
                        e.titulo
                      }
                    </p>
                    <ActionButton
                      className='btn-actions btn-trash'
                      type='button'
                      onClick={() => removeFormFields(i, categorias, setCategorias)}
                    >
                      <FiTrash />
                    </ActionButton>
                    <ActionButton
                      type='button'
                      className='btn-actions'
                      // onClick={() => addFormFields(categoriasNew, setCategoriasNew)}
                      onClick={() => {
                        setCategoriaSeleted(e)
                        setCategoriaItemSeleted(e.categoriaItem)
                        setCategoriaTitulo(e.titulo)
                        openModalCategoriesChange()
                      }
                      }
                    >
                      <FiEdit />
                    </ActionButton>
                  </ButtonsHolder>
                  <hr />
                </ContentFormNew>
              )
            )
          }



          <ActionButton
            type='button'
            className='btn-actions'
            onClick={() => openModalCategoriesNew()}
          >
            <FiPlus />
          </ActionButton>

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

      {/* ====================================  Create  Categorias   */}


      <Modal
        isOpen={isOpenModalCategoriesNew}
        onRequestClose={closeModalCategoriesNew}
        overlayClassName='react-modal-overlay'
        className='react-modal-content'
      >
        <button
          className='react-modal-close'
          type='button'
          onClick={closeModalCategoriesNew}
        >
          <FiX />
        </button>
        <ModalContent
          onSubmit={(e) => {
            e.preventDefault()
            handleCreateCategories()

          }}
        >
          <h2>
            Categorias
          </h2>
          <ContentFormNew>
            <label htmlFor=""> Titulo</label>
            <input
              type="text"
              onChange={e => setCategoriaTitulo(e.target.value)}
            />
          </ContentFormNew>
          {
            categoriasNew.map(
              (e, i) => (
                <ContentFormNew>
                  <label htmlFor=""> Titulo</label>
                  <ButtonsHolder>
                    <input
                      type="text"
                      name='titulo'
                      // TODO handle change no upload  porra!
                      onChange={
                        (e) => handleChangeState(i, e, categoriasNew, setCategoriasNew)
                      }
                    />
                    <ActionButton
                      className='btn-actions btn-trash'
                      type='button'
                      onClick={() => removeFormFields(i, categoriasNew, setCategoriasNew)}
                    >
                      <FiTrash />
                    </ActionButton>

                    <ActionButton
                      type='button'
                      className='btn-actions'
                      onClick={() => addFormFields(categoriasNew, setCategoriasNew)}
                    >
                      <FiPlus />
                    </ActionButton>

                  </ButtonsHolder>

                  <ContentFormNew>
                    <label htmlFor=""> Descrição</label>
                    <input
                      type="text"
                      name='desc'
                      onChange={(e) => handleChangeState(i, e, categoriasNew, setCategoriasNew)}
                    />
                  </ContentFormNew>


                  <ContentFormNew>
                    <label htmlFor=""> Preço</label>
                    <input
                      type="text"
                      name='preco'
                      onChange={(e) => handleChangeState(i, e, categoriasNew, setCategoriasNew)}
                    />
                  </ContentFormNew>

                  <hr />
                </ContentFormNew>
              )
            )
          }


          <ActionButton
            type='button'
            className='btn-actions'
            onClick={() => addFormFields(categoriasNew, setCategoriasNew)}
          >
            <FiPlus />
          </ActionButton>

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




      {/* ====================================  Update  Categorias   */}
      <Modal
        isOpen={isOpenModalCategoriesChange}
        onRequestClose={closeModalCategoriesChange}
        overlayClassName='react-modal-overlay'
        className='react-modal-content'
      >
        <button
          className='react-modal-close'
          type='button'
          onClick={closeModalCategoriesChange}
        >
          <FiX />
        </button>
        <ModalContent
          onSubmit={(e) => {
            e.preventDefault()
            handleUpdateCategories()

          }}
        >
          <h2>
            Categorias
          </h2>
          <ContentFormNew>
            <label htmlFor=""> Titulo</label>
            <input
              type="text"
              value={categoriaTitulo}
              onChange={e => setCategoriaTitulo(e.target.value)}
            />
          </ContentFormNew>

          {
            categoriaItemSeleted.map(
              (e, i) => (
                <ContentFormNew>
                  <label htmlFor=""> Titulo</label>
                  <ButtonsHolder>
                    <input
                      type="text"
                      name='titulo'
                      defaultValue={e.titulo}
                      onChange={
                        (e) => handleChangeState(i, e, categoriaItemSeleted, setCategoriaItemSeleted)
                      }
                    />
                    <ActionButton
                      className='btn-actions btn-trash'
                      type='button'
                      onClick={() => removeFormFields(i, categoriaItemSeleted, setCategoriaItemSeleted)}
                    >
                      <FiTrash />
                    </ActionButton>

                    <ActionButton
                      type='button'
                      className='btn-actions'
                      onClick={() => addFormFields(categoriaItemSeleted, setCategoriaItemSeleted)}
                    >
                      <FiPlus />
                    </ActionButton>

                  </ButtonsHolder>

                  <ContentFormNew>
                    <label htmlFor=""> Descrição</label>
                    <input
                      type="text"
                      name='desc'
                      defaultValue={e.desc}
                      onChange={(e) => handleChangeState(i, e, categoriasNew, setCategoriasNew)}
                    />
                  </ContentFormNew>


                  <ContentFormNew>
                    <label htmlFor=""> Preço</label>
                    <input
                      defaultValue={e.preco}
                      type="text"
                      name='preco'
                      onChange={(e) => handleChangeState(i, e, categoriasNew, setCategoriasNew)}
                    />
                  </ContentFormNew>

                  <hr />
                </ContentFormNew>
              )
            )
          }


          {
            categoriasNew.map(
              (e, i) => (
                <ContentFormNew>
                  <label htmlFor=""> Titulo</label>
                  <ButtonsHolder>
                    <input
                      type="text"
                      name='titulo'
                      // TODO handle change no upload  porra!
                      onChange={
                        (e) => handleChangeState(i, e, categoriasNew, setCategoriasNew)
                      }
                    />
                    <ActionButton
                      className='btn-actions btn-trash'
                      type='button'
                      onClick={() => removeFormFields(i, categoriasNew, setCategoriasNew)}
                    >
                      <FiTrash />
                    </ActionButton>

                    <ActionButton
                      type='button'
                      className='btn-actions'
                      onClick={() => addFormFields(categoriasNew, setCategoriasNew)}
                    >
                      <FiPlus />
                    </ActionButton>

                  </ButtonsHolder>

                  <ContentFormNew>
                    <label htmlFor=""> Descrição</label>
                    <input
                      type="text"
                      name='desc'
                      onChange={(e) => handleChangeState(i, e, categoriasNew, setCategoriasNew)}
                    />
                  </ContentFormNew>


                  <ContentFormNew>
                    <label htmlFor=""> Preço</label>
                    <input
                      type="text"
                      name='preco'
                      onChange={(e) => handleChangeState(i, e, categoriasNew, setCategoriasNew)}
                    />
                  </ContentFormNew>

                  <hr />
                </ContentFormNew>
              )
            )
          }


          <ActionButton
            type='button'
            className='btn-actions'
            onClick={() => addFormFields(categoriasNew, setCategoriasNew)}
          >
            <FiPlus />
          </ActionButton>

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
    </>
  );
}


/*
Modal, dentro dele as existentes
  abrir modal para novo
  e abrir modal para alteração
*/