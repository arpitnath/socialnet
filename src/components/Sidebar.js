import { Avatar } from '@material-ui/core';
import React from 'react';
import { SidebarComp, BgImg, SidebarTitle, SidebarSpan } from './styled';

const Sidebar = () => {
	return (
		<SidebarComp>
			<BgImg />
			<Avatar />
			<SidebarTitle>Sample Name</SidebarTitle>
			<SidebarSpan>test@gmail.com</SidebarSpan>
		</SidebarComp>
	);
};

export default Sidebar;
