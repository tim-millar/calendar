import React from "react"
import PropTypes from "prop-types"

import AppointmentForm from './AppointmentForm';
import AppointmentsList from './AppointmentsList';

class Appointments extends React.Component {
	constructor (props) {
		super(props)
		this.state = {
			appointments: this.props.appointments,
			title: 'This is your first appointment',
			time: '2019-01-02',
		}
		this.handleUserInput = this.handleUserInput.bind(this)
	}

	handleUserInput (obj) {
		this.setState(obj)
	}

	render () {
		return (
			<div>
				<AppointmentForm
					title={this.state.title}
					time={this.state.time}
					onUserInput={this.handleUserInput} />
				<AppointmentsList appointments={this.state.appointments} />
			</div>
		)
	}
}

export default Appointments
