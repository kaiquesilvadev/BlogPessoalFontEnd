import Home from './paginas/home/Home';
import './App.css'
import { Grid } from '@material-ui/core'
import NavBar from './components/estaticos/navBar/NavBar';
import Footer from './components/estaticos/footer/Footer';

function App() {
  return (
    <>
      <NavBar />
      <Home />
      <Footer />
    </>
  );
}

export default App
