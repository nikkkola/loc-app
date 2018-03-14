import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './letterofcredit.css';
import DetailsCard from '../DetailsCard/DetailsCard.js';
import axios from 'axios';
import { connect } from "react-redux";

class LetterOfCredit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      productDetails: {}
    }
  }

  componentWillReceiveProps() {

  }

  createLOC(producType, quantity, pricePerUnit) {
    axios.post('http://localhost:3000/api/InitialApplication', {
      "$class": "org.acme.loc.InitialApplication",
      "letterId": "L123456789",
      "applicant": "resource:org.acme.loc.Customer#alice",
      "beneficiary": "resource:org.acme.loc.Customer#bob",
      "rules": [],
      "productDetails": {
        "$class": "org.acme.loc.ProductDetails",
        "productType": "string",
        "quantity": 0,
        "pricePerUnit": 0,
        "id": "string"
      },
      "transactionId": "",
      "timestamp": "2018-03-13T11:35:00.218Z"
    })
    .catch(error => {
      console.log(error);
    });
  }

  approveLOC() {
    axios.post('http://localhost:3000/api/ApproveApplication', {
      "$class": "org.acme.loc.ApproveApplication",
      "loc": "resource:org.acme.loc.LetterOfCredit#L123456789",
      "approvingParty": "Bob",
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
    return (
      <div class="LCcontainer">
        <div class="letterDetails">
          <h2>{this.props.letterId}</h2>
          <p>{this.props.date}</p>
        </div>

        <div class="letterContent">
          <DetailsCard type="Person" data={["Application Request"].concat(Object.values(this.props.applicant))}/>
          <DetailsCard type="Person" data={["Supplier Request"].concat(Object.values(this.props.beneficiary))}/>
          <DetailsCard type="Product" data={["Product Details"].concat(Object.values(this.props.productDetails))}/>
        </div>

        <br/>

        <div class="rules">
            <DetailsCard type="Rules" data={this.props.rules}/>
        </div>


        <div class="actions">
          <button onClick={this.approveLOC}>I accept the application</button>
          <button onClick={this.rejectLOC}>I reject the application</button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log(state);
  return { productDetails: state.getLetterInputReducer.productDetails };
};

export default connect(mapStateToProps)(LetterOfCredit);

// export default LetterOfCredit;
