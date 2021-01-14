import React from 'react';
import { InputOptions } from './styled';

const FeedInputOptions = ({ Icon, title, color }) => {
	return (
		<InputOptions>
			<Icon style={{ color: color }} />
			<h4 style={{ marginLeft: '5px' }}>{title}</h4>
		</InputOptions>
	);
};

export default FeedInputOptions;
