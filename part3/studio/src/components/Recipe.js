const RecipeAuthor = () => {
   let authorLink = "https://theschmidtywife.com/simple-vegetable-rice-soup/";
   let authorPhoto = "https://theschmidtywife.com/wp-content/uploads/2022/05/homepage-about.jpg";
   let authorName = "Lauren, the Schmidty Wife";

   return (
      <div>
         <img src={authorPhoto} alt ={authorName} style={{objectFit: "contain", borderRadius: "50%"}} />
         <div>
            <h3>{authorName}</h3>
            <a href={authorLink}></a> 
         </div>
      </div>
   );
}

const RecipeIngredients = () => {
   const ingredients = ["broth", "onions", "carrots", "celery", "olive oil"];
   return(
      <div>
         <h3>Recipe Ingredients</h3>
         <ul>
            <li>{ingredients[0]}</li>
            <li>{ingredients[1]}</li>
            <li>{ingredients[2]}</li>
            <li>{ingredients[3]}</li>
            <li>{ingredients[4]}</li>
         </ul>
      </div>
   );
}

const RecipeDescription = () => {
   return (
      <div> 
         <div>
            <h1>Simple Vegetable Rice Soup</h1>
            <p>Perfect for a light meal or a side dish this simple vegetable rice soup 
               is made with classic vegetables, chicken broth, and rice. Reminiscent 
               of chicken noodle soup but simpler and lighter.</p>
         </div>
         <div className="recipePhotoBlock">
            <RecipeIngredients />
            <RecipeAuthor />
         </div>
      </div>
   );
}

const RecipePhoto = () => {
   return (
      <img src="https://theschmidtywife.com/wp-content/uploads/2019/02/pot-of-simple-vegetable-rice-soup-480x480.jpg" 
      alt="Simple Vegetable Rice Soup" className="imageUpdates"/>
   );
}

export default function RecipeDisplay () {
   return(
      <div className="recipePhotoBlock">
         <RecipePhoto />
         <div>
            <RecipeDescription />
         </div>
      </div>
   );
}