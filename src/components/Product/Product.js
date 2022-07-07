import React from 'react';
import "./Product.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArchway, faCoffee, faShop, faShoppingBag, faShoppingBasket, faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';


const Product = (props) => {
    // console.log(props);
    const { img, name, seller, price, stock, key } = props.product;
    return (
        <div className='product'>
            <div>
                <img src={img} alt="" />
            </div>
            <div className='productInfo-area' >
                <h4 className='product-name'><Link to={"/product/"+ key} > {name} </Link></h4>
                <br />
                <p><small>by: {seller}</small></p>
                <p>$ {price} </p>
                <p><small>Only {stock} left in stock Order </small></p>
                
                {props.ShowAddToCart && <button className='add-button' onClick={()=>props.handleAddProduct(props.product)}> <FontAwesomeIcon icon= {faShoppingBag} /> Add to card</button>}

            </div>

        </div>
    );
};

export default Product;