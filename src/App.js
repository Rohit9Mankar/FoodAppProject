import React from "react";
import Meals from "./Components/Meals/Meals";


import Heading from "./Components/UI/Heading";

function App() {
  const dishes=[
    {
      id:"01",
      dish:"Sushi",
      content:"Finest fish and veggies",
      price:"22.34"
    },
    {
      id:"02",
      dish:"Scnitzel",
      content:"German speciality",
      price:"56.3"
    },
    {
      id:"03",
      dish:"Barbecue Burger",
      content:"American, raw , meaty",
      price:"34.34"
    },
    {
      id:"04",
      dish:"Green Bowl",
      content:"Healthy.. and green",
      price:"24.34"
    }
  ];
  return (
<div>
<Heading count="0" />
<Meals items={dishes}/>
</div>
    



  );
}

export default App;
