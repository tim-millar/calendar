import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import { formatDate } from './utils';

class Appointment extends React.PureComponent {
  static propTypes = {
    title: PropTypes.string.isRequired,
    time: PropTypes.string.isRequired
  }

	render () {
		return (
			<div className="card">
				<h3>{this.props.title}</h3>
				<p>{formatDate(this.props.time)}</p>
			</div>
		)
	}
}

export default Appointment
