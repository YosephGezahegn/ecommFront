import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { LinkContainer } from 'react-router-bootstrap';
import {
	Alert,
	Button,
	Form,
	InputGroup,
	Row,
	Col,
	Container,
} from 'react-bootstrap';

import './Admin.css';
import { signup } from '../../app/apiCalls';
import { useAppDispatch } from '../../app/hooks';

const schema = Yup.object().shape({
	username: Yup.string().required().min(4, 'Too short'),
	password: Yup.string().required().min(4, 'Too short'),
	email: Yup.string().email('Invalid email').required('Required'),
});
const SignUp = () => {
	const dispatch = useAppDispatch();

	return (
		<>
			<div className="container mt-1 mb-5 d-flex justify-content-center">
				<div className=" d-block justify-content-center">
					<Formik
						validationSchema={schema}
						onSubmit={(data: any) => signup(dispatch, data)}
						initialValues={{
							username: '',
							password: '',
							email: '',
						}}
					>
						{({
							handleSubmit,
							handleChange,
							handleBlur,
							values,
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
										<h3 className="text-center">Register</h3>
										<Row className="d-flex container flex-column justify-content-center mt-5 mb-5">
											<Form.Group
												style={{ display: 'flex', justifyContent: 'center' }}
												className=" mb-5"
												controlId="username"
											>
												{/* <Form.Label>Username</Form.Label> */}
												<InputGroup hasValidation>
													<Form.Control
														style={{ borderRadius: '40px', height: '50px' }}
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

											<Form.Group className=" mb-5" controlId="email">
												{/* <Form.Label>Username</Form.Label> */}
												<InputGroup hasValidation>
													<Form.Control
														style={{ borderRadius: '40px', height: '50px' }}
														type="email"
														placeholder="email"
														aria-describedby="inputGroupPrepend"
														name="email"
														value={values.email}
														onChange={handleChange}
														isInvalid={!!errors.email}
													/>
													<Form.Control.Feedback type="invalid">
														{errors.email}
													</Form.Control.Feedback>
												</InputGroup>
											</Form.Group>

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
											<Button
												style={{
													borderRadius: '40px',
													width: '15rem',
													height: '3.2rem',
												}}
												type="submit"
											>
												Register
											</Button>
											<p className="text-center mt-4 mb-4">
												Already have an account?
											</p>
											<LinkContainer
												style={{
													borderRadius: '40px',
													width: '15rem',
													height: '3.2rem',
												}}
												to="/login"
											>
												<Button variant="outline-success" type="button">
													Login
												</Button>
											</LinkContainer>
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

export default SignUp;
