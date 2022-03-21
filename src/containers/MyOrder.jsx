import React, { useState, useContext } from 'react';
import OrderItem from '@components/OrderItem';
import AppContext from '../context/AppContext';
import '@styles/MyOrder.scss';
import arrow from '@icons/flechita.svg';

const MyOrder = () => {
	const { state } = useContext(AppContext);

	const [style, setStyle] = useState("MyOrder");

	const sumTotal = () => {
		const reducer = (accumulator, currentValue) => accumulator + currentValue.price;
		const sum = state.cart.reduce(reducer, 0);
		return sum;
	}

	return (
		
		<aside className={style}>
			<div className="title-container">
				<img src={arrow} alt="arrow" onClick={() => setStyle((style) => (style === "hide" ? "MyOrder" : "hide"))}/>
				<p className="title">My order</p>
			</div>
			<div className="my-order-content">
			{state.cart.map((item,index) => (
				<OrderItem 
					item={item}
					key={index}
					index={index} 
				/>
			))}
				<div className="order">
					<p>
						<span>Total</span>
					</p>
					<p>{sumTotal()}€</p>
				</div>
				<button className="primary-button">
					Checkout
				</button>
			</div>
		</aside>
	);
}

export default MyOrder;