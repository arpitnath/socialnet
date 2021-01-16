import React from 'react';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import Feed from '../components/Feed';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';

const HomeScreen = ({ history }) => {
	const userLogin = useSelector((state) => state.userLogin);
	const { loading, error, userInfo } = userLogin;

	useEffect(() => {
		if (userInfo == null || !userInfo) {
			history.push('/login');
		}
	}, [userInfo, history]);

	return (
		<div className='app'>
			<Header />

			<div className='appBody'>
				<Sidebar />
				<Feed />
				{/* Widget */}
			</div>
		</div>
	);
};

export default HomeScreen;
