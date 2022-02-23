import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Navigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

import Home from '../src/components/HomePage';
import ProductItem from './components/Products/ProductItem';
import NavBarPage from './components/NavPage/NavC';
import CartPage from './components/Cart/CartPage';
import SignIn from './components/Admin/SignIn';
import SignUp from './components/Admin/Signup';

import { useAppSelector, useAppDispatch } from './app/hooks';
import ProductList from './components/Products/ProductList';
import AdminPage from './components/Admin/AdminPage';
import UserTable from './components/Admin/UserTable';
import ProductTable from './components/Admin/ProductTable';
import ProductCreate from './components/Admin/ProductCreate';
import { Profile } from './components/Admin/Profile';

function App() {
	const { currentUser, isLoggedIn } = useAppSelector(
		(state: any) => state?.user
	);

	if (!currentUser || !isLoggedIn) {
		console.log('erro');
	}

	var locStore = JSON.parse(localStorage.getItem('persist:root') || '{}');

	console.log(locStore?.state);

	return (
		<>
			<Router>
				<NavBarPage />
				<ToastContainer />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/cart" element={<CartPage />}></Route>
					<Route path="/products" element={<ProductList />}></Route>
					<Route path="/product/:id" element={<ProductItem />}></Route>
					<Route path="/profile" element={<Profile />}></Route>
					<Route
						path="admin"
						element={
							currentUser?.token && currentUser?.isAdmin === true ? (
								<AdminPage />
							) : (
								<Navigate to="/" />
							)
						}
					>
						<Route path="userTable" element={<UserTable />} />
						<Route path="productTable" element={<ProductTable />} />
						<Route path="addProduct" element={<ProductCreate />} />
						<Route path="addProduct/:id" element={<ProductCreate />} />
					</Route>

					<Route
						path="/login"
						element={currentUser?.token ? <Navigate to="/" /> : <SignIn />}
					/>
					<Route
						path="/register"
						element={currentUser?.token ? <Navigate to="/" /> : <SignUp />}
					/>
				</Routes>
			</Router>
		</>
	);
}

export default App;
