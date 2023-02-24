import React from "react";
import ReactDOM from "react-dom";
import classes from './Cart.module.css';

const BackDrop = () => {
    return (
        <div className={classes.backdrop}></div>
    )
};
const CartModal = (props) => {
    return (
        <div className={classes.modal}>
            <h3>Sushi</h3>
            <div className={classes.control}>
                <h2>Total Amount</h2>
                <h2>35.62</h2>
            </div>
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