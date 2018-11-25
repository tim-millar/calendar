import React from 'react';

class Appointment extends React.Component {
	render () {
		return (
			<div>
				<h3>{this.props.title}</h3>
				<p>{this.props.time}</p>
			</div>
		)
	}
}

export default Appointment
