
import React from 'react';
import PropTypes from 'prop-types';
import './blockchaindisplay.css';
import Block from '../../components/Block/Block.js';

class BlockChainDisplay extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      transactions: this.props.transactions
    //this.props.transactions
    }
  }

  render() {
    var blocks = [];
      for (var i = 0; i < this.state.transactions.length; i++){
        let transaction = this.state.transactions[i];
        blocks.push(<Block transactionDetails = {transaction[0]} date = {transaction[1]} time = {transaction[2]}/>);
      }
    return blocks;
  }
}

export default BlockChainDisplay;
