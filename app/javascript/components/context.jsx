import React from 'react';

export const { Provider, Consumer } = React.createContext({})

export const contextWrapper = (WrappedComponent) => {
	return class extends React.Component {
		render() {
			return (
				<Consumer>
					{ value => (
						<WrappedComponent {...value} {...this.props} />
					)}
				</Consumer>
			)
		}
	}
}
