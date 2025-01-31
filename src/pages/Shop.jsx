import { PRODUCTS } from '../../src/products'
import Product from '../components/Product';

const Shop = () => {
    return (
        <div className="shop">
            <div className="shopTitle">
                <h1>RandomTech Shop</h1>
            </div>
            <div className='products'>
                {PRODUCTS.map((product) => <Product data={product}/>)}
            </div>
        </div>
    );
}
 
export default Shop;