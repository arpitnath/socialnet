import React from 'react';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import Feed from '../components/Feed';

const HomeScreen = () => {
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
