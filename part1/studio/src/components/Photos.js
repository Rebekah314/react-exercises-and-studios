import React from 'react';
import styles from './Description.module.css';

export default function RecipePhoto() {
  return (
    <div>
        <img src="https://julieblanner.com/wp-content/uploads/2014/10/pizza-recipe.jpg" alt="recipe photo" className = {styles.imageUpdates} width="400"/>
    </div>
  )
}
