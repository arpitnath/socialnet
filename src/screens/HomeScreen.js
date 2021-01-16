import React from 'react';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import Feed from '../components/Feed';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';

const HomeScreen = ({ history }) => {
	const userLogin = useSelector((state) => state.userLogin);

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
