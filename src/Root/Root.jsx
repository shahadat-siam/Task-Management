import { Outlet } from "react-router-dom";
import Navbar from "../Component/Shared/Navbar";
import Footer from "../Component/Shared/Footer";

 
const Root = () => {
    return (
        <div> 
            <Navbar/>
             <div className="min-h-[calc(100vh-250px)]">
             <Outlet/>
             </div>
            <Footer/>
        </div>
    );
};

export default Root;