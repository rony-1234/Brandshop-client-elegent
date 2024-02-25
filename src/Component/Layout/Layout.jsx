import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";


const Layout = () => {
    return (
        <div className="max-w-6xl mx-auto dark:bg-black ">
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Layout;