import React from 'react';
import { Login, LoginImg, LogForm, LogInput } from '../components/styled';
import Logo from '../images/logo.svg';

const LoginScreen = () => {
	return (
		<>
			<Login>
				<LoginImg src={Logo} alt='logo' />
				<LogForm>
					<LogInput placeholder='Full name' type='text' />
				</LogForm>
			</Login>
		</>
	);
};

export default LoginScreen;
