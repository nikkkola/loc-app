import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Page from './components/Page/Page.js';
import LetterOfCredit from './components/LetterOfCredit/LetterOfCredit.js';

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
      <Page currentUser={alice.name} userBank={alice.bankName} contents={<LetterOfCredit />}/>
    );
  }
}

export default App;
