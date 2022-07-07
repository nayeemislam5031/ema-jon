import React from 'react';


const Reviewitem = (props) => {
    const {name, quantity} = props.product;
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
           <p>quantity:{quantity}</p> 
           <br />
           <button className="main-button">Remove</button>
           
        </div >
    );
};

export default Reviewitem;