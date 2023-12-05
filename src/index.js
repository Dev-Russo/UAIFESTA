import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import App from './componentes/pagina 1/home';
import 'bootstrap/dist/css/bootstrap.min.css';
import Meucadastro from './componentes/Perfil/Index';
import Anuncios from './componentes/Anuncios/Index';
import Login from './componentes/login';
import Esqueciminhasenha from './componentes/esqueciminhasenha'
import Codigo from './componentes/codigo/Index';
import Register from './componentes/registrarse/Index';
import Alterar from './componentes/alterarsenha/Index';
import Produto from './componentes/Produto/Index';

const rotas = (
  <Router>
    <Switch>
      <Route path='/' exact component={App}/>
      <Route path="/meucadastro" component={Meucadastro} />
      <Route path="/anuncios" component={Anuncios}/>
      <Route path="/login" component={Login}/>
      <Route path="/esqueciminhasenha" component={Esqueciminhasenha}/>
      <Route path="/codigo" component={Codigo}/>
      <Route path="/registrese" component={Register}/>
      <Route path="/alterar" component={Alterar}/>
      <Route path="/produto" component={Produto}/>
    </Switch>
  </Router>
);

ReactDOM.render(
  <React.StrictMode>
    {rotas}
  </React.StrictMode>,
  document.getElementById('root')
);
