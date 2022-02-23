import { Button, Nav, NavDropdown } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { useNavigate, Navigate } from 'react-router-dom';
import { getUsers } from '../../app/apiCalls';
import { useAppSelector, useAppDispatch } from '../../app/hooks';
import { logout } from '../../features/user/userSlice';

import '../NavPage/Nav.css';
const AuthButton = () => {
	const dispatch = useAppDispatch();
	const history = useNavigate();

	const handleClick = () => {
		dispatch(logout());
		history('/');
	};

	const { currentUser, isLoggedIn } = useAppSelector(
		(state: any) => state?.user
	);

	const handleAdminLogin = () => {
		getUsers(dispatch);
		history('/admin');
	};
	if (!isLoggedIn) {
		<Navigate to="/" />;
	}

	if (currentUser.isAdmin) {
		return (
			<NavDropdown
				title={`${currentUser.username}`}
				id="collasible-nav-dropdown"
				className="mr-5"
			>
				{' '}
				<NavDropdown.Item className="text-center">
					<i className="fas fa-user text-center"></i>
				</NavDropdown.Item>
				<LinkContainer to="/profile">
					<NavDropdown.Item className="text-center">Profile</NavDropdown.Item>
				</LinkContainer>
				<NavDropdown.Divider />
				<NavDropdown.Item className="text-center">
					<span>
						<div onClick={() => handleAdminLogin()}>ADMIN</div>
					</span>
				</NavDropdown.Item>
				<NavDropdown.Divider />
				<NavDropdown.Item className="text-center">
					<Button onClick={() => handleClick()} className="nav-button">
						{' '}
						Logout
					</Button>
				</NavDropdown.Item>
			</NavDropdown>
		);
	} else if (isLoggedIn && !currentUser.isAdmin) {
		return (
			<>
				<NavDropdown
					title={`${currentUser.username}`}
					id="collasible-nav-dropdown"
					className="mr-5"
				>
					{' '}
					<NavDropdown.Item className="text-center">
						<i className="fas fa-user text-center"></i>
					</NavDropdown.Item>
					<NavDropdown.Item className="text-center">Profile</NavDropdown.Item>
					<NavDropdown.Divider />
					<NavDropdown.Item className="text-center">
						<Button onClick={() => handleClick()} className="nav-button">
							{' '}
							Logout
						</Button>
					</NavDropdown.Item>
				</NavDropdown>
			</>
		);
	} else {
		return (
			<LinkContainer to="/login">
				<Nav.Link>LOGIN</Nav.Link>
			</LinkContainer>
		);
	}
};

export default AuthButton;
