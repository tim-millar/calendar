import React from 'react';
import DateTime from 'react-datetime'
import '../../../node_modules/react-datetime/css/react-datetime.css'

class AppointmentForm extends React.Component {
	constructor(props) {
		super(props)
		this.handleChange = this.handleChange.bind(this)
		this.handleSubmit = this.handleSubmit.bind(this)
		this.setTime = this.setTime.bind(this)
	}

	handleChange(event) {
		const name = event.target.name
		let obj = {}
		obj[name] = event.target.value
		this.props.onUserInput(obj)
	}

	handleSubmit(event) {
		event.preventDefault()
		this.props.onFormSubmit()
	}

	setTime(event) {
		const name = 'time'
		let obj = {}
		if (obj[name] = event.toDate()) {
			this.props.onUserInput(obj)
		}
	}

	render () {
		let inputProps = {
			name: 'time'
		}

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
						<DateTime
							input={false}
							open={true}
							inputProps={inputProps}
							value={this.props.time}
							onChange={this.setTime}
							/>
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
