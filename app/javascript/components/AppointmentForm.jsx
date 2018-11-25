import React from 'react';

class AppointmentForm extends React.Component {
	render () {
		return (
			<form>
				<input name="title" placeholder="Appointment Title" />
				<input name="time" placeholder="Date and Time" />
				<input type="submit" value="Make Appointment" />
			</form>
		)
	}
}

export default AppointmentForm;
