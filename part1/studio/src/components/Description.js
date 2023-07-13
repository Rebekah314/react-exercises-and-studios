import React from 'react';
import styles from './Description.module.css';

const RecipeAuthor = () => {
    const authorLink = "https://julieblanner.com/prosciutto-pizza/";
    const authorPhoto = "https://julieblanner.com/wp-content/uploads/2021/09/home-sidebar-650x447.jpeg";
    const authorName = "Julie Blanner";
  return (
    <div className = {styles.recipeAuthorBlock}>
      <img src={authorPhoto} alt = "Photo of recipe author Julie Blanner" className={styles.imageUpdates} width="300"/>
      <div>
         <h3>{authorName}</h3>
         <a href={authorLink}>Recipes & Home Design</a> 
      </div>
   </div>
  )
}

class RecipeDescription extends React.Component {
    render() {
        return (
            <div> 
                <div>
                    <h1>Prosciutto Pizza</h1>
                    <p>Flavorful prosciutto pizza with fig jam, caramelized onions and creamy cheese.</p>
                </div>
                <RecipeAuthor />
            </div>
        )
    }
}

export default RecipeDescription;