import React from 'react'
import ReactDOM from 'react-dom'

import Projects from './Projects'
import About from './About'

import './styles.css'

const App = () => (
  <div id="app">
    <nav>
      <ul>
        <li><a href="#about">Acerca de</a></li>
        <li><a href="#projects">Proyectos</a></li>
      </ul>
    </nav>
    <About />
    <hr />
    <Projects />
  </div>
)

ReactDOM.render(
  <App />,
  document.getElementById('root'),
)
