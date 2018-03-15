import React, { Component } from 'react';
import editIcon from '../../resources/editIcon.svg';
import './detailscard.css';
import { connect } from "react-redux";
import { getProductDeatils } from "../../actions/actions";
import { getRules } from "../../actions/actions";

class DetailsCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: this.props.data,
      editable: false
    }
  }

  switchEditable() {
    const currentState = this.state.editable;
    this.setState({
      editable: !currentState
    });
  }

  handleChange(index, event) {
    const data = this.state.data;
    data[index] = event.target.value;

    this.setState({
      data: data
    });

    if(this.props.type === "Product") {
      this.props.getProductDeatils({
        type: this.state.data[1],
        quantity: parseInt(this.state.data[2], 10),
        pricePerUnit: parseInt(this.state.data[3], 10),
        total: parseInt(this.state.data[2]*this.state.data[3], 10)
      });
    }
    else if (this.props.type === "Rules") {
      this.props.getRules({
        rules: this.state.data
      });
    }
  }

  render() {
    let mainHeadingTxt = this.props.data[0];
    let jsx;

    switch(this.props.type) {
      case 'Person':
        jsx = (
          <div>
            <span class="subheadingSpan, topHeading">NAME</span>
            { (this.state.editable) ? <input class="subheadingSpan" type="text" onChange={this.handleChange.bind(this, 1)} defaultValue={this.state.data[1]} /> : <span class="subheadingSpan">{this.state.data[1]}</span> }
            <span class="subheadingSpan, topHeading">COMPANY NAME</span>
            { (this.state.editable) ? <input class="subheadingSpan" type="text" onChange={this.handleChange.bind(this, 2)} defaultValue={this.state.data[2]} /> : <span class="subheadingSpan">{this.state.data[2]}</span> }
            <span class="subheadingSpan, topHeading">SORT CODE</span>
            { (this.state.editable) ? <input class="subheadingSpan" type="text" onChange={this.handleChange.bind(this, 3)} defaultValue={this.state.data[3]} /> : <span class="subheadingSpan">{this.state.data[3]}</span> }
            <span class="subheadingSpan, topHeading">ACCOUNT NUMBER</span>
            { (this.state.editable) ? <input class="subheadingSpan" type="text" onChange={this.handleChange.bind(this, 4)} defaultValue={this.state.data[4]} /> : <span class="subheadingSpan">{this.state.data[4]}</span> }
            <span class="subheadingSpan, topHeading">BANK NAME</span>
            { (this.state.editable) ? <input class="subheadingSpan" type="text" onChange={this.handleChange.bind(this, 5)} defaultValue={this.state.data[5]} /> : <span class="subheadingSpan">{this.state.data[5]}</span> }
          </div>
        );
        break;
      case 'Product':
        jsx = (
          <div>
            <span class="subheadingSpan, topHeading">TYPE</span>
            { (this.state.editable) ? <input class="subheadingSpan" type="text" onChange={this.handleChange.bind(this, 1)} defaultValue={this.state.data[1]} /> : <span class="subheadingSpan">{this.state.data[1]}</span> }
            <span class="subheadingSpan, topHeading">QUANTITY</span>
            { (this.state.editable) ? <input class="subheadingSpan" type="text" onChange={this.handleChange.bind(this, 2)} defaultValue={this.state.data[2]} /> : <span class="subheadingSpan">{this.state.data[2]}</span> }
            <span class="subheadingSpan, topHeading">PRICE PER UNIT</span>
            { (this.state.editable) ? <input class="subheadingSpan" type="text" onChange={this.handleChange.bind(this, 3)} defaultValue={this.state.data[3]} /> : <span class="subheadingSpan">{this.state.data[3]}</span> }
            <span class="subheadingSpan, topHeading">TOTAL</span>
            <span class="subheadingSpan">{this.state.data[2]*this.state.data[3]}</span>
          </div>
        );
        break;
      case 'Rules':
        mainHeadingTxt = "Terms and Conditions";
        if(this.state.editable) {
          jsx = (
            <ul>
              {this.state.data.map(function(rule, i) {
                return <li><input type="text" onChange={this.handleChange.bind(this, i)} defaultValue={this.state.data[i]} /></li>;
              }, this)}
            </ul>
          );
        }
        else {
          jsx = (
            <ul>
              {this.state.data.map(function(rule) {
                return <li>{rule}</li>;
              })}
            </ul>
          );
        }
        break;
    }

    return (
      <div class="cardContainer">
        <a href="#" onClick={this.switchEditable.bind((this))}><img src={editIcon}/></a>
        <h4>{mainHeadingTxt}</h4>
        {jsx}
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getProductDeatils: productDetails => dispatch(getProductDeatils(productDetails)),
    getRules: rules => dispatch(getRules(rules))
  };
};

export default connect(null, mapDispatchToProps)(DetailsCard);
