import React from 'react'
import { shallow, render } from 'enzyme'
import AppointmentForm from 'AppointmentForm'

jest.mock('react-datetime', () => 'datetime')

describe('AppointmentList', () => {
  it('renders a new appointments form', () => {
    const appointmentForm = shallow(
      <AppointmentForm title={'My new appointment'} time={'02-01-2019'} />,
    )
    expect(appointmentForm).toMatchSnapshot()
  })
})
