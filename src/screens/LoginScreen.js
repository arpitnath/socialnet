import { red } from '@material-ui/core/colors';
import React from 'react';
import { Link } from 'react-router-dom';
import {
	Login,
	LoginImg,
	LogForm,
	LogInput,
	LoginButton,
} from '../components/styled';
import Logo from '../images/logo.svg';

const LoginScreen = () => {
	const login = () => {};
	return (
		<>
			<Login>
				<LoginImg src={Logo} alt='logo' />
				<LogForm>
					<LogInput placeholder='Email' type='email' />
					<LogInput placeholder='Password' type='password' />
					<LoginButton onClick={login} type='submit'>
						Sign In
					</LoginButton>
				</LogForm>
				<p
					style={{
						color: '#efefef',
						marginTop: '20px',
					}}>
					Not a member ?
					<Link
						to='/register'
						style={{
							color: '#85c5e5',
							textDecoration: 'none',
							fontWeight: 'Bold',
							cursor: 'pointer',
							marginLeft: '5px',
						}}>
						Register Now
					</Link>
				</p>
			</Login>
		</>
	);
};

export default LoginScreen;
