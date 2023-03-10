import React from "react";

import MealItem from "./MealItem";
import classes from './Meals.module.css';

const dishes = [
  {
    id: "01",
    dish: "Sushi",
    content: "Finest fish and veggies",

    price: 22.34
  },
  {
    id: "02",
    dish: "Scnitzel",
    content: "German speciality",
    price: 56.3
  },
  {
    id: "03",
    dish: "Barbecue Burger",
    content: "American, raw , meaty",
    price: 34.34
  },
  {
    id: "04",
    dish: "Green Bowl",
    content: "Healthy.. and green",
    price: 24.34
  },
];
const Meals = () => {


  const mealList = dishes.map((item) => (
    <MealItem
      id={item.id}
      key={item.id}
      dish={item.dish}
      content={item.content}
      price={item.price}
    />
  ))
  return (
    <React.Fragment>
      <ul className={classes.mealList}>
        {mealList}
      </ul>
    </React.Fragment>


  )
}
export default Meals;