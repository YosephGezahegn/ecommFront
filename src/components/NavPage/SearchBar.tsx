import { useState, useEffect } from 'react';
import { FormControl, Form } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
// import { fetchAllProducts } from '../redux/actions/index';
// import { useHistory } from 'react-router-dom';

const SearchBar = () => {
	// const history = useHistory();
	const dispatch = useDispatch();
	const [searchTerm, setSearchTerm] = useState('');

	const qNew: string = '';
	const qCategory: string = '';

	const handleClick: any = (pid: any) => {
		// history.push('/');
		setSearchTerm(pid);
	};

	useEffect(() => {
		// dispatch(fetchAllProducts(qNew, qCategory, searchTerm));
	}, [searchTerm, dispatch]);

	return (
		<>
			<Form className="d-flex">
				<FormControl
					type="search"
					placeholder="Search"
					className="me-2"
					aria-label="Search"
					onChange={(event) => handleClick(event.target.value)}
				/>
			</Form>
		</>
	);
};

export default SearchBar;
