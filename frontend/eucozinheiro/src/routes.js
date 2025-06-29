import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Inicio from './paginas/Inicio'
import CadastroUsuario from './paginas/CadastroUsuarios';
import Menu from './componentes/Menu';
/*
  * As rotas são definidas aqui, no arquivo routes.js
  * Os componentes renderizados pelas rotas são definidos através dos index.js de cada pasta dentro de paginas e nas páginas chama os componentes correspondentes contruídos dentro de componentes
  * A rota raiz (/) leva para a página inicial (Inicio) 
  * A rota /cadastrousuario leva para a página de cadastro de usuários (CadastroUsuario)
  * Qualquer outra rota não definida leva para uma página de erro 404
*/

function AppRoutes() {
  return (
      
      <BrowserRouter>
        <Menu />
        <Routes>  
          <Route path="/" element={<Inicio />} />
          <Route path="/cadastrousuario" element={<CadastroUsuario />} />
          <Route path="*" element={<div> Página não encontrada. </div>} />
        </Routes>
      </BrowserRouter>
  );
}

export default AppRoutes;
