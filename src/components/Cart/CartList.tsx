import React from 'react';

const CartList = () => {
	return (
		<div>
			<div className="card snipcss-xrClV">
				<div className="row no-gutters">
					<aside className="col-md-9">
						<article className="card-body border-bottom">
							<div className="row">
								<div className="col-md-7">
									<figure className="itemside">
										<div className="aside">
											<img
												src="https://bootstrap-ecommerce.com/bootstrap-ecommerce-html/images/items/1.jpg"
												className="border img-sm"
											/>
										</div>
										<figcaption className="info">
											<a href="#" className="title">
												Some name of item goes here nice
											</a>
											<strong>$128.00</strong>
											<div>
												<a href="#" className="btn-link mr-2">
													Save for later
												</a>
												<a href="#" className="btn-link text-danger">
													Delete
												</a>
											</div>
										</figcaption>
									</figure>
								</div>
								{/* col.// */}
								<div className="col-md-5 text-md-right text-right">
									<div className="input-group input-spinner">
										<div className="input-group-prepend">
											<button
												className="btn btn-light"
												type="button"
												id="button-plus"
											>
												<i className="fa fa-plus"></i>
											</button>
										</div>
										<input
											type="text"
											className="form-control"
											defaultValue={1}
										/>
										<div className="input-group-append">
											<button
												className="btn btn-light"
												type="button"
												id="button-minus"
											>
												<i className="fa fa-minus"></i>
											</button>
										</div>
									</div>
									{/* input-group.// */}
								</div>
							</div>
							{/* row.// */}
						</article>
						{/* card-group.// */}
						<article className="card-body border-bottom">
							<div className="row">
								<div className="col-md-7">
									<figure className="itemside">
										<div className="aside">
											<img
												src="https://bootstrap-ecommerce.com/bootstrap-ecommerce-html/images/items/2.jpg"
												className="border img-sm"
											/>
										</div>
										<figcaption className="info">
											<a href="#" className="title">
												Product name goes here nice
											</a>
											<strong>$128.00</strong>
											<div>
												<a href="#" className="btn-link mr-2">
													Save for later
												</a>
												<a href="#" className="btn-link text-danger">
													Delete
												</a>
											</div>
										</figcaption>
									</figure>
								</div>
								{/* col.// */}
								<div className="col-md-5 text-md-right text-right">
									<div className="input-group input-spinner">
										<div className="input-group-prepend">
											<button
												className="btn btn-light"
												type="button"
												id="button-plus"
											>
												<i className="fa fa-plus"></i>
											</button>
										</div>
										<input
											type="text"
											className="form-control"
											defaultValue={1}
										/>
										<div className="input-group-append">
											<button
												className="btn btn-light"
												type="button"
												id="button-minus"
											>
												<i className="fa fa-minus"></i>
											</button>
										</div>
									</div>
									{/* input-group.// */}
								</div>
							</div>
							{/* row.// */}
						</article>
						{/* card-group.// */}
						<article className="card-body border-bottom">
							<div className="row">
								<div className="col-md-7">
									<figure className="itemside">
										<div className="aside">
											<img
												src="https://bootstrap-ecommerce.com/bootstrap-ecommerce-html/images/items/3.jpg"
												className="border img-sm"
											/>
										</div>
										<figcaption className="info">
											<a href="#" className="title">
												Another name of some product goes just
											</a>
											<strong>$98.50</strong>
											<div>
												<a href="#" className="btn-link mr-2">
													Save for later
												</a>
												<a href="#" className="btn-link text-danger">
													Delete
												</a>
											</div>
										</figcaption>
									</figure>
								</div>
								{/* col.// */}
								<div className="col-md-5 text-md-right text-right">
									<div className="input-group input-spinner">
										<div className="input-group-prepend">
											<button
												className="btn btn-light"
												type="button"
												id="button-plus"
											>
												<i className="fa fa-plus"></i>
											</button>
										</div>
										<input
											type="text"
											className="form-control"
											defaultValue={1}
										/>
										<div className="input-group-append">
											<button
												className="btn btn-light"
												type="button"
												id="button-minus"
											>
												<i className="fa fa-minus"></i>
											</button>
										</div>
									</div>
									{/* input-group.// */}
								</div>
							</div>
							{/* row.// */}
						</article>
						{/* card-group.// */}
					</aside>
					{/* col.// */}
					<aside className="col-md-3 border-left">
						<div className="card-body">
							<dl className="dlist-align">
								<dt>Total price:</dt>
								<dd className="text-right">$69.00</dd>
							</dl>
							<dl className="dlist-align">
								<dt>Discount:</dt>
								<dd className="text-right text-danger">- $13.00</dd>
							</dl>
							<dl className="dlist-align">
								<dt>Total:</dt>
								<dd className="text-right text-dark b">
									<strong>$80.45</strong>
								</dd>
							</dl>
							<hr />
							<a href="#" className="btn btn-primary btn-block">
								Make Purchase
							</a>
							<a href="#" className="btn btn-light btn-block">
								Continue Shopping
							</a>
						</div>
						{/* card-body.// */}
					</aside>
					{/* col.// */}
				</div>
				{/* row.// */}
			</div>
		</div>
	);
};

export default CartList;
