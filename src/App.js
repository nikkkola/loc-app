import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Page from './components/Page/Page.js';
import LetterOfCredit from './components/LetterOfCredit/LetterOfCredit.js';
import CustomerPage from './components/CustomerPage/CustomerPage.js';
import EmployeePage from './components/EmployeePage/EmployeePage.js';
import BlockChainDisplay from './components/BlockChainDisplay/BlockChainDisplay.js';
import Alert from './components/Alert/Alert.js';

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

const pageContents = {
  ALICE: "ALICE",
  BOA: "BOA",
  LOC: "LOC"
}

class App extends Component {
  constructor() {
    super();
    this.state = {
      currentPage: pageContents.ALICE
    };
  }

  goToLetterScreen() {
    this.setState({
      currentPage: pageContents.LOC
    });
  }

  goToAliceScreen() {
    this.setState({
      currentPage: pageContents.ALICE
    })
  }

  render() {
    let locPageContents = (
      <LetterOfCredit letterId={sampleLetter.letterId} date={sampleLetter.date} applicant={sampleLetter.applicant} beneficiary={sampleLetter.beneficiary} productDetails={sampleLetter.productDetails} rules={sampleLetter.rules} callback={this.goToAliceScreen.bind(this)}/>
    );

    if(this.state.currentPage == pageContents.ALICE) {
      return (
        <CustomerPage callback={this.goToLetterScreen.bind((this))}/>
      );
    } else if(this.state.currentPage == pageContents.BOA) {
      return (
        <EmployeePage />
      );
    } else {
      return(
        <Page contents={locPageContents} />
      );
    }


  }
}

export default App;
