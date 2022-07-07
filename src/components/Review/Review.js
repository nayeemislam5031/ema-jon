/* eslint-disable no-undef */
import React from 'react';
import { useEffect, useState } from 'react';
import {getStoredCart} from '../../utilities/fakedb';
import fakeData from '../../fakeData/products.json';
import Reviewitem from '../Reviewitem/Reviewitem';





const Review = () => {
    const [cart, setCart] = useState([]);
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
        <div>
            <h1>
                
                {
                    cart.map(pd => <Reviewitem 
                        key = {pd.key}
                        product = {pd}></Reviewitem> )
                }
                

            </h1>
        </div>
    );
};

export default Review;