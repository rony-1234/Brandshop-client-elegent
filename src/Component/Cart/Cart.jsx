
import { useLoaderData } from 'react-router-dom';
import Header from '../Header/Header';
import Swal from 'sweetalert2';

   const Cart = () => {


        const cart = useLoaderData();
        const {_id, photo,product,brand,type,price,rating} = cart || {}
        console.log(cart)

         const handleRemove = _id =>{
            console.log(_id)
            Swal.fire({
              title: 'Are you sure?',
              text: "You won't be able to revert this!",
              icon: 'warning',
              showCancelButton: true,
              confirmButtonColor: '#3085d6',
              cancelButtonColor: '#d33',
              confirmButtonText: 'Yes, delete it!'
            }).then((result) => {
              if (result.isConfirmed) {

                fetch(`https://b8a10-brandshop-server-side-rony-1234.vercel.app/product/${_id}`,{
                  method:'DELETE',
                })
                .then(res =>res.json())
                .then(data =>{
                  console.log(data);
                  if(data.deletedCount > 0){
                  Swal.fire(
                  'Deleted!',
                  'Your product has been deleted.',
                  'success'
                )
                  }
                })
               
              }
            })
         }
        return (
            <div>
                <Header></Header>
                <div>
                    <h2 className='text-center text-xl text-emerald-600'>Your Added Product</h2>
                </div>
            <div className="card w-96 my-12 bg-base-100 shadow-xl">
  <figure><img src={photo} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">
      {brand}
      <div className="badge badge-secondary">{product}</div>
    </h2>
    <p>{type}</p>
    <div className='flex'>
    <p>{rating}</p>
    <p>{price}</p>
    </div>
    
    <div className="card-actions justify-end">

     <button onClick={() =>handleRemove(_id)} className='btn btn-secondary' type='submit'>Delete</button>
    </div>
  </div>
</div>
</div>
        );
    };
    
    export default Cart;