import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './loccard.css';

class LoCCard extends Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    let referenceNumberText = 'Ref: ' + this.props.letter.letterId;
    let participantsText = 'Participants: ' + this.props.letter.applicant + ', ' + this.props.letter.issuingBank + ', ' + this.props.letter.beneficiary + ', ' + this.props.letter.confirmingBank;
    let productsText = 'Product Type: ';
    return (
      <div className="LoCCard">
        <h3>{referenceNumberText}</h3>
        <p>{participantsText}</p>
        <p>{productsText}</p>
        <button className="viewButton" onClick={() => this.props.callback(this.props.letter)}>View Letter Of Credit</button>
      </div>
    );
  }
}

LoCCard.propTypes = {
  letter: PropTypes.object,
  callback: PropTypes.func
}

export default LoCCard;