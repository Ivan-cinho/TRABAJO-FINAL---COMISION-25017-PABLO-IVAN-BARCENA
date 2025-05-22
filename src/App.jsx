import { useState } from 'react'
import NavBar from './componentes/NavBar'
import Home from './Paginas/Home'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Footer from './componentes/Footer'
import Productos from './Paginas/Productos'
import Login from './Paginas/Login'
import Usuario from './Paginas/Usuario'
import RutaProtegida from './componentes/RutaProtegida'
import Administracion from './Paginas/Administracion'

function App() {


  return (
    <div>
      <Router>
        <NavBar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/productos' element={<Productos/>}/> 
          <Route path='/login' element={<Login/>}/>

          <Route path="/usuario/:id" element={
            <RutaProtegida><Usuario/></RutaProtegida>
          }/>
          <Route path="/administracion" element={
            <RutaProtegida><Administracion/></RutaProtegida>
          }/>

        </Routes>        
        <Footer/>
      </Router>
    </div>
  )
}

export default App
