import React from 'react';
import { useLocation } from 'react-router-dom';

function LocationDisplay() {
	const { pathname } = useLocation();
	return <div>{pathname}</div>;
}

export default LocationDisplay;
