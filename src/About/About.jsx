import React from 'react'

import img from './avatar.png'

const paragraph = `Jugador seleccionado departamental volleyball Guatemala 2017
Inicio UVG 2018
Inicio en conversionaventa.com como representante de ventas en servicios de marketing digital para bienes raices 2018
Inicio en markeko.com como web designer y copywriter en 2019
Cambio de ing industrial a ing en sistemas en 2020`

const About = () => (
  <div id="about">
    <img src={img} alt="avatar" />
    <div><p>{paragraph}</p></div>
  </div>
)

export default About
