/* eslint-disable no-undef */
import React from 'react';
import'./Review.css';
import { useEffect, useState } from 'react';
import {getStoredCart,deleteFromDb} from '../../utilities/fakedb';
import fakeData from '../../fakeData/products.json';
import Reviewitem from '../Reviewitem/Reviewitem';
import Cart from '../Cart/Cart';





const Review = () => {
    const [cart, setCart] = useState([]);

    const handleremoveProduct = (productkey) => {
        const newCart = cart.filter(pd => pd.key !== productkey);
        setCart(newCart);
        deleteFromDb(productkey);
    }
    useEffect(()=>{
        //cart
        const savedCart = getStoredCart();
        const productKeys = Object.keys(savedCart);
        const cartProducts = productKeys.map(key =>{
            const product = fakeData.find(pd => pd.key === key);
            product.quantity = savedCart[key];  
            return product;
        });
        setCart(cartProducts);
    },[])
    return (
        <div className="review-container">
            
                
            <div className="review-product-container">
                {
                    cart.map(pd => <Reviewitem 
                        key = {pd.key}
                        removeProduct = {handleremoveProduct}
                        product = {pd}></Reviewitem> )
                }
            </div>

            <div className="cart-container">
                <Cart cart={cart}></Cart>
            </div>
                
                

            
        </div>
    );
};

export default Review;