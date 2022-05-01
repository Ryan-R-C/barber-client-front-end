import React, { useEffect, useState } from 'react';

import IportfolioInfo from '../../types/IportfolioInfo'
import Landing from '../../components/Landing';
import Menu from '../../components/Menu';
import About from '../../components/About';
import Prices from '../../components/Prices';
import Carrousel from '../../components/Carrousel';

export default function TEST() {
  const [info, setInfo] = useState([])

  function showSchedules() {
    let availableSchedules = []

    let horariosMarcados = [
      {
        start: new Date("July 4 1776 12:30"),
        end: new Date("July 4 1776 01:00"),
      },
      {
        start: new Date("July 4 1776 01:30"),
        end: new Date("July 4 1776 02:10"),
      },
    ]

    let quantidadeDeMinutos = 30
    // colocar o começo como 6:00 e 18:00 como final
    horariosMarcados.map(
      ({ start, end }, i) => {
        // todos em minutos
        // precisa-se pegar a diferença do início e fim e dividir pela quantidade de minutos que será a consulta:
        let horariosDiferenca = ( start - end ) / quantidadeDeMinutos
        // salvar em uma variavel,

        let nextHourStart = horariosMarcados[i + 1].start

        //depois pegar o horario final e fazer a diferença com a próximo horário
        let horariosDiferencaProximo = (end - nextHourStart) / quantidadeDeMinutos
        // só será necessário o horariosDiferencaProximo!!!!
        
        // MATH NECESSARY!!!
        let endFormatedTime = end.getMinutes() + end.getHours() * 60 // convert date values to math values

        let newDate = new Date("Thu Jul 04 1776 01:30:00")
        console.log(newDate)
        // Date Thu Jul 04 1776 01:00:00 GMT-0306 (Brasilia Standard Time)

        let formatedValue = new Date(newDate.getTime() + endFormatedTime * 60000)
        // Date Thu Jul 04 1776 02:00:00 GMT-0306 (Brasilia Standard Time)
        /*
        BÁSICAMENTE É NECESSÁRIO PEGAR OS MINUTOS E AS HORAS ( TRANSFORMANDO HORAS EM MINUTOS)
        
        */
        
  
      }
    )
  }
  // adicionar a horario de começo: 6:00
  // e o final 18:00
  /*
  console.log(a)
  // Date Thu Jul 04 1776 01:00:00 GMT-0306 (Brasilia Standard Time)

  let am = a.getMinutes() + a.getHours * 60
  console.log(a.getMinutes())
  0
  am = a.getMinutes() + a.getHours() * 60
  console.log(am)
  let newDate = new Date("Thu Jul 04 1776 01:00:00")
  console.log(newDate)
  // Date Thu Jul 04 1776 01:00:00 GMT-0306 (Brasilia Standard Time)

  // new Date(newDate.getTime() + am * 60000)
  // Date Thu Jul 04 1776 02:00:00 GMT-0306 (Brasilia Standard Time)
  
  
  */

  useEffect(
    () => {
      showSchedules()
    }
  )

  return (
    <>
      <h2>

      </h2>
      {/* <Menu
      /> */}
      {/* <Landing
      /> */}
      {/* <About
      /> */}
      {/* <Prices
      /> */}
      {/* <Carrousel
      /> */}
    </>
  );
}

