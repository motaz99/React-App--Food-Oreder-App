import React from 'react'

const CartContext = React.createContext({
    items: [],
    totalMount: 0,
    addItem: (item) => {},
    removeItem: (item) => {}
})

export default CartContext;