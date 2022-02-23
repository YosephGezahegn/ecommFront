import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
// import { createProduct } from '../redux/actions/index';
import { Formik, Field, FieldArray } from 'formik';
import * as Yup from 'yup';
import { useNavigate, useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { addProduct, getProductId, updateProduct } from '../../app/apiCalls';

const schema = Yup.object().shape({
	productName: Yup.string().required().min(2, 'Too short'),
	price: Yup.number().positive('Min Price is 0').required('Price is required.'),
	brand: Yup.string().required(),
});

const ProductForm = () => {
	const dispatch = useAppDispatch();
	const params = useParams();

	if (params.id) {
		console.log(params.id);
	}

	const { singleProduct } = useAppSelector((state: any) => state.product);
	const { id } = params;

	const jsonString: any | null = localStorage.getItem('persist:root');

	var user = JSON.parse(jsonString)?.product;
	const currentUser = user && JSON.parse(user).singleProduct._id;
	if (currentUser !== singleProduct._id) {
		window.location.reload();
	}

	useEffect(() => {
		try {
			if (id) {
				getProductId(id, dispatch);
				console.log('updating product');
			}
		} catch (error) {}
	}, [dispatch, id]);

	// console.log(singleProduct);

	const initial = {
		productName: '',
		price: 1,
		description: '',
		image: [],
		brand: '',
		category: [],
		rating: 1,
		discount: false,
		discountPrice: 0,
		inStock: 1,
	};

	return (
		<Container>
			<Formik
				initialValues={id ? singleProduct : initial}
				validationSchema={schema}
				onSubmit={(data: any, { setSubmitting }) => {
					setSubmitting(true);
					// console.log(data);

					if (params.id) {
						updateProduct(params.id, data, dispatch);
					} else {
						addProduct(data, dispatch);
					}

					setSubmitting(false);
				}}
			>
				{({
					values,
					isSubmitting,
					handleChange,
					handleBlur,
					handleReset,
					handleSubmit,
					touched,
					isValid,
					errors,
				}) => {
					return (
						<Form onSubmit={handleSubmit}>
							<Row className="mb-3">
								<Form.Group as={Col} md="4" xl="8" controlId="productName">
									<Form.Label>productName : {singleProduct._id}</Form.Label>
									<Form.Control
										type="text"
										placeholder="productName"
										name="productName"
										value={values.productName}
										onChange={handleChange}
										isInvalid={!!errors.productName}
									/>

									<Form.Control.Feedback type="invalid">
										{errors.productName}
									</Form.Control.Feedback>
								</Form.Group>

								<Form.Group as={Col} md="4" controlId="price">
									<Form.Label>Price</Form.Label>
									<Form.Control
										name="price"
										type="number"
										placeholder="Enter price"
										value={values.price}
										onChange={handleChange}
										isInvalid={!!errors.price}
									></Form.Control>
									<Form.Control.Feedback type="invalid">
										{errors.price}
									</Form.Control.Feedback>
								</Form.Group>
								<Form.Group as={Col} md="4" controlId="brand">
									<Form.Label>Brand</Form.Label>
									<Form.Control
										name="brand"
										placeholder="Enter brand"
										value={values.brand}
										onChange={handleChange}
									></Form.Control>
								</Form.Group>
							</Row>
							<Form.Label className="m-3">Add Multiple Images</Form.Label>
							<FieldArray
								name="image"
								render={(arrayHelpers) => (
									<Form.Group as={Col}>
										{values.image && values.image.length > 0 ? (
											values.image.map((img: string, index: any) => (
												<div className="d-flex" key={index}>
													<Field
														className="m-3 w-50"
														as={Form.Control}
														name={`image.${index}`}
													/>
													<Button
														className="m-2"
														type="button"
														onClick={() => arrayHelpers.remove(index)} // remove a friend from the list
													>
														-
													</Button>
													<Button
														className="m-2"
														type="button"
														onClick={() => arrayHelpers.insert(index, '')} // insert an empty string at a position
													>
														+
													</Button>
												</div>
											))
										) : (
											<Button
												className="m-2"
												type="button"
												onClick={() => arrayHelpers.push('')}
											>
												Add Image
											</Button>
										)}
									</Form.Group>
								)}
							/>

							<Form.Group controlId="inStock">
								<Form.Label>Count In Stock</Form.Label>
								<Form.Control
									name="inStock"
									type="number"
									placeholder="Enter Stock"
									value={values.inStock}
									onChange={handleChange}
								></Form.Control>
							</Form.Group>

							<Form.Group controlId="category">
								<Form.Label>Category</Form.Label>
								<FieldArray
									name="category"
									render={(arrayHelpers) => (
										<Form.Group as={Col}>
											{values.category && values.category.length > 0 ? (
												values.category.map((cat: string, index: any) => (
													<div className="d-flex" key={index}>
														<Field
															className="m-3 w-50"
															as={Form.Control}
															name={`category.${index}`}
														/>
														<Button
															className="m-2"
															type="button"
															onClick={() => arrayHelpers.remove(index)}
														>
															-
														</Button>
														<Button
															className="m-2"
															type="button"
															onClick={() => arrayHelpers.insert(index, '')} // insert an empty string at a position
														>
															+
														</Button>
													</div>
												))
											) : (
												<Button
													className="m-2"
													type="button"
													onClick={() => arrayHelpers.push('')}
												>
													Add Category
												</Button>
											)}
										</Form.Group>
									)}
								/>
							</Form.Group>

							<Form.Group controlId="rating">
								<Form.Label>Rating</Form.Label>
								<Form.Control
									name="rating"
									type="number"
									placeholder="Enter rating"
									value={values.rating}
									onChange={handleChange}
								></Form.Control>
							</Form.Group>

							<Form.Group controlId="description">
								<Form.Label>Description</Form.Label>
								<Form.Control
									name="description"
									type="text"
									placeholder="Enter Description"
									value={values.description}
									onChange={handleChange}
								></Form.Control>
							</Form.Group>

							<Form.Group controlId="discount">
								<Form.Label>discount</Form.Label>
								<Form.Check
									name="discount"
									label="Is on Discount"
									type="checkbox"
									placeholder="Enter discount"
									value={values.discount}
									onChange={handleChange}
								></Form.Check>
							</Form.Group>
							<Form.Group controlId="discountPrice">
								<Form.Label>discountPrice</Form.Label>
								<Form.Control
									name="discountPrice"
									type="number"
									placeholder="Enter discountPrice"
									value={values.discountPrice}
									onChange={handleChange}
								></Form.Control>
							</Form.Group>
							{params.id ? (
								<Button
									className="mt-3 mb-5"
									disabled={isSubmitting}
									type="submit"
									variant="secondary"
								>
									UPDATE
								</Button>
							) : (
								<Button
									className="mt-3 mb-5"
									disabled={isSubmitting}
									type="submit"
									variant="primary"
								>
									ADD PRODUCT
								</Button>
							)}
						</Form>
					);
				}}
			</Formik>
		</Container>
	);
};

export default ProductForm;
