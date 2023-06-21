import Home from './paginas/home/Home';
import './App.css'
import NavBar from './components/estaticos/navBar/NavBar';
import Footer from './components/estaticos/footer/Footer';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './paginas/login/Login';
import CadastroUsuario from './paginas/cadastroUsuario/CadastroUsuario'
import ListaTema from './components/temas/listaTema/ListaTema';
import ListaPostagem from './components/postagens/listaPostagem/ListaPostagem';

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <div style={{ minHeight: '100vh' }}>
          <Routes> // Antigo Switch
          <Route path="/" element={<Login  />} />

            <Route path="/home" element={<Home />} />

            <Route path="/login" element={<Login />} />

            <Route path="/cadastrousuario" element={<CadastroUsuario/>} />

            <Route path="/temas" element={<ListaTema />} />

            <Route path="/posts" element={<ListaPostagem />} />
                      </Routes>
                    </div>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App