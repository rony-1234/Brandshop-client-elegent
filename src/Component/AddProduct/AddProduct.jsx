import React from 'react';
import Header from '../Header/Header';
import Swal from 'sweetalert2'
const AddProduct = () => {

    const handleForm = e =>{
        e.preventDefault()
        const form = e.target;
        const photo = form.photo.value;
        const product = form.product.value;
        const brand = form.name.value;
        const type = form.type.value;
        const price = form.price.value;
        const description = form.description.value;
        const rating = form.rating.value;
       

        const myProduct ={
            photo,product,brand,type,price,description,rating}
        console.log(myProduct)

        fetch('http://localhost:7000/product',{
            method:'POST',
            headers:{
                'content-type': 'application/json'
            },
            body:JSON.stringify(myProduct)
        })
        .then(res => res.json())
        .then(data =>{
            console.log(data);
            if(data.insertedId){
                Swal.fire({
                    icon: 'Success',
                    title: 'Sucess',
                    text: 'Your Product sucessfully!',
                    footer: '<a href="">Why do I have this issue?</a>'
                  })
            }
        })
    }
    return (
        <div>
            <Header></Header>
            <div className='bg-gradient-to-r from-[#b9b950] to-[#FFD700] text-center font-semibold'>
            <h2 className='pt-4 font-semibold'>  Add Your Product</h2>
            <form onSubmit={handleForm} className='mx-auto'>
                <div className='md:flex gap-6'>
                <div className="form-control md:w-1/2 ml-4 px-4">
            <label className="label">
           <span className="label-text">Your Product image</span>
        </label>
       <label className="input-group">
     
        <input type="text" name='photo' placeholder="photoUrl" className="input input-bordered w-full" />
        </label>
     </div> 
                <div className="form-control md:w-1/2 px-4">
            <label className="label">
           <span className="label-text">Your Product Name</span>
        </label>
       <label className="input-group">
     
        <input type="text" name='product' placeholder="Product Name" className="input input-bordered w-full" />
        </label>
     </div> 
                </div>
                <div className='md:flex gap-6'>
                <div className="form-control md:w-1/2 ml-4 px-4">
            <label className="label">
           <span className="label-text">Brand </span>
        </label>
       <label className="input-group">
     
        <input type="text" name='name' placeholder="Brand" className="input input-bordered w-full" />
        </label>
     </div> 
                <div className="form-control md:w-1/2 px-4">
            <label className="label">
           <span className="label-text">Type</span>
        </label>
       <label className="input-group">
          
       {/* <select type='type' defaultValue={'select'} name='type' className="select w-full  ">
    <option disabled selected>Chose Your Type</option>
    <option>Shoe</option>
     <option>Watch</option>
    <option>Sports</option>
    <option>Shirt</option>
    <option>Jeans</option>
    </select>  */}

        <input type="text" name='type' placeholder="Product Name" className="input input-bordered w-full" />
        </label>
     </div> 
                </div>
                <div className='md:flex gap-6'>
                <div className="form-control md:w-1/2 ml-4 px-4">
            <label className="label">
           <span className="label-text">Price</span>
        </label>
       <label className="input-group">
     
        <input type="number" name='price' placeholder="Price" className="input input-bordered w-full" />
        </label>
     </div> 
                <div className="form-control md:w-1/2 px-4">
            <label className="label">
           <span className="label-text">Short Description</span>
        </label>
       <label className="input-group">
     
        <input type="text" name='description' placeholder="Description" className="input input-bordered w-full" />
        </label>
     </div> 
                </div>

                
                <div className=''>
                <div className="form-control w-full px-8 ">
            <label className="label">
           <span className="label-text">Your Product Rating</span>
        </label>
       <label className="input-group">
     
        <input type="text" name='rating' placeholder="rating" className="input input-bordered w-full" />
        </label>
     </div> 
          
                </div>
               
                <div className=''>
                <div className="form-control w-full px-8 ">
            <label className="label">
           <span className="label-text"></span>
        </label>
       <label className="input-group">
     
        <input type="submit" name='submit' placeholder="submit" className="input input-bordered mb-8 w-full bg-red-300" />
        </label>
     </div> 
          
                </div>
               

     
            </form>
            </div>
            </div>
        
    );
};

export default AddProduct;