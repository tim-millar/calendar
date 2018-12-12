import React from 'react';
import DateTime from 'react-datetime'
import Input from '@material-ui/core/Input';
import Icon from '@material-ui/core/Icon';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import CalendarToday from '@material-ui/icons/CalendarToday'
import Button from '@material-ui/core/Button';
import Label from './Label'
import '../../../node_modules/react-datetime/css/react-datetime.css'
import { contextWrapper } from './context';

class AppointmentForm extends React.Component {
	constructor(props) {
		super(props)
	}

	handleChange = (event) => {
		const name = event.target.name
		let obj = {}
		obj[name] = event.target.value
		this.props.onUserInput(obj)
	}

	handleSubmit = (event) => {
		event.preventDefault()
		this.props.onFormSubmit()
	}

	setTime = (event) => {
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
						<TextField
							label="Make an appointment"
							type="text"
							name="title"
							fullWidth={true}
							margin="normal"
							variant="outlined"
							onChange={this.handleChange}
							InputProps={{
								endAdornment: (
									<InputAdornment postition="start">
										<CalendarToday />
									</InputAdornment>
							)}}
						/>
						<br/>
						<DateTime
							input={false}
							open={true}
							inputProps={inputProps}
							value={this.props.time}
							onChange={this.setTime} />
				    <Button
			        variant="contained"
			        color="primary"
			        align="center"
			        fullWidth={true} >
				      Make Appointment
			      </Button>
						<br/>
					</div>
				</div>
		  </form>
		)
	}
}

export default contextWrapper(AppointmentForm);
