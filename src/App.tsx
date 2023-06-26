import Home from './paginas/home/Home';
import './App.css'
import NavBar from './components/estaticos/navBar/NavBar';
import Footer from './components/estaticos/footer/Footer';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './paginas/login/Login';
import CadastroUsuario from './paginas/cadastroUsuario/CadastroUsuario'
import ListaTema from './components/temas/listaTema/ListaTema';
import ListaPostagem from './components/postagens/listaPostagem/ListaPostagem';
import CadastroPost from './components/postagens/cadastroPost/CadastroPost';
import CadastroTema from './components/temas/cadastroTema/CadastroTema';
import DeletarPostagem from './components/postagens/deletarPostagem/DeletarPostagem';
import DeletarTema from './components/temas/deletarTema/DeletarTema';


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

            <Route path="/cadastrousuario" element={<CadastroUsuario />} />

            <Route path="/temas" element={<ListaTema />} />

            <Route path="/posts" element={<ListaPostagem />} />

            <Route path="/formularioPostagem" element={<CadastroPost />} />

            <Route path="/formularioPostagem/:id" element={<CadastroPost />} />

            <Route path="/formularioTema" element={<CadastroTema />} />

            <Route path="/formularioTema/:id" element={<CadastroTema />} />

            <Route path="/deletarPostagem/:id" element={<DeletarPostagem />} />

            <Route path="/deletarTema/:id" element={<DeletarTema />} />


          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App