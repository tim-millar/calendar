import React from 'react';

class AppointmentsList extends React.PureComponent {
	render () {
		return (
			<div>
				{this.props.children(this.props.appointments)}
			</div>
		)
	}
}

export default AppointmentsList;
