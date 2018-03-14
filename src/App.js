import React, { Component } from 'react';
import './App.css';
import Page from './components/Page/Page.js';
import LetterOfCredit from './components/LetterOfCredit/LetterOfCredit.js';
import CustomerPage from './components/CustomerPage/CustomerPage.js';
import EmployeePage from './components/EmployeePage/EmployeePage.js';
import { HashRouter, Route, Link } from 'react-router-dom'

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
      currentLetter: {},
      currentUser: "Alice"
    };
    this.goToAliceScreen = this.goToAliceScreen.bind(this);
    this.goToMatiasScreen = this.goToMatiasScreen.bind(this);
    this.goToLetterScreen = this.goToLetterScreen.bind(this);
  }

  goToLetterScreen(letter, isApply) {
    this.setState({
      currentPage: pageContents.LOC,
      currentLetter: letter,
      isApply: isApply
    });
  }

  goToAliceScreen() {
    this.setState({
      currentPage: pageContents.ALICE,
      currentUser: "Alice"
    })
  }

  goToMatiasScreen() {
    this.setState({
      currentPage: pageContents.MATIAS,
      currentUser: "Matías"
    });
  }

 

  // render() {
  //   let locPageContents = (
  //     <LetterOfCredit letter={this.state.currentLetter} letterId={sampleLetter.letterId} date={sampleLetter.date} applicant={sampleLetter.applicant} beneficiary={sampleLetter.beneficiary} rules={sampleLetter.rules} callback={this.goToAliceScreen} isApply={this.state.isApply} user={this.state.currentUser}/>
  //   );

  //   let pageToShow;

  //   if(this.state.currentPage === pageContents.ALICE) {
  //     pageToShow = (
  //       <CustomerPage switchUser={this.goToMatiasScreen} callback={this.goToLetterScreen}/>
  //     );
  //   } else if(this.state.currentPage === pageContents.MATIAS) {
  //     pageToShow = (
  //       <EmployeePage switchUser={this.goToAliceScreen} callback={this.goToLetterScreen}/>
  //     );
  //   } else {
  //     pageToShow = (
  //       <Page contents={locPageContents} />
  //     );
  //   }
  //   return pageToShow;
  // }

  render() {
    let locPageContents = (
      <LetterOfCredit letter={this.state.currentLetter} letterId={sampleLetter.letterId} date={sampleLetter.date} applicant={sampleLetter.applicant} beneficiary={sampleLetter.beneficiary} rules={sampleLetter.rules} callback={this.goToAliceScreen} isApply={this.state.isApply} user={this.state.currentUser}/>
    );

    let customerPage = () => (<CustomerPage switchUser={this.goToMatiasScreen} callback={this.goToLetterScreen}/>);
    let employeePage = () => (<EmployeePage switchUser={this.goToAliceScreen} callback={this.goToLetterScreen}/>);
    let locPage = () => (<Page contents={locPageContents} />);

    return (
      <HashRouter >
        <div>
          <Route path='/customer' component={customerPage} />
          <Route path='/employee' component={employeePage} />
          <Route path='/letterOfCredit' component={locPage} />
        </div>
      </HashRouter>
    )
  }
}

export default App;
