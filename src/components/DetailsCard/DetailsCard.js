import React, { Component } from 'react';
import PropTypes from 'prop-types';
import editIcon from './editIcon.svg';
import './detailscard.css';

class DetailsCard extends Component {
  render() {
    let mainHeadingTxt, jsx;

    switch(this.props.type) {
      case 'Person':
        mainHeadingTxt = this.props.data[0];
        jsx = (
          <div>
            <span class="subheadingSpan, topHeading">NAME</span>
            <span class="subheadingSpan">Miss A R Hamilton</span>
            <span class="subheadingSpan, topHeading">NAME</span>
            <span class="subheadingSpan">Miss A R Hamilton</span>
          </div>
        );
        break;
      case 'Product':
        mainHeadingTxt = "Product Details";
        jsx = (
          <div>
            <span class="subheadingSpan, topHeading">TYPE</span>
            <span class="subheadingSpan">Miss A R Hamilton</span>
            <span class="subheadingSpan, topHeading">QUANTITY</span>
            <span class="subheadingSpan">Miss A R Hamilton</span>
          </div>
        );
        break;
      case 'Rules':
        mainHeadingTxt = "Terms and Conditions";
        jsx = (
          <ul>
            {this.props.data.map(function(rule) {
              return <li>{rule}</li>;
            })}
          </ul>
        );
        break;
    }

    return (
      <div class="cardContainer">
        <a href="#"><img src={editIcon}/></a>
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
