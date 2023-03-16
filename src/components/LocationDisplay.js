import React, { Component } from 'react';

export default class LocationDisplay extends Component {
	constructor() {
		super();
		this.state = {
			pathname: window.location.pathname,
		};
	}
	render() {
		return <div data-testid="location-display">{this.state.pathname}</div>;
	}
}
