import React, { useContext } from "react";
import CartContext from "../../store/cart-context";

import Modal from "../UI/Modal";
import classes from './Cart.module.css';
import CartItem from "./CartItem";


const Cart = (props) => {
    const cartCtx = useContext(CartContext);

    const removeMealHandler = (id) => {
        cartCtx.removeItem(id);
    };
    const addMealHandler = (item) => {

    }
    const cartMeals = (
        <ul>
            {
                cartCtx.items.map((item) => (
                    <CartItem
                        key={item.id}
                        dish={item.dish}
                        quantity={item.quantity}
                        price={item.price}
                        onRemove={removeMealHandler.bind(null, item.id)}
                        onAdd={addMealHandler.bind(null, item)}
                    />
                ))
            }
        </ul>
    );


    return (
        <Modal onClose={props.onClose}>
            {cartMeals}
            <div>
                <h3>Total Amount</h3>
                <h3>{cartCtx.totalAmount}</h3>
            </div>
            <div className={classes.actions}>
                <button onClick={props.onClose}>
                    Close
                </button>
                <button >Order</button>
            </div>
        </Modal>
    )

};
export default Cart;