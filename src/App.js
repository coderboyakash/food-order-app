import React, { Fragment, useState } from 'react'
import Header from './components/Layout/Header';
import Meals from './components/Meals/Meals';
import Cart from './components/Cart/Cart'
import CartProvider from './store/CartProvider';

const App = () => {
	const [cartIsShown, setCartIsShown] = useState(false)
	const showCartHandler = () => {
		setCartIsShown(true)
	}
	const hideCartHandler = () => {
		setCartIsShown(false)
	}
	return (
		<Fragment>
			<CartProvider>
				{cartIsShown && <Cart onHideCart={hideCartHandler} />}
				<Header onShowCart={showCartHandler}/>
				<main>
					<Meals />
				</main>
			</CartProvider>
		</Fragment>
	);
}

export default App
