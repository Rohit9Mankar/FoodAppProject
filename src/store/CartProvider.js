import React,{useState} from "react";
import CartContext from "./cart-context";

const CartProvider=(props)=>{
    const [confirmedMeal,setConfirmedMeal]=useState([]);
    const [totalAmount,setTotalAmount]=useState(0)

    const addItemHandler=(item)=>{
        setConfirmedMeal((prevMeal) => {
            return [ item,...prevMeal];
       });
    };

setTotalAmount(totalAmount);

    const removeItemHandler=(id)=>{

    };
    const cartContext={
        items:confirmedMeal,
        totalAmount:totalAmount,
        addItem: addItemHandler,
        removeItem:removeItemHandler
    };
  
    return(
        <CartContext.Provider value={cartContext}>
            {props.children}
        </CartContext.Provider>
    )
}
export default CartProvider;