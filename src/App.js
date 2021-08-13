import React, { Component } from 'react';
import './App.css';
import Main from './components/HomeComponent';
import { BrowserRouter } from 'react-router-dom';
import { Container } from 'reactstrap';

class App extends Component {
  render() {
    return(
      <BrowserRouter>
        <div className="App">
        <Main />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;