
import React from 'react';
import PropTypes from 'prop-types';
import './loccard.css';

class LoCCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      referenceNumber: this.props.referenceNumber,
      status: this.props.status,
      participants: this.props.participants,
      products: this.props.products
    }
  }
  
  render() {
    let referenceNumberText = 'Ref: ' + this.state.referenceNumber;
    let statusText = this.state.status;
    let participantsText = 'Participants: ' + this.state.participants;
    let productsText = 'Products: ' + this.state.products;
    return (
      <div className="LoCCard">
        <p>{referenceNumberText}</p>
        <p>{statusText}</p>
        <p>{participantsText}</p>
        <p>{productsText}</p>
        <button>View Letter Of Credit</button>
      </div>
    );
  }
}

export default LoCCard;
