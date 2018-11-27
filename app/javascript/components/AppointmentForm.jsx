import React from 'react';

class AppointmentForm extends React.Component {
	constructor(props) {
		super(props)
		this.handleChange = this.handleChange.bind(this)
	}

	handleChange(event) {
		var name = event.target.name
		var obj = {}
		obj[name] = event.target.value
		this.props.onUserInput(obj)
	}

	render () {
		return (
			<form className="form card">
				<div className="fields">
					<div className="input-text">
						<label htmlFor="title">Appointment Title</label><br/>
						<input
							type="text"
							name="title"
							value={this.props.title}
							onChange={this.handleChange} />
						<br/>
						<label htmlFor="time">Time</label><br/>
						<input
							type="date"
							name="time"
							value={this.props.time}
							onChange={this.handleChange} />
						<br/>
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
