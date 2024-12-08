import { Outlet } from "react-router-dom";
import NavBar from "../Component/NavBar";
import Footer from "../Component/Footer";

const MainRouter = () => {
    return (
        <div>
           <NavBar></NavBar>
            <Outlet></Outlet>
            <Footer></Footer>
           
        </div>
    );
};

export default MainRouter;