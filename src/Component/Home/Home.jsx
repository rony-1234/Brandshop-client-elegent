
import { useLoaderData } from 'react-router-dom';
import Banner from '../Banner/Banner';
import Footer from '../Footer/Footer';
import Featured from '../Featured/featured';
import Event from '../Event/Event';
import Seller from '../Seller/Seller';


const Home = () => {
    const feature = useLoaderData()

    return (
        <div>
            
            <Banner></Banner>
            <Featured feature={feature}></Featured>
            <Event></Event>
            <Seller></Seller>
           
           
            
            
        </div>
    );
};

export default Home;