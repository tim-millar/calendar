import React from 'react';
import { formatDate } from './utils';

class Appointment extends React.PureComponent {
	render () {
		return (
			<div className="card">
				<h3>{this.props.title}</h3>
				<p>{formatDate(this.props.time)}</p>
			</div>
		)
	}
}

export default Appointment
