
import { Image } from './styles';
import './header.css'
import './header-content.css'
import { useEffect, useState } from 'react';

function Landing  ( {
    titulo,
    backgroundWide,
    backgroundMobile,
  } ){
  const mediaMatch = window.matchMedia('(min-width: 768px)');
  const [matches, setMatches] = useState(mediaMatch.matches);

  useEffect(() => {
    const handler = (e) => setMatches(e.matches);
    mediaMatch.addListener(handler);
    return () => mediaMatch.removeListener(handler);
  }
  );

  const headerStyle = {
    background: (isRowBased) => ({
      background: isRowBased ? `linear-gradient(rgba(255,255,255,0.5), rgba(255,255,255,0.5)), url("${backgroundWide}") no-repeat` : `linear-gradient(rgba(255,255,255,0.5), rgba(255,255,255,0.5)), url(${backgroundMobile}) no-repeat`
    })
  }

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
      <header id="header"
      style={headerStyle.background(matches)}
      >
        <div 
        id="header-page"
        >
            <div className="header-page__holder header-page__holder-logo">
                <img src="https://i.ibb.co/Q9rw5gm/logo-preta.png" alt="" className="header-page__logo" />
                <nav className="header-page__nav">
                    <ul className="header-page__unored-list">
                        {
                        pageComponents.map(
                          (component) => (
                            <li
                            className="header-page__list-element"> 
                              <a
                              href={component.href}
                              className="header-page__anchor">
                                {component.title}
                              </a>
                            </li>

                            
                            )
                        )
                        }
                    </ul>
                </nav>
            </div>
            <div className="header-page__holder">
                <nav className="header-page__nav">
                  <a href="https://api.whatsapp.com/send?phone=+5515997702196" className="btn">Agendar</a>
                </nav>
                <nav className="header-page__nav">
                    <ul className="header-page__unored-list social-media">
                        <li className="header-page__list-element">
                          <a href="https://www.facebook.com/Barbearia-do-Parra-108829248169948/ "  target="_blank" className="header-page__anchor">Facebook</a>
                        </li>
                        <li className="header-page__list-element">
                          <a href="https://www.instagram.com/barbeariadoparraa/" target="_blank" className="header-page__anchor">Instagram</a>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
        {/* <h1 id="header-page__title">
          Um lugar<br/>
          de homem<br/>
          <span className='title-marker'>com estílo</span>
        </h1> */}
        <h1 id="header-page__title">
          {titulo}
        </h1>
    </header>   
    </>
  )
}
export default Landing
