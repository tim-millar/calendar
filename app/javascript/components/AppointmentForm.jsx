import React from 'react';

class AppointmentForm extends React.Component {
	render () {
		return (
			<form className="form card">
				<div class="fields">
					<div className="input-text">
						<label htmlFor="title">Appointment Title</label><br/>
						<input type="text" name="title" placeholder="Appointment Title" /><br/>
						<label htmlFor="time">Time</label><br/>
						<input type="text" name="time" placeholder="Date and Time" /><br/>
					</div>
					<div className="submit-button">
						<input type="submit" value="Make Appointment" />
					</div>
				</div>
			</form>
		)
	}
}

export default AppointmentForm;
