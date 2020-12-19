import React from 'react';
import SearchRecipes from './Component/SearchRecipes';
import RecipeList from './Component/RecipeList';
// import FavoriteRecipeList from './Component/FavoriteRecipeList';

export default function App() {
  return (
  
    <div>
    <h1>Recipe finder</h1>
    <SearchRecipes />
    <RecipeList />
    {/* <FavoriteRecipeList /> */}
    </div>
  
  );
}
