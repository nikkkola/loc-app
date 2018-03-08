import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import UserDetails from './components/UserDetails/UserDetails.js';
import LoCCard from './components/LoCCard/LoCCard.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          <UserDetails name={"dfghjkl"} companyName={"sdsd"} sortCode = {"ddd"} accountNumber = {"ddd"} balance = {"2222"}/>
        </p>
        <p className="App-intro">
          <LoCCard referenceNumber={"123456789"} status={"sdsd"} participants = {"dcsdc"} products = {"ssdssc"}/>
        </p>
      </div>
    );
  }
}

export default App;
