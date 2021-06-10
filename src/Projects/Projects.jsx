import React from 'react'

import cssonly from './imgs/css.png'
import jsonly from './imgs/js.png'
import maze from './imgs/maze.png'
import calc from './imgs/calc.png'
import asist from './imgs/asist.png'

import './projects.css'

const titulos = ['Single div css image', 'Chat en JS', 'Maze in react', 'Calculadora en react', 'PWA para asistencia']
const imagenes = [cssonly, jsonly, maze, calc, asist]
const links = ['http://ubeje.xyz/18096/lab4/pokeball.html', 'http://ubeje.xyz/18096/lab05/', 'http://ubeje.xyz/18096/lab06/', 'http://ubeje.xyz/18096/lab7/dist/', 'https://fir-web-lab7.web.app/']
const elementos = []

for (let i = 0; i < titulos.length; i += 1) {
  elementos.push(
    <li>
      <a href={links[i]}>
        <img src={imagenes[i]} alt={`proyecto ${i}`} />
        <span>{titulos[i]}</span>
      </a>
    </li>,
  )
}

const Projects = () => (
  <div id="projects">
    <h1>Proyectos</h1>
    <ul>{elementos}</ul>
  </div>
)

export default Projects
