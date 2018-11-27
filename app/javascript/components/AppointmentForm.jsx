import React from 'react';

class AppointmentForm extends React.Component {
	constructor(props) {
		super(props)
		this.handleChange = this.handleChange.bind(this)
		this.handleSubmit = this.handleSubmit.bind(this)
	}

	handleChange(event) {
		const name = event.target.name
		let obj = {}
		obj[name] = event.target.value
		this.props.onUserInput(obj)
	}

	handleSubmit (event) {
		event.preventDefault()
		this.props.onFormSubmit()
	}

	render () {
		return (
			<form id="form" className="form card" onSubmit={this.handleSubmit}>
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
