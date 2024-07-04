import { ShoppingCart } from "phosphor-react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
    return (
        <div className="navbar">
            <nav>
                <NavLink to={'/'} className={'navlink'}>Shop</NavLink>
                <NavLink className={'navlink'} to={'/cart'}>
                    <ShoppingCart size={32} />
                </NavLink>
            </nav>
        </div>
    );
}
 
export default NavBar;