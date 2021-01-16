import React from 'react';
import { Link } from 'react-router-dom';
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
						<SerachInput placeholder='Search' type='text' />
					</HeaderSearch>
				</HeaderLeft>
				<HeaderRight>
					<Link to='/'>
						<HeaderOptions Icon={HomeIcon} title='Home' />
					</Link>
					<Link to='explore'>
						<HeaderOptions Icon={ExploreIcon} title='Explore' />
					</Link>
					<Link to='#'>
						<HeaderOptions Icon={MessageIcon} title='Messages' />
					</Link>

					<Link to='#'>
						<HeaderOptions
							Icon={NotificationsActiveIcon}
							title='Notifications'
						/>
					</Link>
					<Link to='/profile'>
						<HeaderOptions avatar={avatarImg} />
					</Link>
				</HeaderRight>
			</HeaderComp>
		</>
	);
};

export default Header;
