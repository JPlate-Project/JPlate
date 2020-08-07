import React, { useState } from 'react';
import CartItem from './CartItem';
import { Link } from 'react-router-dom';

const Cart = (props) => {

  let sum = 0;

  props.cart.map(item => {
    sum += item.price * item.userSelectedQuantity;
  });

  if (props.cart[0]) {
    return (

      <div id="cartContainer">
        <div className="cartTitle">
          Shopping Cart
        </div>
        {props.cart.map(item => {
          return (
            <CartItem
              key={Math.random()}
              cart={props.cart}
              handleSetCart={props.handleSetCart}
              item={item}
              handleRemoveFromCart={props.handleRemoveFromCart}
              handleItemQuantityChange={props.handleItemQuantityChange}
            />);
        })}
        <div id="cartSubTotal">
          Subtotal: ${sum}
        </div>
        <div id="cartProceedButton">
          <Link to={{
            pathname: '/checkout',
            state: {
              cart: props.cart,
            },
          }}>
            <button type="button" className="cartProceedButton">Proceed to checkout</button>
          </Link>
        </div>
      </div >
    );
  } else {
    return (
      <div id="cartContainer">
        <div id="cartEmpty">
          Cart is empty, start shopping!
        </div>
      </div>
    );
  }
};

export default Cart;
