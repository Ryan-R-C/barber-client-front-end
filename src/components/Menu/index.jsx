
import { Image } from './styles';
import './nav.css'

import './nav-responsive.css'
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Menu = (
  {
    facebookLink,
    instagramLink,
    whatsappLink,
    logoBranca
  }
) => {

  const [isMenuActive, setIsMenuActive] = useState(false);


  let socialMedias = [
    { 
      href:  facebookLink,
      icon:  'facebook'
    },
    { 
      href:  instagramLink,
      icon:  'instagram'
    },
    
  ]

  let pageComponents = [
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
            <img src={logoBranca} alt="" className="header-page__logo" />
          </h2>
          <nav className="responsive-navbar">
            <ul className="responsive-navbar__nav-list"
              style={
                {
                  transform: isMenuActive ? `translateX(0%)` : `translateX(100%)`,
                }
              }
            >
              <li className="responsive-navbar__nav-list__list-el">
                <a href={whatsappLink} className="list-el__link">Agendar</a>
              </li>
              <li className="responsive-navbar__nav-list__list-el--social-links">
                {
                  socialMedias.map(
                    socialMedia => (
                    <a href={socialMedia.href} target="_blank" className="responsive-navbar__anchor">
                      <FontAwesomeIcon icon={["fab", socialMedia.icon]} />
                    </a>
                    )
                  )
                }


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
