import { useState } from 'react';

import { useAppSelector, useAppDispatch } from '../../app/hooks';
import SpinnerC from '../Spinner/Spinner';
import { Col, Container, Row } from 'react-bootstrap';
import ProductCard from './ProductCard';
import Filter from './Filter';

export default function ProductList() {
	const dispatch = useAppDispatch();

	const { products, isFetching } = useAppSelector(
		(state: any) => state.product
	);

	const [allData, setData] = useState(products);

	if (!products) {
		console.log('no Brand');
	}

	const handleFilterName = (name: any) => {
		const filteredData = products.filter((item: any) => {
			if (item.productName.toLowerCase().includes(name.toLowerCase())) {
				return item;
			}
		});

		setData(filteredData);
	};
	const handleFilterBrand = (brand: any) => {
		const filteredData = products.filter((item: any) => {
			if (item.brand.toLowerCase().includes(brand.toLowerCase())) {
				return item;
			}
		});

		setData(filteredData);
	};
	const handleFilterCat = (cat: any) => {
		const result = products.filter((product: any) =>
			product.category.find((categ: any) => categ.includes(cat))
		);
		console.log(result);
		setData(result);
	};

	const generateCategoryDataForDropdown = () => {
		const category = products.map((d: any) => d.category).flat();
		return [...new Set(category)];
	};
	const generateBrandDataForDropdown = () => {
		return [...new Set(products.map((item: any) => item.brand))];
	};

	console.log(allData);
	return (
		<>
			<Container className="mt-5" fluid="md">
				<Row>
					<Filter
						cat={generateCategoryDataForDropdown()}
						brands={generateBrandDataForDropdown()}
						onCatFilter={handleFilterCat}
						onNameFilter={handleFilterName}
						//  onEmailFilter={handleFilterEmail}
						onBrandFilter={handleFilterBrand}
					/>

					<Col>
						{isFetching ? (
							<SpinnerC />
						) : (
							<Row xs={1} md={2} lg={3} xl={4} className="g-4">
								{allData.map((p: any) => (
									<ProductCard key={p._id} p={p} />
								))}
							</Row>
						)}
					</Col>
				</Row>
			</Container>
		</>
	);
}
