import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Page from './components/Page/Page.js';
import LetterOfCredit from './components/LetterOfCredit/LetterOfCredit.js';
import UserDetails from './components/UserDetails/UserDetails.js';
import LoCCard from './components/LoCCard/LoCCard.js';

const sampleLetter = {
  letterId: '123456',
  date: '08/03/2018',
  applicant: {
    name: 'Alice',
    companyName: 'QuickFix IT',
    sortCode: '12-34-56',
    accNo: '98765432'
  },
  beneficiary: {
    name: 'Bob',
    companyName: 'Bob\'s Company',
    sortCode: '12-34-56',
    accNo: '98765432'
  },
  productDetails: {
    type: 'Computers',
    quantity: 100,
    unitPrice: '£100',
    totalPrice: '£10000'
  },
  rules: ['Lorem ipsum dolor sit amet, consectetur adipiscing elit.', 'Praesent blandit libero in condimentum facilisis.', 'Aliquam vitae nibh et nisl mollis euismod eget vel justo.', 'Nullam vel turpis tincidunt, cursus metus id, aliquet enim.', 'Nunc ac mauris at dolor vehicula fermentum.', 'Duis pharetra arcu eu metus vehicula pellentesque.']
};

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
      <LetterOfCredit letterId={sampleLetter.letterId} date={sampleLetter.date} applicant={sampleLetter.applicant} beneficiary={sampleLetter.beneficiary} productDetails={sampleLetter.productDetails} rules={sampleLetter.rules}/>
    );

    return (
      <Page currentUser={alice.name} userBank={alice.bankName} contents={locPageContents}/>
    );
  }
}

export default App;
