import React from 'react';
import styles from './Ingredients.module.css';

export default function RecipeIngredients() {
    const ingredients = ["1/2 red onion sliced", "1 tbsp olive oil", "pizza dough", "all-purpose flour to roll dough", 
    "1/4 c fig jam", "1 tbsp minced garlic", "1/4 lb fontina shredded", "1/4 lb mozzarella shredded", "1/8 lb prosciutto", 
    "1/4 c gorgonzola to garnish"];
  return (
    <div>
      <h3>Recipe Ingredients</h3>
      <ul className = {styles.ingredientList}>
         <li>{ingredients[0]}</li>
         <li>{ingredients[1]}</li>
         <li>{ingredients[2]}</li>
         <li>{ingredients[3]}</li>
         <li>{ingredients[4]}</li>
         <li>{ingredients[5]}</li>
         <li>{ingredients[6]}</li>
         <li>{ingredients[7]}</li>
         <li>{ingredients[8]}</li>
         <li>{ingredients[9]}</li>
      </ul>
    </div>
  )
}
