import React from 'react'
import { shallow } from 'enzyme'
import Appointments from 'Appointments'

describe('Appointments', () => {
  it('renders a new Appointments component', () => {
    const appointmentForm = shallow(<Appointments />)
    expect(appointmentForm).toMatchSnapshot()
  })
})
