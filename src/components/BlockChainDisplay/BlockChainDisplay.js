
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
    let numberOfBlocks = this.state.transactions.length;
    for (var i = 0; i < this.state.transactions.length; i++){
      let transaction = this.state.transactions[i];
      let blockNumber = (i+1) + "/" + numberOfBlocks;
      blocks.push(<Block transactionDetails = {transaction[0]} date = {transaction[1]} time = {transaction[2]} number = {blockNumber}/>);
    }
    return (
      //<div className="container">
        <div className="BlockChainDisplay">
          {blocks}
          <div className="greyBlock">
            <div className="greyBlockNumber">9/9</div>
            <div className="greyBlockLine"/>
          </div>
        </div>
      //</div>
    )
  }
}

export default BlockChainDisplay;
