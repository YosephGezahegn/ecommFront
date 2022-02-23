import React from 'react';

import CategoryList from './Category/CategoryList';
import Category from './Category/Category';
import Carousel from './Category/CarouselC';

const HomePage = () => {
	return (
		<>
			<div>
				{/* <Filter /> */}
				<Carousel />
				<div className="pt-4">
					<Category />
				</div>

				<CategoryList />
			</div>
		</>
	);
};

export default HomePage;
