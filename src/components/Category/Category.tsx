import React, { useEffect, useState } from 'react';
import { useAppSelector } from '../../app/hooks';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { Container } from 'react-bootstrap';

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
	const [cat, setCat] = useState([]);

	const {  products } = useAppSelector(
		(state: any) => state.product
	);

	useEffect(() => {
		if (!products) {
			console.log('error');
		}
		console.log(products.map((p: any) => p.category));
		const category = products.map((d: any) => d.category).flat();
		console.log(category);
		const uniqueCat: any = [...new Set(category)];
		console.log(uniqueCat);

		setCat(uniqueCat);
	}, [products]);

	console.log(cat);

	if (!cat) {
		<div>loading</div>;
	}

	return (
		<>
			<Container className="p-5">
				{/* <h2 className="text-center p-5">Product Category</h2> */}
				<Carousel responsive={responsive}>
					{cat.map((d: any) => (
						<Container className="p-3">
							<div
								style={{ backgroundColor: '#0071dc', color: 'white' }}
								className="rounded border p-3 text-center"
							>
								{d}
							</div>
						</Container>
					))}
				</Carousel>
			</Container>
		</>
	);
};

export default CategoryList;
