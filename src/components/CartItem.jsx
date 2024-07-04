import { useContext } from "react";
import { ShopContext } from "../context/ShopContext";

const CartItem = (props) => {

    const product = props.data;
    const {addToCart, cartItems, removeFromCart, updateItemCount} = useContext(ShopContext)
    const cartItemAmount = cartItems[product.id]

    return ( 
        <div className="product">
            <img src={product.productImage} alt={product.productName} />
            <div className="product-description">
                <p><b>{product.productName}</b></p>
                <p>${product.price}</p>
                <div className="countHandler">
                    <button onClick={() => removeFromCart(product.id)}>-</button>
                    <input type="text" 
                        value={cartItems[product.id]} 
                        onChange={(e) => updateItemCount(product.id, Number(e.target.value))}
                    />
                    <button onClick={() => addToCart(product.id)}>+</button>
                </div>
            </div>
        </div>
     );
}
 
export default CartItem;