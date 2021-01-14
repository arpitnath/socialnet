import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import HomeScreen from './screens/HomeScreen';
import ExploreScreen from './screens/ExploreScreen';

function App() {
	return (
		<Router>
			<Route path='/explore' component={ExploreScreen} />
			<Route path='/' exact component={HomeScreen} />
		</Router>
	);
}

export default App;
