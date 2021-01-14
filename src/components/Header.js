import React from 'react';
import {
	HeaderComp,
	HeaderLeft,
	HeaderRight,
	Image,
	HeaderSearch,
	SerachInput,
} from './styled';
import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home';
import ExploreIcon from '@material-ui/icons/Explore';
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive';
import MessageIcon from '@material-ui/icons/Message';
import logo from '../images/logo.svg';
import avatarImg from '../images/avatar.svg';
import HeaderOptions from './HeaderOptions';

const Header = () => {
	return (
		<>
			<HeaderComp>
				<HeaderLeft>
					<Image src={logo} alt='logo' />
					<HeaderSearch>
						<SearchIcon style={{}} />
						<SerachInput type='text' />
					</HeaderSearch>
				</HeaderLeft>
				<HeaderRight>
					<HeaderOptions Icon={HomeIcon} title='Home' />
					<HeaderOptions Icon={ExploreIcon} title='Explore' />
					<HeaderOptions Icon={MessageIcon} title='Messages' />
					<HeaderOptions Icon={NotificationsActiveIcon} title='Notifications' />
					<HeaderOptions avatar={avatarImg} />
				</HeaderRight>
			</HeaderComp>
		</>
	);
};

export default Header;
