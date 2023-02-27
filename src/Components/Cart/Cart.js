import React, { useContext } from "react";
import ReactDOM from "react-dom";
import CartContext from "../../store/cart-context";
import classes from './Cart.module.css';
import CartItem from "./CartItem";

const BackDrop = () => {
    return (
        <div className={classes.backdrop}></div>
    )
};
const CartModal = (props) => {
    const cartCtx = useContext(CartContext);
  

    const orderedMeals = cartCtx.items.map((item) => (
        <li>
            <CartItem key={item.id} id={item.id} dish={item.dish} price={item.price} />
        </li>
        

    ));
 

    return (

        <div className={classes.modal}>
            {orderedMeals}

            <h2>Total Amount</h2>
            <h2>{cartCtx.totalAmount}</h2>
                <div className={classes.actions}>
                    <button onClick={props.onClick}>Close</button>
                    <button>Order</button>
                </div>
            </div>
            )
};
const Cart = (props) => {

    return (
            <React.Fragment>
                {ReactDOM.createPortal(<BackDrop />,
                    document.getElementById("backdrop"))}
                {ReactDOM.createPortal(<CartModal onClick={props.onClick} />,
                    document.getElementById("cart-modal"))}
            </React.Fragment>
            )
};
            export default Cart;