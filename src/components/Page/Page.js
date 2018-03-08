import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './page.css';

class Page extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        let username = this.props.currentUser + " - " + this.props.userBank;
        return (
            <div id="pageContainer" className="Page">
                <div className="Username"> {username} </div> 
                {this.props.contents}
            </div>
        );
    }
}

Page.propTypes = {
    currentUser: PropTypes.string,
    userBank: PropTypes.string,
    contents: PropTypes.object
}

export default Page;