import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import './table.css';

class Table extends Component {
  constructor(props) {
		super(props);
		this.state = {
			letter: {}
		}
  }

	componentWillReceiveProps(nextProps) {
		console.log(nextProps);
		this.setState({
			letter: nextProps.letter
		})
	}

	generateRows() {
		let lettersArray = this.props.letters;
		lettersArray.map((letter) => {
			// TODO - return a row for each letter in the array
		});
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
						<tr>
							<td className="blueText">{this.state.letter.letterId}</td>
							<td>Alice Hamilton</td>
							<td>QuickFix IT</td>
							<td>Yesterday</td>
							<td>{this.state.letter.status}</td>
						</tr>
						<tr>
							<td className="blueText">{this.state.letter.letterId}</td>
							<td>Alice Hamilton</td>
							<td>QuickFix IT</td>
							<td>Yesterday</td>
							<td>{this.state.letter.status}</td>
						</tr>
						<tr>
							<td className="blueText">{this.state.letter.letterId}</td>
							<td>Alice Hamilton</td>
							<td>QuickFix IT</td>
							<td>Yesterday</td>
							<td>{this.state.letter.status}</td>
						</tr>
						<tr>
							<td className="blueText">{this.state.letter.letterId}</td>
							<td>Alice Hamilton</td>
							<td>QuickFix IT</td>
							<td>Yesterday</td>
							<td>{this.state.letter.status}</td>
						</tr>
						<tr>
							<td className="blueText">{this.state.letter.letterId}</td>
							<td>Alice Hamilton</td>
							<td>QuickFix IT</td>
							<td>Yesterday</td>
							<td>{this.state.letter.status}</td>
						</tr>
						<tr>
							<td className="blueText">{this.state.letter.letterId}</td>
							<td>Alice Hamilton</td>
							<td>QuickFix IT</td>
							<td>Yesterday</td>
							<td>{this.state.letter.status}</td>
						</tr>
						<tr>
							<td className="blueText">{this.state.letter.letterId}</td>
							<td>Alice Hamilton</td>
							<td>QuickFix IT</td>
							<td>Yesterday</td>
							<td>{this.state.letter.status}</td>
						</tr>
						<tr>
							<td className="blueText">{this.state.letter.letterId}</td>
							<td>Alice Hamilton</td>
							<td>QuickFix IT</td>
							<td>Yesterday</td>
							<td>{this.state.letter.status}</td>
						</tr>
						<tr>
							<td className="blueText">{this.state.letter.letterId}</td>
							<td>Alice Hamilton</td>
							<td>QuickFix IT</td>
							<td>Yesterday</td>
							<td>{this.state.letter.status}</td>
						</tr>
					</tbody>
				</table>
				<button className="viewMoreButton">View more</button>
			</div>
			);
	}

}

Table.propTypes = {
	letter: PropTypes.object
}

export default Table;
