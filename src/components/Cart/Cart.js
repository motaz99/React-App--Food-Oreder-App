import React from 'react';
import Modal from '../UI/Modal';
import classes from './Cart.module.css'

const Cart = (props) => {
    const cartItem = <ul className={classes['cart-item']}>{[
        {id: 'c1', name: 'Sushi', amount: 12.99},
    ].map((item) => <li>{item.name}</li>)}</ul>
  return (
  <Modal>
    {cartItem}
    <div>
        <span>Total Amount</span>
        <span>49</span>
    </div>
    <div className={classes.actions}>
        <button className={classes['button--alt']}>Close</button>
        <button className={classes.button}>Order</button>
    </div>
  </Modal>
  );
};

export default Cart;
