import React, { useContext } from "react";
import Input from "../UI/Input";
import CartContext from "../../store/cart-context";

import classes from './MealForm.module.css';

const MealForm = (props) => {
    const cartCtx = useContext(CartContext);

    

    const addMealHandler = (event) => {
        event.preventDefault();
        const quantty = document.getElementById('amount_' + props.item.id).value;
        cartCtx.addItem({ ...props.item, quantity: quantty });
        console.log(cartCtx);
    }

    return (

        <form className={classes.form}>
            <div >
                <Input
                    label='Amount'
                    input={{
                        id: 'amount_' + props.item.id,
                        type: 'number',
                        min: '1',
                        max: '5',
                        step: '1',
                        defaultValue: 1,
                    }}
                />

                <button onClick={addMealHandler}>+Add</button>
            </div>

        </form>

    )

}
export default MealForm;