import React from 'react';
import { Options, TitleH3, Avatar } from './styled';

const HeaderOptions = ({ avatar, Icon, title }) => {
	return (
		<>
			<Options>
				{Icon && <Icon />}
				{avatar && <Avatar src={avatar} />}
				<TitleH3>{title}</TitleH3>
			</Options>
		</>
	);
};

export default HeaderOptions;
