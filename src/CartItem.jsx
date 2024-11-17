import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeCartSliceItem, incrementQuantity, decrementQuantity } from './CartSlice';
import './CartItem.css';

const CartItem = ({ onContinueShopping, onCheckout }) => {
  const cartItems = useSelector(state => state.cart.items);
  const [cartTotal, setCartTotal] = useState(0)
  const dispatch = useDispatch();

  // Calculate total amount for all products in the cart
  const calculateTotalAmount = () => {
      let total = 0.0
      cartItems.forEach(item => {
        total += calculateTotalCost(item)
      });
      return total
  }; 


  const handleIncrement = (item) => { 
    dispatch(incrementQuantity(item));
  };

  const handleDecrement = (item) => { 
    dispatch(decrementQuantity(item));
  };

  const handleRemove = (item) => { 
    dispatch(removeCartSliceItem(item));   
  };

  // Calculate total cost based on quantity for an item
  const calculateTotalCost = (item) => {
    return item.cost * (item.quantity || 0)
  };

  useEffect(() => {
      let total = 0 
      cartItems.forEach(item => {
          total += item.quantity
      })
      setCartTotal(total) 
  }, [cartItems]) 

  // Calculate total cost based on quantity for an item
  const cartTotalItems = (item) => {
    return item.cost * (item.quantity || 0)
  };
  return (
    <div className="cart-container">
      <h2 style={{ color: 'black' }}>Total Cart Amount: ${calculateTotalAmount()}</h2>
      <div style={{ color: 'black' }} className='total_cart_amount'>Total Count in Cart: {cartTotal}</div>
      <div>
        {cartItems.map(item => (
          <div className="cart-item" key={item.name}>
            <img className="cart-item-image" src={item.image} alt={item.name} />
            <div className="cart-item-details">
              <div className="cart-item-name">{item.name}</div>
              <div className="cart-item-cost">${item.cost}</div>
              <div className="cart-item-quantity">
                <button className="cart-item-button cart-item-button-dec" onClick={() => handleDecrement(item)}>-</button>
                <span className="cart-item-quantity-value">{item.quantity}</span>
                <button className="cart-item-button cart-item-button-inc" onClick={() => handleIncrement(item)}>+</button>
              </div>
              <div className="cart-item-total">Total: ${calculateTotalCost(item)}</div>
              <button className="cart-item-delete" onClick={() => handleRemove(item)}>Delete</button>
            </div>
          </div>
        ))}
      </div> 
      <br/>
      <br/>
      <div className="continue_shopping_btn">
        <button className="get-started-button" onClick={(e) => onContinueShopping(e)}>Continue Shopping</button>
        <br />
        <button className="get-started-button1" onClick={(e) => onCheckout(e)}>Checkout</button>
      </div>
    </div>
  );
};

export default CartItem;


