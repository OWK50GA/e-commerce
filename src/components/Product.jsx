import { useContext } from "react";
import { ShopContext } from "../context/ShopContext";

const Product = (props) => {
    
    const product = props.data;
    const {addToCart, cartItems} = useContext(ShopContext)
    const cartItemAmount = cartItems[product.id]

    return ( 
        <div className="product">
            <img src={product.productImage} alt={product.productName} />
            <div className="product-description">
                <p><b>{product.productName}</b></p>
                <p>${product.price}</p>
                <button 
                    onClick={() => addToCart(product.id)}
                >
                    Add To Cart
                    {cartItemAmount > 0? <> ({cartItemAmount}) </>: null }
                </button>
            </div>
        </div>
     );
}
 
export default Product;