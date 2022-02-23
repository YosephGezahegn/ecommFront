import React, { useState } from 'react';
import { useEffect } from 'react';
import { Table } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';
import { deleteUser } from '../../app/apiCalls';
import { useAppDispatch, useAppSelector } from '../../app/hooks';

// import { deleteUser } from '../redux/actions/index';

const UserTable = () => {
	const dispatch = useAppDispatch();

	const [usersTable, setUsersTable] = useState([]);
	const [loading, setLoading] = useState(false);

	const { users }: any = useAppSelector((state: any) => state?.user);

	useEffect(() => {
		setUsersTable(users);
	}, [users]);

	const handleDeleteClick = (userId: string) => {
		deleteUser(userId, dispatch);
	};

	if (!usersTable) {
		<div>No Users</div>;
	}
	return (
		<>
			{loading ? (
				<div>Loading</div>
			) : (
				<Table responsive>
					<thead>
						<tr>
							<th scope="col">#</th>
							<th scope="col"> USERNAME</th>
							<th scope="col">EMAIL</th>
							<th scope="col">ROLE </th>
						</tr>
					</thead>
					<tbody>
						{usersTable.map((u: any, i = 1) => (
							<tr key={u._id}>
								<th scope="row">{i + 1}</th>
								<td>{u.username.toUpperCase()}</td>
								<td>{u.email}</td>
								<td>{u.isAdmin ? 'ADMINSTRATOR' : 'CUSTOMER'}</td>

								<td className="py-2">
									<button type="button" className="btn btn-sm btn-success">
										<i className="fas fa-edit" />
									</button>
									<button
										onClick={() => handleDeleteClick(u._id)}
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
			)}
		</>
	);
};

export default UserTable;
