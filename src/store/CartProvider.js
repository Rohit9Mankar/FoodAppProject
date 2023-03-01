import React, { useState } from "react";
import CartContext from "./cart-context";

const CartProvider = (props) => {
    const [confirmedMeal, setConfirmedMeal] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);

    const addItemHandler = (item) => {

        setConfirmedMeal([...confirmedMeal, item]);

        setTotalPrice((prevPrice) => {
            return (prevPrice +(item.price*item.quantity) )
        });
    };



    const removeItemHandler = (id) => {
const newMeal=confirmedMeal.map((item)=>{
    if(item.id===id){
        return {...item,quantity:item.quantity-1};
    }
    return item;
})
setConfirmedMeal(newMeal);


    };

    const cartContext = {
        items: confirmedMeal,
        totalAmount: totalPrice,
        addItem: addItemHandler,
        removeItem: removeItemHandler
    };

    return (
        <CartContext.Provider value={cartContext}>
            {props.children}
        </CartContext.Provider>
    )
}
export default CartProvider;