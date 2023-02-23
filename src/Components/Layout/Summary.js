import React from "react";
import classes from './Summary.module.css';

const Summary = (props) => {
    return(
<div className={classes.summary}>
        <h2>Delicious Food,Delivered to You</h2>
        <p>
            Choose your favorite meal from our broad selection avalable meals and enjoy a delicious lunch<br></br>
                                     or dinner at home.<br></br>
                                     <br></br>

            All our meals are Cooked with high-qualty in gredients, just in time and of-course by<br></br>
                                     by experienced Chefs!!<br></br>
        </p>
    </div>
    )
    
}
export default Summary;