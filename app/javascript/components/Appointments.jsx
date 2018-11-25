import React from "react"
import PropTypes from "prop-types"

import AppointmentForm from './AppointmentForm';
import AppointmentsList from './AppointmentsList';

class Appointments extends React.Component {
	render () {
		// const appointments = this.props.appointments;
		// const appointmentsList = appointments.map(function (appointment) {
		// 	return (
		// 		<Appointment
		// 			key={appointment.id}
		// 			title={appointment.title}
		// 			time={appointment.time} />
		// 	)
		// });

		return (
			<div>
				<AppointmentForm />
				<AppointmentsList appointments={this.props.appointments} />
			</div>
		)
	}
}

export default Appointments
