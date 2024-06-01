import { useSelector, useDispatch } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice";


const Cart = () => {
    //It is very important to subscribe right porttion of the store unless it will be huge performance loss
    //ex  const cartItems = useSelector((store)=> store); then use it will be fine but performance will be lost.
    const cartItems = useSelector((store)=> store.cart.items);

    const dispatch = useDispatch();
    const handleClearCart = () => {
        dispatch(clearCart());
    };

    return (
        <div className="text-center m-4 p-4">
            <h1 className="text-2xl font-bold">Cart</h1>
            <div className="w-6/12 m-auto">
            <button className="p-2 m-2 bg-black text-white rounded-lg" onClick={handleClearCart}>Clear Cart</button>
            {cartItems.length === 0 ? <h2>Your Cart is Empty. Add Items to proceed!</h2> : ""}
                <ItemList items={cartItems} />
            </div>
        </div>
    )
};

export default Cart;