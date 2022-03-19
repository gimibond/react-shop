import React, { useContext } from 'react';
import AppContext from '../context/AppContext';
import '@styles/OrderItem.scss';
import closeIcon from '@icons/icon_close.png'

const OrderItem = ({ item, index }) => {
	const { removeFromCart } = useContext(AppContext);
	const handleRemove = (product) => {
	  removeFromCart(product, index);
	};
	return (
	  <div className="OrderItem">
		<figure>
		  <img src={item.images[0]}alt={item.title} />
		</figure>
		<p>{item.title}</p>
		<p>{item.price}€</p>
		<img src={closeIcon} alt="close" onClick={() => handleRemove(item)} />
	  </div>
	);
  };

export default OrderItem;