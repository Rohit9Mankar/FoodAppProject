import React from "react";
import MealForm from "./MealForm";
import classes from './MealItem.module.css';

const MealItem=(props)=>{
return(
    <div className={classes.mealItem}>
        <div>
        <div className={classes.dish}>{props.dish}</div>
        <div className={classes.content}>{props.content}</div>
        <div className={classes.price}>{props.price}</div>
        </div>
        
        <MealForm onClick={props.onClick}/>
    </div>
)
}
export default MealItem;