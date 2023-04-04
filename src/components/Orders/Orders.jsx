import React, { useState } from 'react';
import Cart from '../Cart/Cart';
import { Link, useLoaderData } from 'react-router-dom';
import ReviewItem from '../ReviewiItem/ReviewItem';
import './reviewcontainer.css'
import { deleteShoppingCart, removeFromDb } from '../../utilities/fakedb';

const Orders = () => {

    const saveCart =useLoaderData();
    const [cart, setCart]=useState(saveCart)
    const handlerRemoveCart =(id)=>{
        const remaing =cart.filter(product => product.id !== id)
        setCart(remaing)
        removeFromDb(id)
    }
    const handleClearCart =()=>{
        setCart([]);
        deleteShoppingCart();
    }
    return (
        <div className='shop-container'>
            <div className='review-container'>
                  {
                    cart.map(product =><ReviewItem 
                        key={product.id}
                        product={product}
                        handlerRemoveCart={handlerRemoveCart}
                    ></ReviewItem> )
                  }
            </div>
            <div className='cart-container'>
                <Cart 
                handleClearCart={handleClearCart}
                cart={cart}
                
                >
                    <Link className='privew-link' to='/checkout'><button className='btn-proceed-cart'>Proceed Checkout </button></Link>
                </Cart>
            </div>
        </div>
    );
};

export default Orders;