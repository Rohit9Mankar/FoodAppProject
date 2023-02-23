import React from "react";
import classes from './MealItem.module.css';

const MealItem=(props)=>{
return(
    <div className={classes.mealItem}>
        <div className={classes.dish}>{props.dish}</div>
        <div className={classes.content}>{props.content}</div>
        <div className={classes.price}>{props.price}</div>
    </div>
)
}
export default MealItem;