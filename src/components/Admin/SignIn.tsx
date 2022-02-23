import React from 'react';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Formik } from 'formik';
import {
	Alert,
	Button,
	Form,
	InputGroup,
	Row,
	Col,
	Container,
} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import * as Yup from 'yup';
import { login } from '../../app/apiCalls';

import './Admin.css';
import { LinkContainer } from 'react-router-bootstrap';
// import GoogleLoginComp from './GoogleLogin';

const schema = Yup.object().shape({
	username: Yup.string().required().min(4, 'Too short'),
	password: Yup.string().required().min(4, 'Too short'),
});
const SignIn = () => {
	const history = useNavigate();

	const dispatch = useDispatch();

	return (
		<>
			<div className="container mt-1 mb-5 d-flex justify-content-center">
				<div className=" d-block justify-content-center">
					<Formik
						validationSchema={schema}
						onSubmit={(data: any, { setSubmitting }) => {
							setSubmitting(true);
							const { username, password } = data;

							login(dispatch, { username, password });

							history('/login');
							setSubmitting(false);
						}}
						initialValues={{
							username: '',
							password: '',
						}}
					>
						{({
							handleSubmit,
							handleChange,
							handleBlur,
							values,
							isSubmitting,
							touched,
							isValid,
							errors,
						}) => (
							<>
								<div
									className="container mt-5 mb-5 d-flex justify-content-center border"
									style={{
										boxShadow: ' 0 1rem 3rem rgb(0 0 0 / 18%)',
										padding: '20px',
										margin: '3rem auto',
									}}
								>
									<Form noValidate onSubmit={handleSubmit}>
										<h3 className="text-center">Welcome Back</h3>
										<Row className="d-flex container flex-column justify-content-center mt-5 mb-5">
											<Col>
												<Form.Group className=" mb-5" controlId="username">
													{/* <Form.Label>Username</Form.Label> */}
													<InputGroup hasValidation>
														<Form.Control
															style={{
																borderRadius: '40px',
																height: '50px',
															}}
															type="text"
															placeholder="username"
															aria-describedby="inputGroupPrepend"
															name="username"
															value={values.username}
															onChange={handleChange}
															isInvalid={!!errors.username}
														/>
														<Form.Control.Feedback type="invalid">
															{errors.username}
														</Form.Control.Feedback>
													</InputGroup>
												</Form.Group>
											</Col>
											<Col>
												<Form.Group className=" mb-5 " controlId="password">
													{/* <Form.Label htmlFor="password">Password</Form.Label> */}
													<InputGroup hasValidation>
														<Form.Control
															style={{ borderRadius: '40px', height: '50px' }}
															type="password"
															placeholder="Password"
															aria-describedby="inputGroupPrepend"
															name="password"
															value={values.password}
															onChange={handleChange}
															isInvalid={!!errors.password}
														/>
														<Form.Control.Feedback type="invalid">
															{errors.password}
														</Form.Control.Feedback>
													</InputGroup>
												</Form.Group>
											</Col>
											<Col>
												<Button
													style={{
														borderRadius: '40px',
														width: '15rem',
														height: '3.2rem',
													}}
													type="submit"
												>
													Login
												</Button>
												<p className="text-center mt-4 mb-4">
													Don't have an account?
												</p>
												<LinkContainer
													style={{
														borderRadius: '40px',
														width: '15rem',
														height: '3.2rem',
													}}
													to="/register"
												>
													<Button
														disabled={isSubmitting}
														variant="outline-success"
														type="button"
													>
														Register
													</Button>
												</LinkContainer>
												<br />
												<div
													style={{
														borderRadius: '40px',
														marginTop: '20px',
														display: 'flex',
													}}
												>
													{/* <GoogleLoginComp /> */}
												</div>
											</Col>
										</Row>
									</Form>
								</div>
							</>
						)}
					</Formik>
				</div>
			</div>
		</>
	);
};

export default SignIn;
