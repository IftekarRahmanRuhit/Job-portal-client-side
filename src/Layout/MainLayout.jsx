import { Outlet } from "react-router-dom";
import Home from "../Pages/Home";


const MainLayout = () => {
    return (
        <div className="max-w-screen-2xl">
            <Home></Home>
            <Outlet></Outlet>
            
        </div>
    );
};

export default MainLayout;