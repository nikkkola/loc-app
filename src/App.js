import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Page from './components/Page/Page.js';
import LetterOfCredit from './components/LetterOfCredit/LetterOfCredit.js';
import UserDetails from './components/UserDetails/UserDetails.js';
import LoCCard from './components/LoCCard/LoCCard.js';

class App extends Component {
  render() {

    let alice = {
      "$class": "org.acme.loc.Customer",
      "companyName": "QuickFix IT",
      "personId": "alice",
      "name": "Alice",
      "bankName": "Bank of Argentina"
    };

    let aliceHomePageContents = (
      <UserDetails name={alice.name} companyName={alice.companyName} sortCode = {"98-76-54"} accountNumber = {"12345678"} balance = {"£1049.34"}/>
    );

    let locPageContents = (
      <LetterOfCredit />
    );



    return (
      <Page currentUser={alice.name} userBank={alice.bankName} contents={aliceHomePageContents}/>
    );
  }
}

export default App;
