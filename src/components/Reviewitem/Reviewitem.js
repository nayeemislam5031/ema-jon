import React from 'react';
import './Reviewitem.css';


const Reviewitem = (props) => {
    const {name, quantity,key,price,description } = props.product;
    const reviewitemStyle ={
        borderBottom: '1px solid lightgray',
        marginBottom: '5px',
        paddingBottom: '5px',
        marginleft: '5px',
        color: 'black'

    }
    return (
        <div style={reviewitemStyle} className="review-items">
           <h6 className="product-name">{name}</h6>
           <p>Quantity:{quantity}</p>
           <p> <small>Price: $ {price}  </small></p>

           <br />
           <button 
            className="remove-button"
            onClick= { () => props.removeProduct(key)}
            >Remove</button>
           
        </div>
    );
};

export default Reviewitem;