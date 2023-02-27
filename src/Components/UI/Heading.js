import React, { useContext } from "react";
import classes from './Heading.module.css';
import CartContext from "../../store/cart-context";
import siteImage from './food-websites_orig.jpg'
import Summary from "../Layout/Summary";


const Heading = (props) => {

    const cartCtx = useContext(CartContext);

    //const numberOfCartItems = cartCtx.items.reduce((currNumber, item) => {
    //    return currNumber + item;
    //}, 0);
const numberOfCartItems=cartCtx.items.length;
    return (

        <div className={classes.heading}>
            <div className={classes.head_container}>
                <div className={classes.head}>

                    <h2>React Meals</h2>
                </div>

                <div className={classes.cart}>
                    <button onClick={props.onClick}>🛒 Your cart
                        <span style={{ backgroundColor: "red", borderRadius: "4px", padding: "3px" }}>
                            {numberOfCartItems}
                        </span>
                    </button>
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