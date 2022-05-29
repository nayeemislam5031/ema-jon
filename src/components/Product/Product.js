import React from 'react';
import "./Product.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArchway, faCoffee, faShop, faShoppingBag, faShoppingBasket, faShoppingCart } from '@fortawesome/free-solid-svg-icons'


const Product = (props) => {
    
    const { img, name, seller, price, stock } = props.product;
    return (
        <div className='product'>
            <div>
                <img src={img} alt="" />
            </div>
            <div className='productInfo-area' >
                <h4 className='product-name'>{name}</h4>
                <br />
                <p><small>by: {seller}</small></p>
                <p>$ {price} </p>
                <p><small>Only {stock} left in stock Order </small></p>
                
                <button className='add-button' onClick={()=>props.handleAddProduct(props.product)}> <FontAwesomeIcon icon= {faShoppingBag} /> Add to card</button>

            </div>

        </div>
    );
};

export default Product;