import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

const Slider = ({product}) => {

    return (

        <Swiper
        spaceBetween={50}
        slidesPerView={1}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
      >
       
        {
          

           product.map(p =><SwiperSlide key={p._id}><img  className='w-full  flex justify-center items-center h-80 rounded-md' src={p.photo}/></SwiperSlide>)
          
       
         
        }
        ...
      </Swiper>
    );
  };  
export default Slider;