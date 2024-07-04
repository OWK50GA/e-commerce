import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";
import Shop from "../pages/Shop";

const RootLayout = () => {
    return ( 
        <div>
            <NavBar />
            <div className="shop">
                <Outlet />
            </div>
        </div>
    );
}
 
export default RootLayout;