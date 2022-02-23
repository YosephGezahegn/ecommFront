import React from 'react';
import { LinkContainer } from 'react-router-bootstrap';
import { useNavigate } from 'react-router-dom';

import { useAppSelector, useAppDispatch } from '../../app/hooks';

const AdminCard = ({ value, newPath, title }: any) => {
	const dispatch = useAppDispatch();
	const history = useNavigate();

	const handleClick = () => {
		history(`/admin/${newPath}`);
	};
	return (
		<>
			<div
				onClick={(e: any) => handleClick()}
				className="col-xl-12 col-md-12 mb-4"
			>
				<div className="card border-left-primary shadow h-100 py-2">
					<div className="card-body">
						<div className="row no-gutters align-items-center">
							<div className="col mr-2">
								<div className="text-xs font-weight-bold text-primary text-uppercase mb-1">
									{title}
								</div>
								<div className="h5 mb-0 font-weight-bold text-gray-800">
									{value}
								</div>
							</div>
							<div className="col-auto">
								<i className="fas fa-user fa-2x text-gray-300"></i>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default AdminCard;
