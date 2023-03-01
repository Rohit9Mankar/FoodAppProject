import React from "react";

import classes from './Cart.module.css';

const CartItem = (props) => {
    const price = `$${props.price.toFixed(2)}`;

    return (
        <li className={classes.control} key={props.id}>
               
               <span>{props.dish}</span> 
               <span>{props.quantity}</span> 
               <span>{price}</span> 
    
                <button onClick={props.onRemove}>-</button>
                <button onClick={props.onAdd}>+</button>
    
            </li>
       
    )
}
export default CartItem;