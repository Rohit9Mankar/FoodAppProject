import React from "react";
import classes from './Cart.module.css';

const CartItem=(props)=>{
return(
    <div>
    
<div className={classes.control}>
<h3>{props.dish}</h3>
<h3>{props.price}</h3>
</div>
</div>
)
}
export default CartItem;