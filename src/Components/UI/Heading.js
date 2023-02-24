import React from "react";
import classes from './Heading.module.css';
import siteImage from './food-websites_orig.jpg'
import Summary from "../Layout/Summary";


const Heading = (props) => {
    return (

        <div className={classes.heading}>
            <div className={classes.head_container}>
                <div className={classes.head}>

                    <h2>React Meals</h2>
                </div>

                <div className={classes.cart}>
                    <button onClick={props.onClick}>🛒 Your cart <span style={{ backgroundColor: "red", borderRadius: "4px", padding: "3px" }}>{props.count}</span></button>
                </div>

            </div>


            <div className={classes.image}>
                <img alt="sitehomepage" src={siteImage}></img>
                <Summary />
            </div>

        </div>





    )
}
export default Heading;