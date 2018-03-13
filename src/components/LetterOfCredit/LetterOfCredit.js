import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './letterofcredit.css';
import DetailsCard from '../DetailsCard/DetailsCard.js';
import axios from 'axios';

class LetterOfCredit extends Component {
  constructor(props) {
    super(props);
  }

  componentWillReceiveProps() {

  }

  createLOC() {
    axios.post('http://localhost:3000/api/InitialTransaction', {
      
    })
    .then(response =>  {
      console.log(response);
    })
    .catch(error => {

    });
  }


  render() {
    let applicantNameText = 'Name: ' + this.props.applicant.name;
    let applicantCompanyNameText = 'Company Name: ' + this.props.applicant.companyName;
    let applicantSortCodeText = 'Sort Code: ' + this.props.applicant.sortCode;
    let applicantAccountNumberText = 'Account Number: ' + this.props.applicant.accNo;

    let beneficiaryNameText = 'Name: ' + this.props.beneficiary.name;
    let beneficiaryCompanyNameText = 'Company Name: ' + this.props.beneficiary.companyName;
    let beneficiarySortCodeText = 'Sort Code: ' + this.props.beneficiary.sortCode;
    let beneficiaryAccountNumberText = 'Account Number: ' + this.props.beneficiary.accNo;

    let productType = 'Product Type: ' + this.props.productDetails.type;
    let productQuantity = 'Product Quantity: ' + this.props.productDetails.quantity;
    let productUnitPrice = 'Unit Price: ' + this.props.productDetails.unitPrice;
    let productTotal = 'Total: ' + this.props.productDetails.totalPrice;

    return (
      <div class="LCcontainer">
        <div class="letterDetails">
          <h2>{this.props.letterId}</h2>
          <p>{this.props.date}</p>
        </div>

        <div class="letterContent">
          <DetailsCard type="Person" data={["Application Request"]}/>
          <DetailsCard type="Person" data={["Supplier Request"]}/>
          <DetailsCard type="Product" data={["Product Details"]}/>
        </div>

        <br/>
        {/* <div class="letterContent">
          <div>
            <h2>Account Information</h2>
            <p>{applicantNameText}</p>
            <p>{applicantCompanyNameText}</p>
            <p>{applicantSortCodeText}</p>
            <p>{applicantAccountNumberText}</p>
          </div>

          <div>
            <h2>Supplier Bank Details</h2>
            <p>{beneficiaryNameText}</p>
            <p>{beneficiaryCompanyNameText}</p>
            <p>{beneficiarySortCodeText}</p>
            <p>{beneficiaryAccountNumberText}</p>
          </div>

          <div>
            <h2>Product Details</h2>
            <p>{productType}</p>
            <p>{productQuantity}</p>
            <p>{productUnitPrice}</p>
            <p>{productTotal}</p>
          </div>
        </div> */}

        <div class="rules">
            <DetailsCard type="Rules" data={this.props.rules}/>
        </div>


        <div class="actions">
          <button onClick={this.createLOC}>I accept the application</button>
          <button onClick={this.props.callback}>I reject the application</button>
        </div>
      </div>
    );
  }
}

LetterOfCredit.propTypes = {
  letterId: PropTypes.string.isRequired,
  date: PropTypes.instanceOf(Date).isRequired,
  applicant: PropTypes.shape({
    name: PropTypes.string.isRequired,
    companyName: PropTypes.string.isRequired,
    sortCode: PropTypes.string.isRequired,
    accNo: PropTypes.string.isRequired
  }).isRequired,
  beneficiary: PropTypes.shape({
    name: PropTypes.string.isRequired,
    companyName: PropTypes.string.isRequired,
    sortCode: PropTypes.string.isRequired,
    accNo: PropTypes.string.isRequired
  }).isRequired,
  productDetails: PropTypes.shape({
    type: PropTypes.string.isRequired,
    quantity: PropTypes.number.isRequired,
    unitPrice: PropTypes.string.isRequired,
    totalPrice: PropTypes.string.isRequired
  }).isRequired,
  rules: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default LetterOfCredit;
