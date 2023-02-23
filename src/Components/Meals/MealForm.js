import React from "react";
import classes from './MealForm.module.css';

const MealForm = (props) => {
    return (

        <form className={classes.form}>
            <div >
                <div className={classes.control}>
                    <label htmlFor="amount">Amount</label>
                    <input
                        type="number"
                        id="amount"></input>
                </div>

                <button onClick={props.onClick}>+Add</button>
            </div>

        </form>

    )

}
export default MealForm;