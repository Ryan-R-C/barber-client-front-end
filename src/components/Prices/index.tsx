
import { Image } from './styles';
import './prices.css'
import { useState } from 'react';

const Prices = (
  // { imageLink, imageSrc }: { imageLink: string, imageSrc: string }
  ) => {


  return (
    <>
      <section
      id="prices"
      style={
        {
          backgroundImage: `linear-gradient(rgba(255,255,255,0.5), rgba(255,255,255,0.5)), url("https://i.ibb.co/3TnxbXS/Whats-App-Image-2021-10-14-at-13-49-28-20.jpg")`,
        }
      }
      >
        <div className="prices__container">
            <article className="prices__section intro-disabled">
                <h2 className="prices__header2">Barba</h2>
                <div className="height-25 height-25--dont-break">
                    <h3 className="prices__header3">Barba Tradicional</h3>
                    <p className="prices__pragraph">
                        Realizada com navalha e toalha quente.<br/>R$ 25,00    
                    </p>
                </div>
            </article>
            <article className="prices__section prices__section--last-one intro-disabled">
                <h2 className="prices__header2">Cabelo</h2>
                <div className="height-25">
                    <h3 className="prices__header3">Corte Masculino</h3>
                    <p className="prices__pragraph">Inclui lavagem e secagem
                        <br/>
                        R$ 25,00
                    </p>
                </div>
            </article>
            <article className="prices__section prices__section--last-one intro-disabled">
                <h2 className="prices__header2">Combos</h2>
                <div className="height-25 height-25--dont-break">
                    <h3 className="prices__header3">
                        Corte + Sobrancelha
                    </h3>
                    <p className="prices__pragraph prices__pragraph--last">Corte com máquina e Sobrancelha<br/>R$ 30,00
                    </p>
                </div>
                <div className="height-25">
                    <h3 className="prices__header3">Corte + Barba</h3>
                    <p className="prices__pragraph">
                        Corte com Barba na Navalha
                    <br/>
                    R$ 45,00
                    </p>
                </div>
            </article>
            <article className="prices__section intro-disabled">
                <h2 className="prices__header2">Sobrancelha</h2>
                <div className="height-25 height-25">
                    <h3 className="prices__header3"> Tradicional</h3>
                    <p className="prices__pragraph">
                        Realizada com navalha.<br/>R$ 10,00
                    </p>
                </div>
            </article>
            <article className="prices__section intro-disabled">
                <h2 className="prices__header2">Pigmentação</h2>
                <div className="height-25 height-25--dont-break">
                    <h3 className="prices__header3">Tradicional</h3>
                    <p className="prices__pragraph">
                        a partir de R$ 15,00
                    </p>
                </div>
            </article>
            <article className="prices__section intro-disabled">
                <h2 className="prices__header2">Luzes</h2>
                <div className="height-25 height-25--dont-break">
                    <h3 className="prices__header3">Tradicional</h3>
                    <p className="prices__pragraph">
                        a partit de R$ 30,00
                    </p>
                </div>
            </article>
            <article className="prices__section intro-disabled">
                <h2 className="prices__header2">Platinado</h2>
                <div className="height-25 height-25--dont-break">
                    <h3 className="prices__header3"> Tradicional</h3>
                    <p className="prices__pragraph">
                        a partir de R$ 50,00
                    </p>
                </div>
            </article>
        </div>
    </section>
    </>
  );
}
export default Prices
