import React from "react"
import PropTypes from "prop-types"
import axios from 'axios'
import update from 'immutability-helper'

import AppointmentForm from './AppointmentForm';
import AppointmentsList from './AppointmentsList';

class Appointments extends React.Component {
	constructor (props) {
		super(props)
		this.state = {
			appointments: this.props.appointments,
			title: 'Make an appointment',
			time: 'DD-MM-YYYY',
		}
		this.handleUserInput = this.handleUserInput.bind(this)
		this.handleFormSubmit = this.handleFormSubmit.bind(this)
		this.addNewAppointment = this.addNewAppointment.bind(this)
	}

	handleUserInput (obj) {
		this.setState(obj)
	}

	handleFormSubmit () {
		const appointment = {
			title: this.state.title,
			time: this.state.time,
		}

		axios({
			method: 'post',
			url: '/appointments',
			data: { appointment },
			headers: {
				'X-CSRF-Token': document.querySelector("meta[name=csrf-token]").content
			}
		}).then((response) => {
			this.addNewAppointment(response.data)
		})
	}

	addNewAppointment (appointment) {
		const appointments = update(
			this.state.appointments, { $push: [appointment] }
		)
		this.setState({
			title: 'Make an appointment',
			time: 'DD-MM-YYYY',
			appointments: appointments.sort(function(a,b) {
				return new Date(a.time) - new Date(b.time)
		})})
	}

	render () {
		return (
			<div>
				<AppointmentForm
					title={this.state.title}
					time={this.state.time}
					onUserInput={this.handleUserInput}
					onFormSubmit={this.handleFormSubmit} />
				<AppointmentsList appointments={this.state.appointments} />
			</div>
		)
	}
}

export default Appointments
