import React from "react";
import MealForm from "./MealForm";
//import CartContext from "../../store/cart-context";
import classes from './MealItem.module.css';

const MealItem = (props) => {
  return (
        <React.Fragment>
            <div className={classes.mealItem}>
            <div >
                <div className={classes.dish}>{props.dish}</div>
                <div className={classes.content}>{props.content}</div>
                <div className={classes.price}>{props.price}</div>
            </div>

            <MealForm  item={props} />
        </div>
        </React.Fragment>
        
    )
}
export default MealItem;