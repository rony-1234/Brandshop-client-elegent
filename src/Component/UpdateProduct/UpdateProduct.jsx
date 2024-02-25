import { useLoaderData } from "react-router-dom";
import Header from "../Header/Header";

import Swal from "sweetalert2";


const UpdateProduct = ({params}) => {
  
    const update = useLoaderData()
    const {_id, photo,product,brand,type,price,description,rating} = update || {}
     console.log(update)
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
       
        const updateProduct = {_id, photo,product,brand,type,price,description,rating}
        console.log(updateProduct)
        // console.log(_id)

        fetch(`http://localhost:7000/products/${_id}`,{
            method:'PUT',
            headers:{
                'content-type': 'application/json'
            },
            body:JSON.stringify(updateProduct)

        })
        .then(res => res.json())
        .then(data =>{
            console.log(data )
            if(data.modifiedCount > 0){
                Swal.fire({
                    icon: 'Success',
                    title: 'Sucess',
                    text: 'Your Product Updated sucessfully!',
                    footer: '<a href="">Why do I have this issue?</a>'
                  })
            }
        })

        
    }
   
    
    
        
    return (
        <div>
        <Header></Header>
        <div className='bg-gradient-to-r from-[#00FFFF] to-[#0077FF] text-center font-semibold'>
        <h2 className="pt-4"> Update Your Product</h2>
        <form onSubmit={handleForm} className='mx-auto'>
            <div className='md:flex gap-6'>
            <div className="form-control md:w-1/2 ml-4 px-4">
        <label className="label">
       <span className="label-text">Your Product</span>
    </label>
   <label className="input-group">
 
    <input type="text" name='photo' defaultValue={photo} placeholder="photoUrl" className="input input-bordered w-full" />
    </label>
 </div> 
            <div className="form-control md:w-1/2 px-4">
        <label className="label">
       <span className="label-text">Your Product Name</span>
    </label>
   <label className="input-group">
 
    <input type="text" name='product' defaultValue={product} placeholder="Product Name" className="input input-bordered w-full" />
    </label>
 </div> 
            </div>
            <div className='md:flex gap-6'>
            <div className="form-control md:w-1/2 ml-4 px-4">
        <label className="label">
       <span className="label-text">Brand </span>
    </label>
   <label className="input-group">
 
    <input type="text" name='brand'  defaultValue={brand} placeholder="Brand" className="input input-bordered w-full" />
    </label>
 </div> 
            <div className="form-control md:w-1/2 px-4">
        <label className="label">
       <span className="label-text">Type</span>
    </label>
   <label className="input-group">
      
 

    <input type="text" name='type' defaultValue={type} placeholder="Product Name" className="input input-bordered w-full" />
    </label>
 </div> 
            </div>
            <div className='md:flex gap-6'>
            <div className="form-control md:w-1/2 ml-4 px-4">
        <label className="label">
       <span className="label-text">Price</span>
    </label>
   <label className="input-group">
 
    <input type="number" name='price' defaultValue={price} placeholder="Price" className="input input-bordered w-full" />
    </label>
 </div> 
            <div className="form-control md:w-1/2 px-4">
        <label className="label">
       <span className="label-text">Short Description</span>
    </label>
   <label className="input-group">
 
    <input type="text" name='description' defaultValue={description} placeholder="Description" className="input input-bordered w-full" />
    </label>
 </div> 
            </div>

            
            <div className=''>
            <div className="form-control w-full px-8 ">
        <label className="label">
       <span className="label-text">Your Product Rating</span>
    </label>
   <label className="input-group">
 
    <input type="text" name='rating' placeholder="rating" defaultValue={rating} className="input input-bordered w-full" />
    </label>
 </div> 
      
            </div>
           
            <div className=''>
            <div className="form-control w-full px-8 ">
        <label className="label">
       <span className="label-text"></span>
    </label>
   <label className="input-group">
 
    <input type="submit" name='submit'  placeholder="" className="input input-bordered mb-8 w-full bg-red-300" />
    </label>
 </div> 
      
            </div>
           

 
        </form>
        </div>
        </div>
    );
};

export default UpdateProduct;