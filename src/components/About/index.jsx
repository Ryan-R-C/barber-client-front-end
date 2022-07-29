
import { Image } from './styles';
import './about.css'
import { useState } from 'react';

const About = (
    {
        enderecoDesc,
        enderecoTitulo,
        faleConoscoTitulo,
        faleConoscoDesc,
        horFuncDesc,
        horFuncTitulo,
        sobreTitulo,
        sobreDesc,
    }
  ) => {


  return (
    <>
      <section id="about">
        <div className="about__container">
            <section className="about__section intro-disabled">
                {/*
                <h2 className="about__header">Agendamento</h2>
                <time className="about__paragraph bold">
                    Seg. 14h às 19h<br />
                    Ter. à Sex. 11h às 19h<br />
                    Sab. 10h às 18h.
                </time>
                */}

                <h2 className="about__header">{ horFuncTitulo }</h2>
                <time className="about__paragraph bold">
                    { horFuncDesc }
                </time>
            </section>
            <section className="about__section intro-disabled">
                {/* <h2 className="about__header">Endereço</h2>
                <address className="about__paragraph bold">Rua Newton Prado 47 - <strong>Centro - Porto Feliz</strong> <br />n°800</address> */}
                <h2 className="about__header">{ enderecoTitulo }</h2>
                <address className="about__paragraph bold"> <strong> { enderecoDesc } </strong> </address>
            </section>
            <section className="about__section intro-disabled">
                <h2 className="about__header"> {faleConoscoTitulo} </h2>
                <address className="about__paragraph bold">
                {/* <a href="mailto:Brunobarbeariadoparra@gmail.com" className="anchor-tag-white">Brunobarbeariadoparra@gmail.com</a> */}
                <br />
                { faleConoscoDesc }
                </address>
            </section>
        </div>
        <div className="about__container">
            <section className="about__section about__apresentation intro-disabled">
                <h2>{ sobreTitulo }</h2>
                <p className="about__paragraph justify">
                    <strong>
                        { sobreDesc }
                    </strong>
                </p>
            </section>
        </div>
    </section>
    </>
  );
}
export default About
