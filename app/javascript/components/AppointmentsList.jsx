import React from 'react';

import Appointment from './Appointment';

class AppointmentsList extends React.Component {
	render () {
		const appointments = this.props.appointments;

		return (
			appointments.map(function (appointment) {
				return (
					<Appointment
						key={appointment.id}
						title={appointment.title}
						time={appointment.time} />
				)
			})
		)
	}
}

export default AppointmentsList;
