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
							<th>Ref Number</th>
							<th>Submitter Account</th>
							<th>Business Name</th>
							<th>Date and Time</th>
							<th>Status</th>
						</tr>
						<tr>
							<td className="blueText">R123456789</td>
							<td>Alice Hamilton</td>
							<td>QuickFix IT</td>
							<td>Yesterday</td>
							<td>Awaiting approval</td>
						</tr>
						<tr>
							<td className="blueText">R123456789</td>
							<td>Alice Hamilton</td>
							<td>QuickFix IT</td>
							<td>Yesterday</td>
							<td>Awaiting approval</td>
						</tr>
						<tr>
							<td className="blueText">R123456789</td>
							<td>Alice Hamilton</td>
							<td>QuickFix IT</td>
							<td>Yesterday</td>
							<td>Awaiting approval</td>
						</tr>
						<tr>
							<td className="blueText">R123456789</td>
							<td>Alice Hamilton</td>
							<td>QuickFix IT</td>
							<td>Yesterday</td>
							<td>Awaiting approval</td>
						</tr>
						<tr>
							<td className="blueText">R123456789</td>
							<td>Alice Hamilton</td>
							<td>QuickFix IT</td>
							<td>Yesterday</td>
							<td>Awaiting approval</td>
						</tr>
						<tr>
							<td className="blueText">R123456789</td>
							<td>Alice Hamilton</td>
							<td>QuickFix IT</td>
							<td>Yesterday</td>
							<td>Awaiting approval</td>
						</tr>
						<tr>
							<td className="blueText">R123456789</td>
							<td>Alice Hamilton</td>
							<td>QuickFix IT</td>
							<td>Yesterday</td>
							<td>Awaiting approval</td>
						</tr>
						<tr>
							<td className="blueText">R123456789</td>
							<td>Alice Hamilton</td>
							<td>QuickFix IT</td>
							<td>Yesterday</td>
							<td>Awaiting approval</td>
						</tr>
						<tr>
							<td className="blueText">R123456789</td>
							<td>Alice Hamilton</td>
							<td>QuickFix IT</td>
							<td>Yesterday</td>
							<td>Awaiting approval</td>
						</tr>
					</tbody>
				</table>
				<button>View more</button>
			</div>
		);
	}

}

Table.propTypes = {
	letters: PropTypes.arrayOf(PropTypes.object)
}

export default Table;
