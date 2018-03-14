
import React from 'react';
import PropTypes from 'prop-types';
import './block.css';

class Block extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      transactionDetails: this.props.transactionDetails,
      date: this.props.date,
      time: this.props.time,
      number: this.props.number
    }
  }

  render()
  {
    return (
      <div className="Block">
        <div className="BlockNumber">{this.state.number}</div>
        <div className="BlockLine"></div>
        <div className="BlockText">
          <p>{this.state.transactionDetails}</p>
          <p>{this.state.date}</p>
          <p>{this.state.time}</p>
        </div>
      </div>
    );
  }
}

Block.propTypes = {
  date: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired
};

export default Block;
