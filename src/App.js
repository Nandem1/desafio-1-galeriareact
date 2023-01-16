import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Header from './components/Header/Header'
import Card from './components/Card/Card'
import Footer from './components/Footer/Footer'

function App() {
  return (
    <>
    <Header titulo="Galeria de Imagenes con React"/>
    <Card botonTitulo="Ver mas"/>
    <Footer />
    </>
  );
}

export default App;
