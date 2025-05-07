import './App.css';
import Header from './componentes/Header/Header';
import Sobre from './componentes/Sobre/Sobre';
import Filosofia from './componentes/Filosofia/Filosofia';
import Institucional from './componentes/Institucional/Institucional';
import Footer from './componentes/Footer/Footer';
import Receitas from './componentes/Receitas/Receitas';


function App() {
  return (
    <div className="App">
      <Header />
      <Sobre />
      <Filosofia />
      <Institucional />
      <Receitas />
      <Footer />

    </div>
  );
}

export default App;
