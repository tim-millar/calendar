import React from "react"
import PropTypes from "prop-types"

class Label extends React.PureComponent {
  render () {
    return (
      <React.Fragment>
        {this.props.label}
      </React.Fragment>
    );
  }
}

Label.propTypes = {
  label: PropTypes.string
};

export default Label
