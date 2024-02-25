import React from 'react';

const ErrorPage = () => {
    return (
        <div>
           <div className='my-24'>
            <h2 className='text-center text-9xl font-bold text-orange-500 '>404</h2>
            <h4 className='text-center text-black text-4xl  font-semibold mt-4'>Page can not be found</h4>
            <p className='text-xl text-center mt-6'>Seems like nothing was found at this location<br/> 
                Try something else you can go back to the homepage following 
                the button below.
            </p>
           </div>
        </div>
    );
};

export default ErrorPage;