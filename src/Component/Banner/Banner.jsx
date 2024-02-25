import Header from "../Header/Header";


const Banner = () => {
    return (
        <div className="relative">
            <div className="absolute w-full">
            <Header></Header>
            </div>
        
        <div className="hero min-h-screen" style={{backgroundImage: 'url(https://i.ibb.co/c6P19yC/3.jpg)'}}>
        <div className="hero-overlay bg-opacity-0"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold text-black">Exclusive <span className="text-pink-800">Fashionable </span></h1>
            <p className="mb-5 text-md text-red-500">There are populer Cloth in selling the Company</p>
            {/* <button className="btn btn-primary"></button> */}
          </div>
        </div>
      </div>
      </div>
      
    );
};

export default Banner;