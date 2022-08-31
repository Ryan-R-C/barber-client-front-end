
import { Image } from './styles';
import './prices.css'
import { useEffect, useState } from 'react';

const Prices = (
    {
        backgroundPricesMobile,
        backgroundPricesWide,
        categories
    }
) => {

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
            background: isRowBased ? `linear-gradient(rgba(255,255,255,0.5), rgba(255,255,255,0.5)), url("${backgroundPricesWide}") 50% 50%` : `linear-gradient(rgba(255,255,255,0.5), rgba(255,255,255,0.5)), url(${backgroundPricesMobile}) 50% 50%` 
        })
    }

    return (
        <>
            <section
                id="prices"
                style={headerStyle.background(matches)}
            >
                <div className="prices__container"
                //   style={headerStyle.background(matches)}
                >
                {/*
                    <article className="prices__section intro-disabled">
                        <h2 className="prices__header2">Barba</h2>
                        <div className="height-25 height-25--dont-break">
                            <h3 className="prices__header3">Barba Tradicional</h3>
                            <p className="prices__pragraph">
                                Realizada com navalha e toalha quente.<br />R$ 25,00
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
                    */}
                    {
                    categories?.map(
                        category => (
                            <article className="prices__section prices__section--last-one intro-disabled">
                                <h2 className="prices__header2">
                                    { category.titulo }
                                </h2>
                                {
                                category.categoriaItem.map(
                                    categoryItem => (
                                    <div className="height-25 height-25--dont-break">
                                        <h3 className="prices__header3">
                                            {categoryItem.titulo}
                                        </h3>
                                        <p className="prices__pragraph prices__pragraph--last">
                                            { categoryItem.desc  }<br />
                                            { categoryItem.preco }
                                        </p>
                                    </div>
                                    )
                                )
                                }
                            </article>

                        )
                    )
                    }
                </div>
            </section>
        </>
    );
}
export default Prices
