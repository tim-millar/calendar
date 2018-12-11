import React from 'react';
import { mount } from 'enzyme'
import  Appointment from 'Appointment';

describe('Appointment', () => {
	it('should render the title and date', () => {
		const wrapper = mount(
			<Appointment title={'Appointment'} time={'2018-03-30'} />
		)
		expect(wrapper.html()).toEqual(
			'<div class=\"card\"><h3>Appointment</h3><p>March 30 2018, 12:00:00 am</p></div>'
		)
		wrapper.unmount();
	})
})
