import React from 'react';
import { GoogleLogin } from 'react-google-login';

import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { loginSuccess } from '../../features/user/userSlice';
import { useAppDispatch } from '../../app/hooks';

const GoogleLoginComp = () => {
	const history = useNavigate();
	const dispatch = useAppDispatch();

	const responseGoogle = async (response: any) => {
		let res = await axios.post(
			// 'http://localhost:5000/api/v1/auth/google-auth',
			'https://fs8backendshop.herokuapp.com/api/v1/auth/google-auth',
			{ id_token: response.tokenObj.id_token }
		);
		dispatch(loginSuccess(res.data));
		return res;
	};

	const responseFailGoogle = () => {
		history('/');
	};

	return (
		<>
			<GoogleLogin
				clientId="706348972330-encilhfc25gl2rrpub4ndvrkeku9ratq.apps.googleusercontent.com"
				buttonText="Login"
				onSuccess={responseGoogle}
				onFailure={responseFailGoogle}
				cookiePolicy={'single_host_origin'}
			/>
		</>
	);
};

export default GoogleLoginComp;
