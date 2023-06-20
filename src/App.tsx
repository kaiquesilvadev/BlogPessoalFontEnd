import Home from './paginas/home/Home';
import './App.css'
import NavBar from './components/estaticos/navBar/NavBar';
import Footer from './components/estaticos/footer/Footer';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './paginas/login/Logon';
import { ClassNames } from '@emotion/react';
import CadastroUsuario from './paginas/cadastroUsuario/CadastroUsuario'

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <div style={{ minHeight: '100vh' }}>
          <Routes> // Antigo Switch
            <Route path="/" element={<Login />} />
            <Route path="/login" element={<Login />} />
            <Route path="/home" element={<Home />} />
            <Route path="/cadastro" element={<CadastroUsuario />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App