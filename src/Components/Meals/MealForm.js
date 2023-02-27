import React,{useState} from "react";

import classes from './MealForm.module.css';

const MealForm = (props) => {
    const [amountNumber,setAmountNumber]=useState(0);
const amountChangeHandler=(event)=>{
    setAmountNumber(event.target.value)
    
}
    return (

        <form className={classes.form}>
            <div >
                <div className={classes.control}>
                    <label htmlFor="amount">Amount</label>
                    <input
                        type="number"
                        id="amount"
                        placeholder="0"
                        onChange={amountChangeHandler}
                        value={amountNumber}></input>
                </div>

                <button onClick={props.onClick}>+Add</button>
            </div>

        </form>

    )

}
export default MealForm;