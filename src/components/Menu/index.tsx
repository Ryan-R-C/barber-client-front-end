
import { Image } from './styles';
import './nav.css'

import './nav-responsive.css'
import { useState } from 'react';

const Menu = (
  // { imageLink, imageSrc }: { imageLink: string, imageSrc: string }
  ) => {

    const [isMenuActive, setIsMenuActive] = useState(false);
  

  const navSlide = () => {
    const burger = document.querySelector(".burger")
    const nav = document.querySelector(".responsive-navbar__nav-list")
    const liLinks = document.querySelectorAll("responsive-navbar__nav-list__list-el")

        //@ts-ignore
        burger.addEventListener('click', () => {
            //Toggle Nav
              //@ts-ignore
            nav.classList.toggle('nav-list--active')
            //Animate Links    
            liLinks.forEach((link, index) => {
                //@ts-ignore
                if(link.style.animation){
                          //@ts-ignore
                    link.style.animation = ``
                }
                else{
                          //@ts-ignore
                    link.style.animation = `nav-link--fade  0.5s ease fowards ${index/ 7 + 1.5}s`
                }
                })
    })
  }
  /*
  Quando o hamburger é clicado 
    ele adiciona a classe
      ativa no ul
      faz um map adicionado as animações dinâmicamente

  */
  let pageComponents=[
    {
      href: '#about',
      title: 'Sobre'
    },
    {
      href: '#prices',
      title: 'Preços'
    },
    {
      href: '#last-clone',
      title: 'Mural'
    },
  ]

  return (
    <>
      <div id="nav-bar">
        <div className="container">
          <h2>
            <img src="https://i.ibb.co/7k7fg9G/Logo-BOa.png" alt="" className="header-page__logo" />
          </h2>
          <nav className="responsive-navbar">
            <ul className="responsive-navbar__nav-list"
            style={
              {
                transform:  isMenuActive ? `translateX(0%)` : `translateX(100%)` ,
              }
            }
            >
              <li className="responsive-navbar__nav-list__list-el">
                <a href="https://api.whatsapp.com/send?phone=+5515997702196" className="list-el__link">Agendar</a>
              </li>
              <li className="responsive-navbar__nav-list__list-el--social-links">
                <a href="https://www.facebook.com/Barbearia-do-Parra-108829248169948/" target="_blank" className="header-page__anchor"><span className="fab fab--white fa-facebook-f"></span> </a>
                <a href="https://www.instagram.com/barbeariadoparraa/" target="_blank" className="header-page__anchor"><span className="fab fab--white fa-instagram"></span></a>
              </li>
              {
              pageComponents.map(
                (component) => (
                  <li
                  className="responsive-navbar__nav-list__list-el">
                    <a
                    href={component.href}
                    className="list-el__link">
                      {component.title}
                    </a>
                  </li>
                  )
              )
              }
            </ul>
          </nav>
            <div className="burger"
            onClick={(e) => {
              setIsMenuActive(!isMenuActive)
            }}
            >
              <div className="burger__line1"></div>
              <div className="burger__line2"></div>
              <div className="burger__line3"></div>
            </div>
        </div>
      </div>
      
    </>
  );
}
export default Menu
