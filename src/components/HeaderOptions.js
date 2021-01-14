import React from 'react';
import { Avatar } from '@material-ui/core';
import { Options, TitleH3 } from './styled';

const HeaderOptions = ({ avatar, Icon, title }) => {
	return (
		<>
			<Options>
				{Icon && <Icon />}
				{avatar && <Avatar className='headIcon' src={avatar} />}
				<TitleH3>{title}</TitleH3>
			</Options>
		</>
	);
};

export default HeaderOptions;
