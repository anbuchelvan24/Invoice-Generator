import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Container from 'react-bootstrap/Container';
import InvoiceForm from './components/InvoiceForm';

class App extends Component {
  render() {
    return (
      <div className="App d-flex flex-column align-items-center justify-content-center w-100">
        <Container>
          <br />
          <h1>Invoice Master</h1>
          <span style={{fontSize:'20px',}}>Team Members: Anbuchelvan, Rohith Shankar, Sarvesh</span>
          <InvoiceForm/>
        </Container>
      </div>
    );
  }
}

export default App;
