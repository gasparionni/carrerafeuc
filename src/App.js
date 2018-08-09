import React, { Component } from 'react';
import CenteredGridHeader from './componentes/header/Header';
import CenteredGridContainer from './componentes/container/Container';
import CenteredGridFooter from './componentes/footer/Footer';
import './App.css';
// import { Button } from '@material-ui/core';
import Registro from './componentes/container/Registro';


class App extends Component {
  render() {
    return (
      <div>
        <CenteredGridHeader/>
        <CenteredGridContainer/>
        <Registro/>
        <CenteredGridFooter/>
      </div>
    );
  }
}



export default App;
