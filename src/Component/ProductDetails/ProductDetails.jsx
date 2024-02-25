
import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import ProductDetailCard from '../ProductDetailCard/ProductDetailCard';
import Header from '../Header/Header';
import Slider from './Slider/Slider';

const ProductDetails = ({brand}) => {
    const params = useParams()
    console.log(params)
    const products = useLoaderData();
 
    return (
        <div>
            <Header></Header>
            <Slider product={products}></Slider>
        <div className='my-4'>
            <h2 className='text-center text-4xl my-6 font-semibold'>Our Added product</h2>
            <div className='grid grid-cols-1 gap-8 lg:grid-cols-3'>

            {
                products.map(prod =><ProductDetailCard key={prod._id} prod={prod}></ProductDetailCard>)
            }
        </div>
            </div>
            </div>
           
    );
};

export default ProductDetails;
