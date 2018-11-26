import React from "react"
import PropTypes from "prop-types"

import AppointmentForm from './AppointmentForm';
import AppointmentsList from './AppointmentsList';

class Appointments extends React.Component {
	render () {
		return (
			<div>
				<AppointmentForm />
				<AppointmentsList appointments={this.props.appointments} />
			</div>
		)
	}
}

export default Appointments
