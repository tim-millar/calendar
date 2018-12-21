import React from 'react'
import { shallow } from 'enzyme'
import AppointmentsList from 'AppointmentsList'

describe('AppointmentsList', () => {
  it('should render a list of appointments', () => {
    const children = jest.fn()
    const appointments = []
    const appointmentsList = shallow(
      <AppointmentsList children={children} appointments={appointments} />,
    )
    expect(appointmentsList).toMatchSnapshot()
    expect(children).toHaveBeenCalledWith(appointments)
  })
})
