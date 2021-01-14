import { Avatar } from '@material-ui/core';
import React from 'react';
import {
	SidebarComp,
	BgImg,
	SidebarTitle,
	SidebarSpan,
	SidebarTop,
	SidebarStats,
	Stats,
	StatNum,
	SidebarBottom,
	Paragraph,
	Recent,
	Span,
	RecentP,
} from './styled';
import avatarImg from '../images/avatar.svg';

const Sidebar = () => {
	const recentItems = (topic) => (
		<Recent>
			<Span>#</Span>
			<RecentP>{topic}</RecentP>
		</Recent>
	);

	return (
		<SidebarComp>
			<SidebarTop>
				<BgImg src='https://images.unsplash.com/photo-1579546929518-9e396f3cc809?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=2550&q=80' />
				<Avatar src={avatarImg} className='sidebarAvatar' />

				<SidebarTitle>Sample Name</SidebarTitle>
				<SidebarSpan>test@gmail.com</SidebarSpan>
			</SidebarTop>
			<SidebarStats>
				<Stats>
					<Paragraph>Profile views</Paragraph>
					<StatNum>234</StatNum>
				</Stats>
				<Stats>
					<Paragraph>Views on post</Paragraph>
					<StatNum>34</StatNum>
				</Stats>
			</SidebarStats>
			<SidebarBottom>
				<p>Recent</p>
				{recentItems('ReactJs')}
				{recentItems('NodeJs')}
				{recentItems('ExpressJs')}
				{recentItems('Python')}
				{recentItems('babel')}
			</SidebarBottom>
		</SidebarComp>
	);
};

export default Sidebar;
