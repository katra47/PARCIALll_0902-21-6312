import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import img from '../src/img/OIP.jpeg'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Mi biografia </h1>
      <p>Me llamo <b>Marlon Chacon</b> y soy estudiante de ingenieria de sistemas en la <b>UMG</b> </p>
      <p>Me gusta mucho la tecnologia y el desarrollo web, me gusta aprender nuevas tecnologias y aplicaciones para mejorar mis habilidades</p>
      <img src={img} alt="foto" style={{width: '200px', height: '200px', borderRadius:'50%'}} />
      <h2>Mis retos</h2>
      <div className='reetos'>
        <li>Aprender ingles </li>
        <li>Aprender mas sobre React y otras aplicaciones </li>
        <li>Aprender mas sobre la programacion </li>
        <li>Aprender mas sobre el desarrollo web </li>
        <li>Aprender mas sobre la tecnologia </li>
      </div>

      
      <h3>Mis pasatiempos </h3>
      <li>Jugar futbol</li>
      <li>Ver pelicular de mideo</li>
      <li>escuchar musica</li>
    </>
  )
}

export default App
