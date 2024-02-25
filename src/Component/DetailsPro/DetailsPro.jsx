import { useLoaderData } from "react-router-dom";


const DetailsPro = ({params}) => {
    const pro = useLoaderData();
    const {_id, photo,product,brand,type,price,description,rating} = pro || {}
        console.log(pro)
    return (
        <div className="card card-side bg-base-100 my-12 shadow-xl">
    <figure><img src={photo} alt="Movie"/></figure>
     <div className="card-body">
    <h2 className="card-title text-xl">{brand}</h2>
    <div className="flex">
      <p className="text-md">{product}</p>
      <p className="text-md">{type}</p>
      <p className="text-md">{price}</p>
    </div>
    <div>
        <p>{rating}</p>
        <p>{description}</p>
    </div>
   
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Delete</button>
    </div>
  </div>
</div>
    );
};

export default DetailsPro;