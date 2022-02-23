import React from 'react';
import { useEffect } from 'react';
import { Badge, Nav, Navbar } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { Link } from 'react-router-dom';
import { getProducts } from '../../app/apiCalls';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import '../NavPage/Nav.css';
import AuthButton from './AuthButton';
import { GoogleLogout } from 'react-google-login';
import { getTotals } from '../../features/cart/cartSlice';

import { logout } from '../../features/user/userSlice';
// import SearchBar from './SearchBar';

const NavC = () => {
	const dispatch = useAppDispatch();
	const { cartItems } = useAppSelector((state) => state.cart);

	const cartQty = cartItems
		.map((p: any) => p.cartQuantity)
		.reduce((sum: number, a: any) => sum + a, 0);

	useEffect(() => {
		getProducts(dispatch);
		getTotals(dispatch);
	}, [dispatch]);

	return (
		<>
			<Navbar
				collapseOnSelect
				expand="lg"
				className="navbar-custom d-flex pr-2 pl-2"
				variant="dark"
			>
				<Navbar.Brand href="#home">
					<span style={{ fontSize: '2em' }}>
						<LinkContainer to="/">
							<i className="fas fa-store 3x"></i>
						</LinkContainer>
					</span>
				</Navbar.Brand>

				<Navbar.Toggle aria-controls="responsive-navbar-nav" />
				<Navbar.Collapse id="responsive-navbar-nav">
					<Link to="/products">
						<h4 className="text-white">Products</h4>
					</Link>

					<Nav>
						<Nav.Link href="#features">
							<span className="fas fa-user"></span>
						</Nav.Link>
						<AuthButton />

						<Nav.Link eventKey={2} href="#memes">
							<div className="widgets-wrap float-md-right snipcss-LjoJC">
								<div className="widget-header  mr-3">
									<Link
										to="/cart"
										className="icon icon-sm rounded-circle border"
									>
										<i className="fa fa-shopping-cart text-white"></i>
									</Link>
									<span className="badge badge-pill badge-danger notify">
										{cartQty}
									</span>
									{/* <a href="#" className="icon icon-sm rounded-circle border">
										<i className="fa fa-shopping-cart text-white"></i>
									</a> */}
								</div>{' '}
							</div>
						</Nav.Link>

						{/* <GoogleLogout
							clientId="706348972330-encilhfc25gl2rrpub4ndvrkeku9ratq.apps.googleusercontent.com"
							buttonText="Logout"
							onLogoutSuccess={logoutG}
						></GoogleLogout> */}
					</Nav>
				</Navbar.Collapse>
			</Navbar>
		</>
	);
};

export default NavC;
