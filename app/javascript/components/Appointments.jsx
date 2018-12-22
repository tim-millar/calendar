import React from 'react'
import PropTypes from 'prop-types'
import axios from 'axios'
import update from 'immutability-helper'
import { hot } from 'react-hot-loader'

import Typography from '@material-ui/core/Typography'
import AppBar from '@material-ui/core/AppBar'

import AppointmentForm from './AppointmentForm'
import AppointmentsList from './AppointmentsList'
import Appointment from './Appointment'
import { contextWrapper, Provider } from './context'

import 'typeface-roboto'

// if (process.env.NODE_ENV !== 'production') {
//   const { whyDidYouUpdate } = require('why-did-you-update');
// 	whyDidYouUpdate(React)
// }

class Appointments extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      appointments: this.props.appointments,
      title: '',
      time: 'DD-MM-YYYY',
    }
  }

  handleUserInput = obj => {
    this.setState(obj)
  }

  handleFormSubmit = () => {
    const appointment = {
      title: this.state.title,
      time: this.state.time,
    }

    axios({
      method: 'post',
      url: '/appointments',
      data: { appointment },
      headers: {
        'X-CSRF-Token': document.querySelector('meta[name=csrf-token]').content,
      },
    }).then(response => {
      this.addNewAppointment(response.data)
    })
  }

  addNewAppointment = appointment => {
    const appointments = update(this.state.appointments, {
      $push: [appointment],
    })
    this.setState({
      title: '',
      time: 'DD-MM-YYYY',
      appointments: appointments.sort(function(a, b) {
        return new Date(a.time) - new Date(b.time)
      }),
    })
  }

  render() {
    const context = {
      onUserInput: this.handleUserInput,
      onFormSubmit: this.handleFormSubmit,
    }
    return (
      <div>
        <AppBar position="sticky">
          <Typography variant="h1" align="center" color="inherit">
            Calendar
          </Typography>
        </AppBar>
        <Provider value={context}>
          <AppointmentForm title={this.state.title} time={this.state.time} />
        </Provider>
        <AppointmentsList appointments={this.state.appointments}>
          {appointments => {
            return appointments.map(appointment => {
              return (
                <Appointment
                  key={appointment.id}
                  title={appointment.title}
                  time={appointment.time}
                />
              )
            })
          }}
        </AppointmentsList>
      </div>
    )
  }
}

export default hot(module)(Appointments)
