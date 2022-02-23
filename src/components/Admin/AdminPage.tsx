import { useEffect, useState } from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import { Route, Routes, Outlet } from 'react-router-dom';

import './sb-admin-2.css';

import UserTable from './UserTable';
import ProductTable from './ProductTable';
import AdminCard from './AdminCard';
import ProductCreate from './ProductCreate';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { getUsers } from '../../app/apiCalls';

const AdminPage = () => {
	const dispatch = useAppDispatch();

	const { products } = useAppSelector((state: any) => state.product);
	const { users }: any = useAppSelector((state: any) => state?.user);

	useEffect(() => {
		getUsers(dispatch);
	}, [dispatch]);

	if (!users) {
		<div>No Users</div>;
		window.location.reload();
	}

	return (
		<>
			<Container className="mt-30">
				<Row>
					<Col>
						<AdminCard
							title="NUMBER OF USERS"
							value={users.length}
							newPath="userTable"
						/>
					</Col>
					<Col>
						<AdminCard
							title="NUMBER OF PRODUCTS"
							value={products.length}
							newPath="productTable"
						/>
					</Col>
					<Col>
						<AdminCard title="ADD PRODUCT" value=" " newPath="addProduct" />
					</Col>
					<Routes>
						<Route path="userTable" element={<UserTable />} />
						<Route
							path="productTable"
							element={<ProductTable prod={products} />}
						/>
						<Route path="addProduct" element={<ProductCreate />} />
						<Route path="addProduct/:id" element={<ProductCreate />} />
					</Routes>
				</Row>
			</Container>
		</>
	);
};

export default AdminPage;
