import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './letterofcredit.css';
import DetailsCard from '../DetailsCard/DetailsCard.js';
import axios from 'axios';
import { connect } from "react-redux";

const productDetails = {
  productType: "Computers",
  quantity: 100,
  pricePerUnit: 100
}

class LetterOfCredit extends Component {
  constructor(props) {
    super(props);
  }

  createLOC(type, quantity, price, rules) {
    axios.post('http://localhost:3000/api/InitialApplication', {
      "$class": "org.acme.loc.InitialApplication",
      "letterId": "L2",
      "applicant": "resource:org.acme.loc.Customer#alice",
      "beneficiary": "resource:org.acme.loc.Customer#bob",
      "rules": rules,
      "productDetails": {
        "$class": "org.acme.loc.ProductDetails",
        "productType": type,
        "quantity": quantity,
        "pricePerUnit": price,
        "id": "string"
      },
      "transactionId": "",
      "timestamp": "2018-03-13T11:35:00.218Z"
    })
    .then(response => {
      console.log(response);
    })
    .catch(error => {
      console.log(error);
    });
  }

  approveLOC(approvingParty) {
    axios.post('http://localhost:3000/api/ApproveApplication', {
      "$class": "org.acme.loc.ApproveApplication",
      "loc": "resource:org.acme.loc.LetterOfCredit#L123456789",
      "approvingParty": approvingParty,
      "transactionId": "",
      "timestamp": "2018-03-13T11:25:08.043Z"
    })
    .catch(error => {
      console.log(error);
    });
  }

  rejectLOC() {
    axios.post('http://localhost:3000/api/RejectApplication', {
      "$class": "org.acme.loc.RejectApplication",
      "loc": "resource:org.acme.loc.LetterOfCredit#L123456789",
      "closeReason": "Just not that into you...",
      "transactionId": "",
      "timestamp": "2018-03-13T11:35:00.281Z"
    })
    .catch(error => {
      console.log(error);
    });
  }

  closeLOC() {
    axios.post('http://localhost:3000/api/Close', {
      "$class": "org.acme.loc.Close",
      "loc": "resource:org.acme.loc.LetterOfCredit#L123456789",
      "closeReason": "He's dead Jim",
      "transactionId": "",
      "timestamp": "2018-03-13T11:35:00.139Z"
    })
    .catch(error => {
      console.log(error);
    })
  }

  render() {
    console.log(this.props.user);


    let buttonsJSX = (<div/>);
    if(!this.props.isApply) {
      buttonsJSX = (
        <div>
          <button onClick={this.approveLOC(this.props.user)}>I accept the application</button>
          <button onClick={this.rejectLOC}>I reject the application</button>
        </div>
      );
    } else {
      buttonsJSX = (
        <div>
          <button onClick={() => this.createLOC(this.props.productDetails.type, this.props.productDetails.quantity, this.props.productDetails.pricePerUnit, this.props.rules)}>Start approval process</button>
        </div>
      );
    }

    
    return (
      <div class="LCcontainer">
        <div class="letterDetails">
          <h2>{this.props.letter.letterId}</h2>
          <p>{this.props.date}</p>
        </div>

        <div class="letterContent">
          <DetailsCard type="Person" data={["Application Request"].concat(Object.values(this.props.applicant))}/>
          <DetailsCard type="Person" data={["Supplier Request"].concat(Object.values(this.props.beneficiary))}/>
          <DetailsCard type="Product" data={["Product Details"].concat(Object.values(this.props.productDetails))}/>
        </div>

        <br/>
        
        <div class="rules">
            <DetailsCard type="Rules" data={["The product has been received and is as expected"]}/>
        </div>

        <div class="actions">
          {buttonsJSX}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { productDetails: state.getLetterInputReducer.productDetails, rules: state.getLetterInputReducer.rules };
};

export default connect(mapStateToProps)(LetterOfCredit);

// export default LetterOfCredit;
