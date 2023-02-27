import React, { useContext } from "react";
import MealForm from "./MealForm";
import CartContext from "../../store/cart-context";
import classes from './MealItem.module.css';

const MealItem = (props) => {

    const cartCtx = useContext(CartContext);
  

    const addMealHandler = (event) => {
        event.preventDefault();
        const orderMealObj = {
            dish: props.dish,
            price: props.price,
            id:Math.random().toString()
        };
       
        cartCtx.items.push(orderMealObj);
        cartCtx.totalAmount+=orderMealObj.price;
        console.log(cartCtx.items);
    }
    return (
        <div className={classes.mealItem}>
            <div>
                <div className={classes.dish}>{props.dish}</div>
                <div className={classes.content}>{props.content}</div>
                <div className={classes.price}>{props.price}</div>
            </div>

            <MealForm  onClick={addMealHandler} />
        </div>
    )
}
export default MealItem;