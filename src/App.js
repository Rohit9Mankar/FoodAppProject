import React, { useState } from "react";
import Cart from "./Components/Cart/Cart";
import Meals from "./Components/Meals/Meals";


import Heading from "./Components/UI/Heading";

function App() {
  const [isVisibility, setIsVisibility] = useState(false);
  const dishes = [
    {
      id: "01",
      dish: "Sushi",
      content: "Finest fish and veggies",
      price: "22.34"
    },
    {
      id: "02",
      dish: "Scnitzel",
      content: "German speciality",
      price: "56.3"
    },
    {
      id: "03",
      dish: "Barbecue Burger",
      content: "American, raw , meaty",
      price: "34.34"
    },
    {
      id: "04",
      dish: "Green Bowl",
      content: "Healthy.. and green",
      price: "24.34"
    }
  ];

  const cartModalHandler = (event) => {
    event.preventDefault();
    setIsVisibility(true);
  };

  const closeHandler = (event) => {
    event.preventDefault();
    setIsVisibility(false);
  };

  return (
    <React.Fragment>
      {isVisibility && <Cart onClick={closeHandler}></Cart>}
      <Heading count="0" onClick={cartModalHandler} />

      <Meals items={dishes} />
    </React.Fragment>




  );
}

export default App;
