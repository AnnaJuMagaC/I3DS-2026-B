import './App.css'
import Sobre from './pages/Sobre'
import Home from './pages/Home'
import Contato from './pages/Contato'
import NaoEncontrado from './pages/NaoEncontrado'
import { Route, Routes } from 'react-router'
import Header from './components/header/Header'
import Rodape from './components/rodape/Rodape'

function App() {
  return (    
    <>
      <Header />

      <div className="containerApp">
      <Routes> {/* Identifica todas as rotas do sistema */}
        <Route path='/' element={<Home/>} />
        <Route path='/sobre' element={<Sobre/>} /> {/* Uma rota do sistema */}
        <Route path='/contato' element={<Contato/>} />
        <Route path='*' element={<NaoEncontrado/>} />
      </Routes>
      </div>

      <Rodape link={"https://github.com/AnnaJuMagaC"}>AnnaJuMagaC</Rodape>
    </>  
  );                                                                                                                                                                                                    
}

export default App
