import { useSelector, useDispatch } from "react-redux";
import { removeItem } from "./cartSlice";
import { useNavigate } from "react-router-dom";

const CartItem = () => {
    const cartData = useSelector((state) => state.mycart.cart);
    const dispatch = useDispatch();
    const mynav = useNavigate();
    let netAmount = 0;

    const cartItems = cartData.map((item) => {
        netAmount += item.price * item.qnty;
        return (
            <tr key={item.id} className="cart-item-row">
                <td className="cart-item-photo">
                    <img src={item.image} alt={item.name} className="cart-item-image" />
                </td>
                <td className="cart-item-name">{item.name}</td>
                <td className="cart-item-price">₹{item.price}</td>
                <td>
                    <button className="btn-remove-item" onClick={() => dispatch(removeItem(item.id))}>Remove</button>
                </td>
            </tr>
        );
    });

    const BuyNow = () => {
        mynav("/buynow");
    };

    return (
        <>
            <div className="cart-container">
                <h1 className="cart-title">YOUR CART DETAILS</h1>
                <table className="cart-table">
                    <thead>
                        <tr className="cart-header-row">
                            <th className="cart-header">Product</th>
                            <th className="cart-header">Product Name</th>
                            <th className="cart-header">Price</th>
                            <th className="cart-header">Edit</th>
                            
                        </tr>
                    </thead>
                    <tbody>
                        {cartItems}
                    </tbody>
                </table>
                <div className="cart-footer">
                    <button className="btn-buy-now" onClick={BuyNow}>Buy Now</button>
                </div>
            </div>
        </>
    );
};

export default CartItem;
