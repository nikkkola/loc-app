import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Page from './components/Page/Page.js';
import LetterOfCredit from './components/LetterOfCredit/LetterOfCredit.js';
import UserDetails from './components/UserDetails/UserDetails.js';

class App extends Component {
  render() {

    let alice = {
      "$class": "org.acme.loc.Customer",
      "companyName": "QuickFix IT",
      "personId": "alice",
      "name": "Alice",
      "bankName": "Bank of Argentina"
    };

    return (
      <div>
        <Page currentUser={alice.name} userBank={alice.bankName} contents={<LetterOfCredit />}/>
        <UserDetails name={"dfghjkl"} companyName={"sdsd"} sortCode = {"ddd"} accountNumber = {"ddd"} balance = {"2222"}/>
      </div>
    );
  }
}

export default App;
