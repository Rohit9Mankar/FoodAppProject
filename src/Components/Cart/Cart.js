import React from "react";
import  ReactDOM  from "react-dom";
import classes from './Cart.module.css';

const BackDrop=()=>{
    return(
        <div className={classes.backdrop}></div>
    )
};
const CartModal=(props)=>{
    return(
        <div className={classes.modal}>
            <h3>Sushi</h3>
            <div className={classes.control}>
                <h3>Total Amount</h3>
                <h3>35.62</h3>
            </div>
            <div className={classes.actions}>
                <button>Close</button>
                <button>Order</button>
            </div>
        </div>
    )
};
const Cart=(props)=>{
return(
    <React.Fragment>
        {ReactDOM.createPortal(<BackDrop/>,
        document.getElementById("backdrop"))}
        {ReactDOM.createPortal(<CartModal/>,
        document.getElementById("cart-modal"))}
    </React.Fragment>
)
};
export default Cart;