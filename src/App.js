import React, { useState } from "react";
import Cart from "./Components/Cart/Cart";
import Meals from "./Components/Meals/Meals";


import Heading from "./Components/UI/Heading";
import CartProvider from "./store/CartProvider";

function App() {
  const [cartVisibility, setCartVisibility] = useState(false);
  

  const cartModalHandler = (event) => {
    event.preventDefault();
    setCartVisibility(true);
  };

  const closeHandler = (event) => {
    event.preventDefault();
    setCartVisibility(false);
  };

  return (
    <CartProvider>
      {cartVisibility && <Cart onClick={closeHandler}></Cart>}
      <Heading count="0" onClick={cartModalHandler} />

      <Meals  />
    </CartProvider>




  );
}

export default App;
