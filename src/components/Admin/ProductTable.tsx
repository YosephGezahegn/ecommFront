import { Table } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { deleteProduct } from '../../app/apiCalls';
import { useAppDispatch } from '../../app/hooks';

const ProductTable = ({ prod }: any) => {
	const dispatch = useAppDispatch();
	const history = useNavigate();
	const handleClick = (productId: string) => {
		deleteProduct(productId, dispatch);
	};

	const handleUpdateClick = (id: string) => {
		history(`/admin/addProduct/${id}`);
	};
	return (
		<>
			<Table responsive>
				<thead>
					<tr>
						<th scope="col">#</th>
						<th scope="col">productName</th>
						<th scope="col"> IN STOCK</th>
						<th scope="col">DISCOUNT</th>
						<th scope="col">DISCOUNT % </th>
						<th scope="col">BRAND </th>
						<th scope="col">RATING </th>
						<th scope="col">PRODUCT ACTION </th>
					</tr>
				</thead>
				<tbody>
					{prod.map((p: any, i = 1) => (
						<tr key={p._id}>
							<td>{i + 1}</td>
							<th>{p.productName}</th>
							<td>{p.inStock}</td>
							<td>{p.discount ? 'available' : 'out of stock'}</td>
							<td>{p.discountPrice}%</td>
							<td>{p.brand}</td>
							<td>{p.rating}</td>

							<td className="py-2">
								<button
									onClick={() => handleUpdateClick(p._id)}
									type="button"
									className="btn btn-sm btn-success"
								>
									<i className="fas fa-edit" />
								</button>
								<button
									onClick={() => handleClick(p._id)}
									type="button"
									className="btn btn-sm btn-danger"
								>
									<i className="far fa-trash-alt" />
								</button>
							</td>
						</tr>
					))}
				</tbody>
			</Table>
		</>
	);
};

export default ProductTable;
