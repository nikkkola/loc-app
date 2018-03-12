import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './employeepage.css';
import axios from 'axios';
import Page from '../Page/Page.js'
import Table from '../Table/Table.js';


class CustomerPage extends Component {
  constructor(props) {
		super(props)
		this.state = {
			userDetails: {},
			letter: {}
		}
	}

	componentDidMount() {
		axios.get('http://localhost:3000/api/BankEmployee/matias')
			.then(response => {
				this.setState ({
					userDetails: response.data
        }
      );
    });
    axios.get('http://localhost:3000/api/LetterOfCredit')
      .then(response => {
        this.setState ({
          letter: response.data[0]
        });
      }
    );
	}

	componentDidUpdate() {
		console.log(this.state);
	}

  render() {
    let username = this.state.userDetails.name + ", Employee at  " + this.state.userDetails.bankName;
    return (
      <div id="employeePageContainer" className="ePageContainer">
        <div id="eHeaderDiv" className="flexDiv eHeaderDiv">
          <span className="eUsername"> {username} </span>
          <div id="eMenu" className="eMenuItems">
            <span> Change account details </span>
            <span> View Transaction History </span>
            <span> Make Transaction </span>
            <span> Viewing all Business Acccounts </span>
          </div>
        </div>
        <div id="eWelcomeDiv" className="eWelcomeDiv">
          <h1> Welcome back {this.state.userDetails.name} </h1>
        </div>
        <div id="tableDiv">
          <Table letter={this.state.letter}/>
        </div>
      </div>
    );
  }
}

export default CustomerPage;