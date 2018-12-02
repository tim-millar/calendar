import React from 'react';

class AppointmentsList extends React.Component {
	render () {
		return (
			<div>
				{this.props.children(this.props.appointments)}
			</div>
		)
	}
}

export default AppointmentsList;
