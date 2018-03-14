import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import './table.css';

class Table extends Component {
  constructor(props) {
		super(props);
	}
	
	render() {
		return(
			<div id="tableContainer">
				<div id="headerBar" className="headerBar">
					<span className="locOrdersText"> LETTERS OF CREDIT ORDERS </span>
					<span className="viewAllText"> View all </span>
				</div>
				<table>
					<tbody>
						<tr className="tableHeaders">
							<th>Ref number</th>
							<th>Submitter Account</th>							
							<th>Business Name</th>		
							<th>Date and Time</th>			
							<th>Status</th>			
						</tr>
						{this.props.rows}
					</tbody>
				</table>
				<button className="viewMoreButton">View more</button>
			</div>
			);
	}

}

Table.propTypes = {
	rows: PropTypes.arrayOf(PropTypes.object)
}

export default Table;
