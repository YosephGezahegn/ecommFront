import React, { useEffect, useState } from 'react';
import { useAppSelector } from '../../app/hooks';
import { LinkContainer } from 'react-router-bootstrap';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { Card, Container } from 'react-bootstrap';
import Rating from '../Products/Rating';

const responsive: any = {
	superLargeDesktop: {
		// the naming can be any, depends on you.
		breakpoint: { max: 4000, min: 3000 },
		items: 5,
	},
	desktop: {
		breakpoint: { max: 3000, min: 1024 },
		items: 3,
	},
	tablet: {
		breakpoint: { max: 1024, min: 464 },
		items: 2,
	},
	mobile: {
		breakpoint: { max: 464, min: 0 },
		items: 1,
	},
};
const CategoryList = () => {
	const [discount, setDiscount] = useState([]);
	const [topProducts, setTopProducts] = useState([]);

	const { products } = useAppSelector((state: any) => state.product);

	useEffect(() => {
		if (!products) {
			console.log('error');
		}
		const disc = products?.filter((d: any) => d.discount === true);
		setDiscount(disc);
		const top = products?.filter((d: any) => d.rating >= 4);
		setTopProducts(top);
		setDiscount(disc);
	}, [products]);

	if (!discount) {
		<div>loading</div>;
	}

	return (
		<>
			<Container className="pt-2 pb-3">
				<h2 className="text-center pt-5 pb-2">Products on Sale</h2>
				<Carousel responsive={responsive}>
					{discount.map((d: any) => (
						<Card key={d._id} style={{ border: 'none' }}>
							<LinkContainer
								className="text-decoration-none"
								to={`/product/${d._id}`}
							>
								<div className="p-5">
									<Card.Img
										variant="top"
										style={{ maxHeight: '300px' }}
										src={d.image[0]}
									/>
									<Card.Body>
										<Card.Title>{d.producName} </Card.Title>
										<Card.Text>
											{d.discount ? (
												<div className="pb-3">
													<span className="pb-1 text-info   mr-4">
														<del>$ {d.price}</del>{' '}
													</span>{' '}
													<br />
													<span className="pb-1 text-danger info   mr-4">
														{' '}
														$ {d.price - (d.price * d.discountPrice) / 100}{' '}
													</span>
													<span className="pb-1 text-sucess info   mr-4">
														{'     '}
														{d.discountPrice}% off
													</span>
												</div>
											) : (
												<h4 className="pb-1 text-danger"> $ {d.price} </h4>
											)}
										</Card.Text>
									</Card.Body>
								</div>
							</LinkContainer>
						</Card>
					))}
				</Carousel>
			</Container>
			<Container className="pt-2 pb-3">
				<h2 className="text-center pt-5 pb-2">Top Rated Products</h2>
				<Carousel responsive={responsive}>
					{topProducts.map((d: any) => (
						<Card key={d._id} style={{ border: 'none' }}>
							<LinkContainer
								className="text-decoration-none"
								to={`/product/${d._id}`}
							>
								<div className="p-5">
									<Card.Img
										variant="top"
										style={{ maxHeight: '300px' }}
										src={d.image[0]}
									/>
									<Card.Body>
										<Card.Title>{d.producName} </Card.Title>
										<Card.Text>$ {d.price}</Card.Text>
										<Card.Text>
											<Rating value={d.rating} />
										</Card.Text>
									</Card.Body>
								</div>
							</LinkContainer>
						</Card>
					))}
				</Carousel>
			</Container>
		</>
	);
};

export default CategoryList;
