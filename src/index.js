import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import App from './componentes/pagina 1/home';
import 'bootstrap/dist/css/bootstrap.min.css';
import Meucadastro from './componentes/Perfil/Index';
import Anuncios from './componentes/Anuncios/Index';

const rotas = (
  <Router>
    <Switch>
      <Route path='/' exact component={App}/>
      <Route path="/meucadastro" component={Meucadastro} />
      <Route path="/anuncios" component={Anuncios}/>
    </Switch>
  </Router>
);

ReactDOM.render(
  <React.StrictMode>
    {rotas}
  </React.StrictMode>,
  document.getElementById('root')
);
