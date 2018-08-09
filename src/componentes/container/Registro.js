import React, {Component} from 'react';

// const MostrarComponente{

// }
this.state = {
  toggle: false
}
toggle(MostrarComponente){
  this.state({toggle:true});
  console.log("True");
}

class Registro extends Component{
    render() {
      return (
        <button onClick={this.MostrarComponente}>Registrarme!</button>
      )
    }
}

export default Registro;