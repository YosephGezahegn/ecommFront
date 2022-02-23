import React, { useEffect } from 'react';
import { Container, Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import {
	addToCart,
	clearCart,
	decreaseCart,
	getTotals,
	removeFromCart,
} from '../../features/cart/cartSlice';
const CartPage = () => {
	const dispatch = useAppDispatch();
	const { cartItems } = useAppSelector((state: any) => state?.cart);
	const a = '';
	useEffect(() => {
		dispatch(getTotals(cartItems));
	}, [cartItems, dispatch]);

	const handleAddToCart = (product: any) => {
		dispatch(addToCart(product));
	};
	const handleDecreaseCart = (product: any) => {
		dispatch(decreaseCart(product));
	};
	const handleRemoveFromCart = (product: any) => {
		dispatch(removeFromCart(product));
	};
	const handleClearCart = () => {
		dispatch(clearCart);
	};

	console.log(cartItems);
	return (
		<>
			{cartItems.length === 0 ? (
				<Container className="d-flex justify-content-center align-content-center mt-5 flex-grow-1">
					<div>No items in cart</div>
				</Container>
			) : (
				<Container className="small-container">
					<div className="card snipcss-M99i4">
						<table className="table table-borderless table-shopping-cart">
							<thead className="text-muted">
								<tr className="small text-uppercase">
									<th scope="col">Product</th>
									<th scope="col">Quantity</th>
									<th scope="col">Price</th>
									<th scope="col">Total Qty</th>
									<th scope="col" className="text-right"></th>
								</tr>
							</thead>
							<tbody>
								{cartItems.map((c: any) => (
									<tr>
										<td key={c._id}>
											<figure className="itemside align-items-center">
												<div className="aside">
													<img alt="name" src={c.image} className="img-sm" />
												</div>
												<figcaption className="info">
													<Link to="/" className="title text-dark">
														{c.productName}
													</Link>
													<p className="text-muted small">
														{c.category.map((cat: string) => (
															<span>{cat}, </span>
														))}
														<br />
														Brand: {c.brand}
													</p>
												</figcaption>
											</figure>
										</td>
										<td>
											<div className="form-group col-md flex-grow-0 snipcss-Gcl9N">
												<label>Quantity</label>
												<div className="input-group mb-3 input-spinner">
													<div className="input-group-prepend">
														<button
															className="btn btn-light"
															type="button"
															id="button-plus"
															onClick={() => handleAddToCart(c)}
														>
															+
														</button>
													</div>
													<input
														type="text"
														className="form-control"
														value={c.cartQuantity}
													/>
													<div className="input-group-append">
														<button
															className="btn btn-light"
															type="button"
															id="button-minus"
															onClick={() => handleDecreaseCart(c)}
														>
															−
														</button>
													</div>
												</div>
											</div>
										</td>
										<td>
											<div className="price-wrap">
												<var className="price">${c.price * c.cartQuantity}</var>
												<br />
												<small className="text-muted">${c.price} each</small>
											</div>
											{/* price-wrap .// */}
										</td>
										<td>
											<div className="price-wrap">
												<var className="price">{c.prodQty}</var>
											</div>
											{/* price-wrap .// */}
										</td>
										<td className="text-right">
											<Link
												to="/"
												data-original-title="Save to Wishlist"
												className="btn btn-light"
												data-toggle="tooltip"
											>
												<i className="fa fa-heart"></i>
											</Link>
											<a
												onClick={() => handleRemoveFromCart(c)}
												href="#"
												className="btn btn-light"
											>
												Remove
											</a>
										</td>
									</tr>
								))}
							</tbody>
						</table>
						<div className="card-body border-top">
							<p className="icontext">
								<i className="icon text-success fa fa-truck"></i>
								Free Delivery within 1-2 weeks
							</p>
						</div>
						{/* card-body.// */}
					</div>
				</Container>
			)}
		</>
	);
};

export default CartPage;
