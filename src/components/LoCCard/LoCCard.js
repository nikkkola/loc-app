import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './loccard.css';

class LoCCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      letter: {}
    }
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      letter: nextProps.letter
    });
  }
  
  render() {
    let referenceNumberText = 'Ref: ' + this.state.letter.letterId;
    let participantsText = 'Participants: ' + this.state.letter.applicant + ', ' + this.state.letter.issuingBank + ', ' + this.state.letter.beneficiary + ', ' + this.state.letter.confirmingBank;
    let productsText = 'Product Type: ';
    return (
      <div className="LoCCard">
        <h3>{referenceNumberText}</h3>
        <p>{participantsText}</p>
        <p>{productsText}</p>
        <button className="viewButton" onClick={this.props.callback}>View Letter Of Credit</button>
      </div>
    );
  }
}

LoCCard.propTypes = {
  letter: PropTypes.object,
  callback: PropTypes.func
}

export default LoCCard;