import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Redirect } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import Home from './Views/Home'
import Registro from './Views/Registro';
import InicioSesion from './Views/InicioSesion';
import ConsultarInfo from './Views/ConsultarInfo';
import ModificarInfo from './Views/ModificarInfo';
import RecuperarAcceso from './Views/RecuperarAcces';
import AgregarPersona from './Views/AgregarPersona';
import RegistrarPM from './Views/RegistrarPM';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Switch>
        <Route exact path="/">
          <Home/>
        </Route>
        <Route exact path="/Registro">
            <Registro/>
        </Route>
        <Route exact path="/InicioSesion">
            <InicioSesion/>
        </Route>
        <Route exact path="/ConsultarInfo">
            <ConsultarInfo/>
        </Route>
        <Route exact path="/ModificarInfo">
            <ModificarInfo/>
        </Route>
        <Route exact path="/RecuperarAcceso">
            <RecuperarAcceso/>
        </Route>
        <Route exact path="/AgregarPersona">
            <AgregarPersona/>
        </Route>
        <Route exact path="/RegistrarPM">
            <RegistrarPM/>
        </Route>
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
