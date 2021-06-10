import React from 'react'

import img from './avatar.png'

import './about.css'

const fechas = [2017, 2018, 2018, 2019, 2020]
const eventos = [
  'Jugador seleccionado departamental de volleyball en Guatemala',
  'Inicio de estudios en UVG en la carrera de ing. industrial',
  'Inicio en conversionaventa.com como representante de ventas en servicios de marketing digital para bienes raices',
  'Inicio en markeko.com como web designer y copywriter',
  'Cambio de ing. industrial a ing. en sistemas',
]

const elementos = []

for (let i = 0; i < 5; i += 1) {
  elementos.push(
    <li>
      <span>{fechas[i]}</span>
      <p>{eventos[i]}</p>
    </li>,
  )
}

const conocimientos = ['Marketing', 'Diseño web', 'Copywriting', 'Programación', 'Sistemas Web', 'Bases de datos'].map((str) => <li style={{ listStyle: 'square' }}>{str}</li>)

const About = () => (
  <div id="about">
    <h1>Joonho Kim</h1>
    <hr />
    <div className="top">
      <img src={img} alt="avatar" />
      <div>
        <h2>Linea del tiempo</h2>
        <ul className="timeline">
          {elementos}
        </ul>
        <h2>Conocimientos</h2>
        <ul className="conocimientos">
          {conocimientos}
        </ul>
      </div>
    </div>
  </div>
)

export default About
