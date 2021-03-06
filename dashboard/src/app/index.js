import React, { Component } from 'react'
import { Provider } from 'react-redux';
import store from './store';

import { HashRouter as Router, Route } from 'react-router-dom';

import base from './containers/HOC/Base'

// CONTAINER COM BASE
import Pedidos from './containers/Pedidos';
import Pedido from './containers/Pedido';

// CONTAINER SEM BASE
import Login from './containers/Login';
import RecuperarSenha from './containers/RecuperarSenha';
import ResetarSenha from './containers/RecuperarSenha/ResetarSenha';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <Route path={"/"} exact component={base(Pedidos)} />
          <Route path={"/pedido"} exact component={base(Pedido)} />


          <Route path={"/login"} component={Login} />
          <Route path={"/recuperar-senha"} exact component={RecuperarSenha} />
          <Route path={"/resetar-senha/:token"} exact component={ResetarSenha} />
        </div>
      </Router>
    </Provider>
  );
}

export default App;
