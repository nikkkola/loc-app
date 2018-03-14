import React, { Component } from 'react';
import PropTypes from 'prop-types';
import editIcon from './editIcon.svg';
import './detailscard.css';

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
    })
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
            { (this.state.editable) ? <input class="subheadingSpan" type="text" onChange={this.handleChange.bind(this, 4)} defaultValue={this.state.data[4]} /> : <span class="subheadingSpan">{this.state.data[4]}</span> }
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

DetailsCard.propTypes = {
  type: PropTypes.oneOf(['Person', 'Product', 'Rules']).isRequired,
  data: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default DetailsCard;
