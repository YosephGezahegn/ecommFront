import React from 'react';
import { useState } from 'react';
import { Form } from 'react-bootstrap';

const Filter = ({
	cat,
	brands,
	onCatFilter,
	onNameFilter,
	// onDateFilter,
	onBrandFilter,
}: any) => {
	const [filters, setFilters] = useState({
		brand: '',
		cat: '',
		name: '',
		from: '',
		to: '',
	});

	const handleInput = (field: any) => (event: any) => {
		const { value } = event.target;

		setFilters({
			...filters,
			[field]: value,
		});

		switch (field) {
			case 'brand':
				onBrandFilter(value);
				break;
			case 'cat':
				onCatFilter(value);
				break;
			case 'name':
				onNameFilter(value);
				break;
			default:
				break;
		}
	};

	console.log(filters);
	return (
		<>
			<div className="col-md-3 snipcss-Sk7AL">
				<div className="card-body">
					<form className="pb-3">
						<div className="input-group">
							<input
								type="text"
								className="form-control"
								placeholder="Search"
								onChange={handleInput('name')}
							/>
							<div className="input-group-append">
								<button className="btn btn-light" type="button">
									<i className="fa fa-search"></i>
								</button>
							</div>
						</div>
					</form>
				</div>
				<div className="card mb-3">
					<div className="card-header font-weight-bold text-uppercase">
						Brands
					</div>
					<div className="col-sm-12 my-2">
						<label htmlFor="cars">Choose Brand:</label>
						<select
							name="cars"
							id="cars"
							className="form-control"
							onChange={handleInput('brand')}
						>
							{brands.map((b: any) => (
								<option value={b}>{b}</option>
							))}
						</select>
					</div>
				</div>
				<div className="card mb-3">
					<div className="card-header font-weight-bold text-uppercase">
						Category
					</div>
					<div className="col-sm-12 my-2">
						{cat.map((c: any) => (
							<div
								className="form-check col-sm-12 my-2 m-1"
								onChange={handleInput('cat')}
							>
								<label>
									<input
										type="radio"
										name="react-tips"
										value={c}
										className="form-check-input"
									/>
									{c}
								</label>
							</div>
						))}
					</div>
				</div>
			</div>
		</>
	);
};

export default Filter;
