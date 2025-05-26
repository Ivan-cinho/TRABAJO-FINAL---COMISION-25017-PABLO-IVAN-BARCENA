import { useState } from 'react'
import NavBar from './componentes/NavBar'
import Home from './Paginas/Home'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Footer from './componentes/Footer'
import Login from './Paginas/Login'
import Usuario from './Paginas/Usuario'
import RutaProtegida from './componentes/RutaProtegida'
import Administracion from './Paginas/Administracion'
import SobreNos from './Paginas/SobreNos'
import Electronica from './Paginas/Electronica'
import Joyeria from './Paginas/Joyeria'
import Ropa from './Paginas/Ropa'

function App() {
  return (
    <div>
      <Router>
        <NavBar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/productos' element={<SobreNos/>}/>
          <Route path='/electronica' element={<Electronica/>}/>
          <Route path='/joyeria' element={<Joyeria/>}/> 
          <Route path='/ropa' element={<Ropa/>}/>
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
