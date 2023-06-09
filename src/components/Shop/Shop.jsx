import React, { useEffect, useState } from 'react';
import { addToDb, deleteShoppingCart, getShoppingCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css';
import { Link } from 'react-router-dom';

const Shop = () => {
    const [products, setProducts] = useState([]);

    const [cart, setCart] = useState([])

    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    useEffect(() => {
        const storedCart = getShoppingCart();
        const saveCart= [];
        // step-1 get id 
        for (const id in storedCart) {
            // step-2 get the product by using id 
            const addProduct = products.find(product => product.id === id)
            // step -3 get qunatity of the product 
            if (addProduct) {
                const quantity = storedCart[id];
                addProduct.quantity = quantity;
                // step-4 add to product cart 
                saveCart.push(addProduct);
            }
        }
        // step -5 set the cart 
        setCart(saveCart);
    }, [products])
    const handleAddToCart = (product) => {
        // const newCart = [...cart, product]
        let newCart =[];

        const exists=cart.find(pd=> pd.id===product.id)
        if(!exists){
            product.quantity=1;
            newCart= [...cart,product]
        }
        else{
            exists.quantity= exists.quantity +1;
            const remaining =cart.filter(pd => pd.id !== product.id)
            newCart=[... remaining,exists]
        }

        setCart(newCart);
        addToDb(product.id)
    }
    const handleClearCart =()=>{
        setCart([]);
        deleteShoppingCart();
    }
    return (
        <div className='shop-container'>
            <div className="products-container">
                {
                    products.map(product => <Product
                        key={product.id}
                        product={product}
                        handleAddToCart={handleAddToCart}
                    ></Product>)
                }
            </div>
            <div className="cart-container">
                <Cart 
                handleClearCart={handleClearCart}
                cart={cart}>
                    <Link className='review-link' to='/orders'><button className='btn-priview'>Review Order</button></Link>
                </Cart>
            </div>

        </div>
    );
};

export default Shop;