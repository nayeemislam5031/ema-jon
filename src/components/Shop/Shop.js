import React, { useEffect, useState } from 'react';
import fakeData from '../../fakeData/products.json';
import "./Shop.css";
import Product from './../Product/Product';
import Cart from '../Cart/Cart';
import { addToDb,getStoredCart } from '../../utilities/fakedb';


function Shop() {
   
    const first10 = fakeData.slice(0,10);
    const [products, setProducts] = useState(first10);
    const [cart, setCart] = useState([]);

    useEffect(()=>{
        const savedCart = getStoredCart();
        const productskeys = Object.keys(savedCart);
        const previouskeys = productskeys.map(Existingkey => {
            const product = fakeData.find(pd => pd.key === Existingkey);

        })
        console.log(productskeys);
        

    },[]);

    const handleAddProduct = (product) => {
        
        const toBeAddedkey = product.key;
        const sameProduct = cart.find(pd => pd.key === toBeAddedkey);
        let count = 1;
        let newCart ;
        if (sameProduct) {
            count = sameProduct.quantity + 1;
            sameProduct.quantity =  count;
            const others = cart.filter(pd => pd.key !== toBeAddedkey)
            newCart = [...others, sameProduct];

        }

        else{
            product.quantity = 1;
            newCart = [...cart, product];

        }
        
        setCart(newCart);

        
        addToDb(product.key, count);
    }


    
    return (
        <div className='shop-container'>
            <div className="product-container">
               
                {
                    products.map(pd => 
                    <Product
                        key = {pd.key}
                        ShowAddToCart = {true}
                        handleAddProduct = {handleAddProduct}
                        product = {pd}>

                    </Product>)
                }
                
            </div>
            <div className="cart-container">
                <Cart cart = {cart}></Cart>
                
            </div>
            

           
        </div>
    );
}

export default Shop;