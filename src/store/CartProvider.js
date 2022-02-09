import React from 'react';
import CartContext from './cart-context';

const CartProvider = (props) => {
    const addItemToCartHandler = () => {};
    const removeItemFromCartHandler =() => {};

    const cartContext = {
     items: [],
     totalMount: 0,
     addItem: (item) => addItemToCartHandler,
     removeItem: (item) => removeItemFromCartHandler
    }

  return(
       <CartContext.Provider value={cartContext}>
           {props.children}
       </CartContext.Provider>
       );
};

export default CartProvider;
