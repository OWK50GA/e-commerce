import { useContext } from 'react';
import { PRODUCTS } from '../../src/products'
import { ShopContext } from '../context/ShopContext';
import CartItem from '../components/CartItem';
import { Link, NavLink, useNavigate } from 'react-router-dom';

const Cart = () => {

    const {addToCart, cartItems, getTotalCartAmount} = useContext(ShopContext)
    const totalAmount = getTotalCartAmount();
    const navigate = useNavigate();

    return (
        <div className="cart">
            <div>
                <h1>Your Cart Items</h1>
            </div>
            <div className="cart-items">
                {
                    PRODUCTS.map((product) => {
                        if (cartItems[product.id] > 0) {
                            return <CartItem data={product} />
                        }
                    })
                }
            </div>

            {
                totalAmount > 0?
                (<div className="checkout">
                    <p>Subtotal: ${totalAmount}</p>
                    <div>
                        <button onClick={() => navigate('/')}>Continue Shopping</button>
                        <button>Checkout</button>
                    </div>
                </div>)
            :
                (
                    <div>Your Cart is Empty</div>
                )
            }
            
        </div>
    );
}
 
export default Cart;