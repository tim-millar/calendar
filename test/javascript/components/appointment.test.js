import React from 'react'
import { shallow } from 'enzyme'
import Appointment from 'Appointment'

describe('Appointment', () => {
  it('should render the title and date', () => {
    const appointment = shallow(
      <Appointment title={'Appointment'} time={'2018-03-30'} />,
    )
    expect(appointment).toMatchSnapshot()
  })
})
