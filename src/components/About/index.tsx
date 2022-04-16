
import { Image } from './styles';
import './about.css'
import { useState } from 'react';

const About = (
  // { imageLink, imageSrc }: { imageLink: string, imageSrc: string }
  ) => {


  return (
    <>
      <section id="about">
        <div className="about__container">
            <section className="about__section intro-disabled">
                <h2 className="about__header">Agendamento</h2>
                <time className="about__paragraph bold">
                    Seg. 14h às 19h<br />
                    Ter. à Sex. 11h às 19h<br />
                    Sab. 10h às 18h.</time>
            </section>
            <section className="about__section intro-disabled">
                <h2 className="about__header">Endereço</h2>
                <address className="about__paragraph bold">Rua Newton Prado 47 - <strong>Centro - Porto Feliz</strong> <br />n°800</address>
            </section>
            <section className="about__section intro-disabled">
                <h2 className="about__header">Fale conosco</h2>
                <address className="about__paragraph bold"><a href="mailto:Brunobarbeariadoparra@gmail.com" className="anchor-tag-white">Brunobarbeariadoparra@gmail.com</a>
                <br />
                Tel. (15) 99770-2196
                </address>
            </section>
        </div>
        <div className="about__container">
            <section className="about__section about__apresentation intro-disabled">
                <h2>Sobre</h2>
                <p className="about__paragraph justify">Somos uma barbearia do <strong>centro de Porto Feliz</strong>. Barba e cabelo é com a gente! O que tá esperando? Vem tratar sua barba como ela merece!</p>
            </section>
        </div>
    </section>
    </>
  );
}
export default About
