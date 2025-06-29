import Header from '../../componentes/Header'
import Sobre from '../../componentes/Sobre';
import Filosofia from '../../componentes/Filosofia';
import Institucional from '../../componentes/Institucional';
import Footer from '../../componentes/Footer';
import Receitas from '../../componentes/Receitas';


export default function Inicio () {
    return (
        <div>
            <Header />
            <Sobre />
            <Filosofia />
            <Institucional />
            <Receitas />
            <Footer />
        </div>
        
    )
}