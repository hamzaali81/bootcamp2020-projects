import React from "react";
import RecipeItem from "./RecipeItem";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function FavoriteRecipeList() {
  // const favoritelist = useSelector(({recipes}) => console.log('recipes',recipes));
  const favoritelist = useSelector(({ recipes }) => recipes);
  return (
    <div>

      <h1>Favorite Recipes</h1>
      <h4>
        <Link to="/">Home</Link>
      </h4>
      {favoritelist.map((recipe, i) => {
        return <RecipeItem recipe={recipe} key={i} favoriteButton={false} />;
      })}
    </div>
  );
}
