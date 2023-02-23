import React from "react";

import MealItem from "./MealItem";
import classes from './Meals.module.css';

const Meals = (props) => {
    return (
        <ul className={classes.mealList}>
            {
                props.items.map((item) => (
                  
                          <MealItem
                        key={item.id}
                        dish={item.dish}
                        content={item.content}
                        price={item.price}
                    />
                    
                    
                  
                    
                )
                    

                )
            }
        </ul>

    )
}
export default Meals;