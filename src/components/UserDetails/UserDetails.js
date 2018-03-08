import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './userdetails.css';

class UserDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: this.props.name,
      companyName: this.props.companyName,
      sortCode: this.props.sortCode,
      accountNumber: this.props.accountNumber,
      balance: this.props.balance
    }
  }

  render() {
    let nameText = 'Name: ' + this.state.name;
    let companyNameText = 'Company Name: '+ this.state.companyName;
    let sortCodeText = 'Sort Code: ' + this.state.sortCode;
    let accountNumberText = 'Account Number: ' + this.state.accountNumber;
    let balanceText = 'Balance: ' + this.state.balance;
    return (
      <div className="UserDetails">
        <h1>Business Account</h1>
        <p>{nameText}</p>
        <p>{companyNameText}</p>
        <p>{sortCodeText}</p>
        <p>{accountNumberText}</p>
        <p>{balanceText}</p>
      </div>
    );
  }
}

UserDetails.propTypes = {
  name: PropTypes.string.isRequired,
  companyName: PropTypes.string.isRequired,
  sortCode: PropTypes.string.isRequired,
  accountNumber: PropTypes.string.isRequired,
  balance: PropTypes.string.isRequired
}

export default UserDetails;
