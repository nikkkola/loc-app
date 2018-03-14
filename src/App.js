import React, { Component } from 'react';
import { connect } from "react-redux";
import logo from './logo.svg';
import './App.css';
import Page from './components/Page/Page.js';
import LetterOfCredit from './components/LetterOfCredit/LetterOfCredit.js';
import CustomerPage from './components/CustomerPage/CustomerPage.js';
import EmployeePage from './components/EmployeePage/EmployeePage.js';

const sampleLetter = {
  letterId: '123456',
  date: '08/03/2018',
  applicant: {
    name: 'Alice',
    companyName: 'QuickFix IT',
    sortCode: '12-34-56',
    accNo: '98765432',
    bankName: 'Bank of Argentina'
  },
  beneficiary: {
    name: 'Bob',
    companyName: 'Bob\'s Company',
    sortCode: '12-34-56',
    accNo: '98765432',
    bankName: 'Central Bank of Belgium'
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
  MATIAS: "MATIAS",
  LOC: "LOC"
}

class App extends Component {
  constructor() {
    super();
    this.state = {
      currentPage: pageContents.ALICE,
      currentLetter: {}
    };
    this.goToAliceScreen = this.goToAliceScreen.bind(this);
    this.goToMatiasScreen = this.goToMatiasScreen.bind(this);
    this.goToLetterScreen = this.goToLetterScreen.bind(this);
  }

  goToLetterScreen(letter) {
    this.setState({
      currentPage: pageContents.LOC,
      currentLetter: letter
    });
  }

  goToAliceScreen() {
    this.setState({
      currentPage: pageContents.ALICE
    })
  }

  goToMatiasScreen() {
    this.setState({
      currentPage: pageContents.MATIAS
    });
  }

  render() {
    console.log("current letter: ",this.state.currentLetter);

    let locPageContents = (
      <LetterOfCredit letter={this.state.currentLetter} letterId={sampleLetter.letterId} date={sampleLetter.date} applicant={sampleLetter.applicant} beneficiary={sampleLetter.beneficiary} productDetails={sampleLetter.productDetails} rules={sampleLetter.rules} callback={this.goToAliceScreen}/>
    );

    if(this.state.currentPage == pageContents.ALICE) {
      return (
        <CustomerPage switchUser={this.goToMatiasScreen} callback={this.goToLetterScreen}/>
      );
    } else if(this.state.currentPage == pageContents.MATIAS) {
      return (
        <EmployeePage switchUser={this.goToAliceScreen} callback={this.goToLetterScreen}/>
      );
    } else {
      return(
        <Page contents={locPageContents} />
      );
    }
  }
}

// const mapStateToProps = state => {
//   console.log(state);
//   return { userDetails: state.suggestChangesReducer.bankUser };
// };
//
// export default connect(mapStateToProps)(App);
//
export default App;
