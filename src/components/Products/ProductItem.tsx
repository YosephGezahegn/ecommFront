import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { Row, Col, Card, Container, Badge, Button } from 'react-bootstrap';

import Rating from './Rating';
import { publicRequest } from '../../requestMethods';
import SpinnerC from '../Spinner/Spinner';
import { addToCart } from '../../features/cart/cartSlice';
import { useAppDispatch } from '../../app/hooks';

const ProductItem = () => {
	const { id } = useParams();
	const dispatch = useAppDispatch();
	const [productItem, setProductItem]: any = useState({});
	const [qty, setQty] = useState(1);
	const [loading, setLoading] = useState(true);
	const [pimage, setPimage] = useState('');

	useEffect(() => {
		const getProduct = async () => {
			try {
				const res = await publicRequest.get('/products/' + id);
				setProductItem(res.data);
				setPimage(res.data.image[0]);
				setLoading(false);
			} catch {}
		};
		getProduct();
	}, [id]);

	const handleQty = (type: string) => {
		if (type === 'add') {
			setQty(qty + 1);
		} else {
			qty > 1 && setQty(qty - 1);
		}
	};

	return (
		<>
			{loading ? (
				<SpinnerC />
			) : (
				<Container>
					<Col>
						<Row xs={1} md={2} lg={2} xl={2} className="g-4">
							<Col>
								<div className="flex-lg-fill">
									<Card.Img
										variant="top"
										style={{ maxHeight: '100%', maxWidth: '400px' }}
										src={pimage}
									/>
									<div className="d-flex  border ml-4">
										{productItem.image.map((i: any, n = 0) => (
											<Card.Img
												className="border"
												variant="top"
												style={{ maxHeight: '20%', maxWidth: '20%' }}
												src={i}
												onClick={() => setPimage(productItem.image[n++])}
											/>
										))}
									</div>
								</div>
							</Col>

							<Col className=" d-flex flex-column align-items pl-50">
								<h3 className="pb-4">{productItem.productName}</h3>

								<div className="mb-5">
									{productItem.discount ? (
										<div className="pb-3">
											<span className="pb-1 text-info fs-2  mr-4">
												<del>$ {productItem.price}</del>{' '}
											</span>{' '}
											<span className="pb-1 text-danger info fs-2  mr-4">
												{' '}
												${' '}
												{productItem.price -
													(productItem.price * productItem.discountPrice) /
														100}{' '}
											</span>
										</div>
									) : (
										<h4 className="pb-1 text-danger">
											{' '}
											$ {productItem.price}{' '}
										</h4>
									)}

									<div className="pb-4">
										<Rating value={productItem.rating} />
									</div>
									{productItem.inStock ? (
										<h5>
											<Badge pill bg="primary">
												AVAILABLE
											</Badge>
										</h5>
									) : (
										<h5>
											<Badge pill bg="danger">
												OUT OF STOCK
											</Badge>
										</h5>
									)}
								</div>

								<p className="pb-5">{productItem.description}</p>
								<div className=" d-flex justify-content-around">
									{/* <div
										className="border d-flex justify-content-around"
										style={{
											alignItems: 'center',
											maxWidth: 'fit-content',
										}}
									>
										<button
											style={{
												margin: 'auto 20px',
												fontSize: '30px',
												border: 'none',
												backgroundColor: 'inherit',
												maxWidth: '100%',
											}}
											type="button"
											onClick={() => handleQty('sub')}
										>
											-
										</button>
										<span style={{ fontSize: '25px', margin: 'auto 20px' }}>
											{' '}
											{qty}
										</span>
										<button
											style={{
												margin: 'auto 20px',
												fontSize: '30px',
												border: 'none',
												backgroundColor: 'inherit',
												maxWidth: '100%',
											}}
											onClick={() => handleQty('add')}
											type="button"
										>
											<span>+</span>
										</button>
									</div>{' '} */}
									<Button
										onClick={() => dispatch(addToCart(productItem))}
										className="mt-10 w-50 bg-light text-dark"
									>
										Add to cart
									</Button>
								</div>
							</Col>
						</Row>
					</Col>
				</Container>
			)}
		</>
	);
};

export default ProductItem;
