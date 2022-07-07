import React from 'react';
import "./ProductDetatil.css";
import { useParams } from 'react-router-dom';
import fakeData from '../../fakeData/products.json';
import Product from '../Product/Product'


const ProductDetail = () => {
    const {productKey} = useParams()
    const product = fakeData.find(pd => pd.key === productKey);
    console.log(product);
    return (
        <div>
            <h1> {productKey} Product Detail</h1>
            <Product ShowAddToCart={false} product={product}></Product>
        </div>
    );
};

export default ProductDetail;