import React from 'react';
import { Carousel, Container } from 'react-bootstrap';

const CarouselC = () => {
	return (
		<>
			<Carousel style={{ maxHeight: '33%' }}>
				<Carousel.Item>
					<img
						className="d-block w-100"
						src="https://m.media-amazon.com/images/I/61smeVgiqfL._SX1500_.jpg"
						alt="First slide"
						// height="400px"
					/>
					<Carousel.Caption></Carousel.Caption>
				</Carousel.Item>
				<Carousel.Item>
					<img
						// height="400px"
						className="d-block w-100"
						src="https://m.media-amazon.com/images/I/61smeVgiqfL._SX1500_.jpg"
						alt="Second slide"
					/>

					<Carousel.Caption></Carousel.Caption>
				</Carousel.Item>
				<Carousel.Item>
					<img
						// height="400px"
						className="d-block w-100"
						src="https://m.media-amazon.com/images/I/61smeVgiqfL._SX1500_.jpg"
						alt="Third slide"
					/>

					<Carousel.Caption></Carousel.Caption>
				</Carousel.Item>
			</Carousel>
		</>
	);
};

export default CarouselC;
