import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './page.css';
import Modal from '../Modal/Modal.js';

class Page extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let username = this.props.currentUser + " - " + this.props.userBank;
    return (
      <div id="pageContainer" className="Page">
        <Modal />
        {this.props.contents}
      </div>
    );
  }
}

Page.propTypes = {
  contents: PropTypes.object
}

export default Page;