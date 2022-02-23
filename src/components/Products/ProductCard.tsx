import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import Rating from './Rating';

const ProductCard = ({ p }: any) => {
	return (
		<>
			<Card key={p._id}>
				<Card.Img
					variant="top"
					style={{ maxHeight: '300px' }}
					src={p.image[0]}
				/>
				<Card.Body>
					<Card.Title>{p.productName} </Card.Title>
					<Card.Text className="">{p.price}</Card.Text>
					<Card.Text className="">
						<Rating value={p.rating} />
					</Card.Text>
				</Card.Body>
				<Card.Footer className="d-flex justify-content-around">
					<span>
						<Link className="text-decoration-none" to={`/product/${p._id}`}>
							Details
						</Link>
					</span>
					<span>
						<Link className="text-decoration-none" to={`/product/${p._id}`}>
							Cart
						</Link>
					</span>
				</Card.Footer>
			</Card>
		</>
	);
};

export default ProductCard;
