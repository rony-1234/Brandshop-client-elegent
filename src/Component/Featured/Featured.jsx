import FeatCard from "./FeatCard/FeatCard";


const Featured = ({feature}) => {
    return (
        <div className="my-12 max-w-6xl">
           
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            {
               feature.map(feat =><FeatCard key={feat} feat={feat}></FeatCard>)
            }
            </div>
        </div>
    );
};

export default Featured;