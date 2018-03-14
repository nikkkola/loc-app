
import React from 'react';
import PropTypes from 'prop-types';
import './blockchaindisplay.css';
import Block from '../../components/Block/Block.js';
import axios from 'axios';

class BlockChainDisplay extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      transactions: [],
      transactions2: this.props.transactions
    //this.props.transactions
    }
  }

  getAllTransactions() {
    axios.get('http://localhost:3000/api/system/historian')
		.then(response => {
			this.setState ({
				transactions: response.data
      });
      console.log("transaction details " + this.state.transactions);
    })
    .catch(error => {
      console.log(error);
    });
  }

  render() {
    var blocks = [];
    let numberOfBlocks = this.state.transactions2.length;
    for (var i = 0; i < this.state.transactions2.length; i++){
      let transaction = this.state.transactions2[i];
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
