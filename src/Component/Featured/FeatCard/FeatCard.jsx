import { Link, NavLink } from "react-router-dom";


const FeatCard = ({feat}) => {
    const {brand,image} = feat || {}
    return (
        <div >
          <Link to={`/details/${brand}`}>
          <div className="card w-90 h-60 z-index-20 image-full">
        <figure><img src={image} alt="Shoes" /></figure>
        <div className="card-body">
          <h2 className="card-title">{brand}</h2>
          {/* <p>If a dog chews shoes whose shoes does he choose?</p> */}
          <div className="card-actions justify-end">
            {/* <button className="btn btn-primary">Buy Now</button> */}
          </div>
        </div>
      </div>
          </Link>
       
      </div>
    );
};

export default FeatCard;