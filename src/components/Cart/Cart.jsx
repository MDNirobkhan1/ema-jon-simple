import React from 'react';
import './Cart.css';

const Cart = ({cart}) => {
    // const cart =props.cart; option-1
    // const {cart} =props;     option-2

    let totalPrice = 0;
    let totalShipping =0;
    let quantity =0;
    for(const product of cart){
        // product.quantity= product.quantity || 1;
        
        totalPrice =totalPrice + product.price*product.quantity;
        totalShipping=totalShipping+product.shipping;
        quantity =quantity+product.quantity;
    }
    const tax=totalPrice*7/100;
    const granTotal = totalPrice+ totalShipping +tax;
    
    return (
        <div className='cart'>
            <h3>Order Summary</h3>
            <p>Selected item: {quantity} </p>
            <p>Total Price: ${totalPrice}</p>
            <p>Shipping : ${totalShipping}</p>
            <p>Tex: ${tax.toFixed(2)}</p>
            <h3>Grand Total: {granTotal.toFixed(2)}</h3>
        </div>
    );
};

export default Cart;