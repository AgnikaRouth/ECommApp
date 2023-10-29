import { Route, Router } from 'react-router-dom';
// import { Switch } from 'react-router';
import Cart from './pages/Cart';
import Home from './pages/Home';
import Login from './pages/Login';
import Product from './pages/Product';
import ProductList from './pages/ProductList';
import Register from './pages/Register';

const App = () => {
	return (
		<Home />
		// <Router>
		// 	{/* <Switch> */}
		// 	<Route exact path='/'>
		// 		{' '}
		// 		<Home />
		// 	</Route>
		// 	<Route path='/products/:category'>
		// 		<ProductList />
		// 	</Route>
		// 	<Route path='/product/:id'>
		// 		<Product />
		// 	</Route>
		// 	<Route path='/cart'>
		// 		<Cart />
		// 	</Route>
		// 	{/* <Route path='/success'>
		// 		<Success />
		// 	</Route> */}
		// 	{/* Login */}
		// 	{/* Register */}
		// 	{/* </Switch> */}
		// </Router>
	);
};

export default App;

