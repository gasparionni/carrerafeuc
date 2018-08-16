import React, { Component } from 'react';
import ReactModal from 'react-modal';
import './modal.css';
import './estilosformulario.css';


class Registro extends Component {
    constructor() {
      super()
      this.state = {
        showModal: false
      }
      this.handleOpenModal = this.handleOpenModal.bind(this);
      this.handleCloseModal = this.handleCloseModal.bind(this);
    }
    handleOpenModal () {
      this.setState({ showModal: true });
    }
    handleCloseModal () {
      this.setState({ showModal: false });
    }

    render() {
      return (
        <div className="content-modal">
          <button onClick={this.handleOpenModal} className="btn-registrar"><span>Registro</span></button>
          <ReactModal isOpen={this.state.showModal} contentLabel="Minimal Modal Example" >
            <Formulario/> 
            <button onClick={this.handleCloseModal} className="btn-registrar"><span>Aceptar</span></button>
          </ReactModal>
        </div>
      )
    }
}
class Formulario extends Component {
  constructor(args) {
    super(args)
      this.state = {
        lastname: '',
        lastname2: '',
        name: '',
        sex: '',
        year: '',
        phonenumber: '',
        email: '',
        extradata: '',
        contactemg: '',
      }
  }
  onChange(e){
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  

  render() {
    return (
      <div className="container">
        <div className="caja">
          {/* apellido paterno */}
          <label htmlFor="lastname">Apellido Paterno:</label>
          <input 
          value={this.state.lastname} 
          onChange={this.onChange.bind(this)} 
          type="text" name="lastname" id="lastname"/>

          {/* apellido materno */}
          <label htmlFor="lastname2">Apellido Paterno:</label>
          <input 
          value={this.state.lastname2} 
          onChange={this.onChange.bind(this)} 
          type="text" name="lastname2" id="lastname2"/>

          {/* nombres */}
          <label htmlFor="name">Nombre/s:</label>
          <input 
          value={this.state.name} 
          onChange={this.onChange.bind(this)} 
          type="text" name="name" id="name"/>
        </div>
        <div>
          {/* genero */}
          <label htmlFor="sex">Sexo:</label>
          <select name="sex" id="sex" 
            value={this.state.sex}
            onChange={this.onChange.bind(this)}>
            <option value="N/D" select="true">Selecciona</option>
            <option value="Masculino">Masculino</option>
            <option value="Femenino">Femenino</option>
          </select>
        </div>
        <div>
          {/* categoria a correr */}
          <label htmlFor="categoria">Categoria:</label>
          <input type="radio" name="categoria" id="categoria" value="10k"
            onChange={this.onChange.bind(this)}/>10k
          <input type="radio" name="categoria" id="categoria" value="5k"
            onChange={this.onChange.bind(this)}/>5k
          <input type="radio" name="categoria" id="categoria" value="3k"
            onChange={this.onChange.bind(this)}/>3k
        </div>
        <div>
          {/* edad */}
          <label htmlFor="year">Edad:</label>
          <input type="text" name="year" id="year" 
            value={this.state.year}
            onChange={this.onChange.bind(this)}/>
        </div>
        <div>
          {/* Numero de telefono  validar la longitud del numero */}
          <label htmlFor="phonenumber">Telefono:</label>
          <input value={this.state.phonenumber}
            onChange={this.onChange.bind(this)}
            type="text" name="phonenumber" id="phonenumber"/>

          {/* correo electronico */}
          <label htmlFor="email">Correo electronico:</label>
          <input 
            value={this.state.email} 
            onChange={this.onChange.bind(this)}
            type="email" name="email" id="email"/>
        </div>
        {/* datos extras */}
        <label htmlFor="extradata">EN CASO DE PADECER ALGUNA ENFERMEDAD Y/O TENER ALGÚN TIPO DE ALERGIA FAVOR DE ESPECIFICARLO: </label>
        <textarea name="extradata" id="extradata" cols="30" rows="10" 
          placeholder="Maximo 100 caracteres" onChange={this.onChange.bind(this)}>
          </textarea>
        {/* ajustar lo grande del textarea y la longitud de caracteres xd */}

        {/* nombre del contacto de emg */}
        <label htmlFor="namecontactemg">Nombre/s:</label>
        <input  
          type="text" name="namecontactemg" id="namecontactemg"
          value={this.state.namecontactemg} 
          onChange={this.onChange.bind(this)}/>

        {/* contacto de emergencia,  validar la longitud del numero */}
        <label htmlFor="contactemg">Telefono:</label>
        <input type="text" name="contactemg" 
          id="contactemg"
          value={this.state.contactemg} 
          onChange={this.onChange.bind(this)}/>
          

        <p>{JSON.stringify(this.state)}</p>
      </div>
    );
  }
}

export default Registro;