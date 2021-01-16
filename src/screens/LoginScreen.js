import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
	Login,
	LoginImg,
	LogForm,
	LogInput,
	LoginButton,
} from '../components/styled';
// import { auth } from '../firebase';
import Logo from '../images/logo.svg';
import { login } from '../actions/userActions';
import { useDispatch, useSelector } from 'react-redux';

const LoginScreen = () => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const dispatch = useDispatch();

	const loginToapp = (e) => {
		e.preventDefault();
	};
	return (
		<>
			<Login>
				<LoginImg src={Logo} alt='logo' />
				<LogForm>
					<LogInput
						value={email}
						onChange={(e) => setEmail(e.target.value)}
						placeholder='Email'
						type='email'
					/>
					<LogInput
						value={password}
						onChange={(e) => setPassword(e.target.value)}
						placeholder='Password'
						type='password'
					/>
					<LoginButton onClick={loginToapp} type='submit'>
						Sign In
					</LoginButton>
				</LogForm>
				<p
					style={{
						color: '#efefef',
						marginTop: '20px',
						fontWeight: 'medium',
					}}>
					Not a member?{' '}
					<Link
						to='/register'
						style={{
							color: '#85c5e5',
							textDecoration: 'none',
							fontWeight: 'Bold',
							cursor: 'pointer',
						}}>
						Register Now
					</Link>
				</p>
			</Login>
		</>
	);
};

export default LoginScreen;
