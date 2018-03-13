import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './customerpage.css';
import axios from 'axios';
import Page from '../Page/Page.js'
import UserDetails from '../UserDetails/UserDetails.js';
import LoCCard from '../LoCCard/LoCCard.js';
import LoCApplyCard from '../LoCCard/LoCApplyCard.js';


class CustomerPage extends Component {
  constructor(props) {
		super(props)
		this.state = {
			userDetails: {},
			letter: {},
			callback: this.props.callback
		}
	}

	componentDidMount() {
		axios.get('http://localhost:3000/api/Customer/alice')
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
	
	generateCards() {
    //TODO - update so this takes an array rather than just an object
    return (
      <LoCCard letter={this.state.letter} callback={this.state.callback}/>
    );
  }

  render() {
		let username = this.state.userDetails.name + ", Customer of " + this.state.userDetails.bankName;
   
    let cardsJSX = (<div/>);
    if(this.state.letter) {
      cardsJSX = this.generateCards();
    }

		return (
    	<div id="customerPageContainer" className="cPageContainer">
    	  <div id="cHeaderDiv" className="flexDiv cHeaderDiv">
    	    <span className="cUsername"> {username} </span>
    	    <div id="cMenu" className="cMenuItems">
    	      <span> Change account details </span>
    	      <span> View Transaction History </span>
    	      <span> Make Transaction </span>
    	      <span> Current Balance: £15,670 </span>
    	    </div>
    	  </div>
    	  <div id="infoDiv" className="flexDiv infoDiv">
    	    <div id="cWelcomeDiv" className="cWelcomeDiv">
    	      <h1> Welcome back {this.state.userDetails.name} </h1>
    	      <UserDetails name={this.state.userDetails.name} companyName={this.state.userDetails.companyName} sortCode={'12-34-57'} accountNumber={'54564351'}/>
    	    </div>
    	  </div>
    	  <div id="locDiv" className="flexDiv">
    	    <LoCApplyCard callback={this.state.callback}/>
    	    {cardsJSX}
    	  </div>
			</div>
		);
  }
}

CustomerPage.propTypes = {
	callback: PropTypes.func
}

export default CustomerPage;