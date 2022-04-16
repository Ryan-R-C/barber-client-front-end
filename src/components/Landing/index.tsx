
import { Image } from './styles';
import './header.css'
import './header-content.css'
import { useEffect, useState } from 'react';

const Landing = (
  // { imageLink, imageSrc }: { imageLink: string, imageSrc: string }
  ) => {
  const mediaMatch = window.matchMedia('(min-width: 768px)');
  const [matches, setMatches] = useState<any>(mediaMatch.matches);

  useEffect(() => {
    const handler = (e: any) => setMatches(e.matches);
    mediaMatch.addListener(handler);
    return () => mediaMatch.removeListener(handler);
  }
  );

  const headerStyle = {
    background: (isRowBased: Boolean) => ({
      background: isRowBased ? `linear-gradient(rgba(255,255,255,0.5), rgba(255,255,255,0.5)), url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSK6QIJbnsU4ZorJDCm0rRmx_cnzPk63_BIuQ&usqp=CAU") no-repeat` : 'linear-gradient(rgba(255,255,255,0.5), rgba(255,255,255,0.5)), url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYVyVz90s39VPhc-JYfamuY8Ifq6yBmGKVxg&usqp=CAU") no-repeat'
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
        <h1 id="header-page__title">
          Um lugar<br/>
          de homem<br/>
          <span>com estílo</span>
        </h1>
    </header>   
    </>
  )
}
export default Landing
