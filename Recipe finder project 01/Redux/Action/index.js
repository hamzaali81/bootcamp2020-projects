export const SET_RECIPES = 'SET_RECIPES';
export const FAVORITE_RECIPE = 'FAVORITE_RECIPE';

export function setRecipes(items) {
    console.log(items);
    return {
        type: SET_RECIPES,
        items
    }
}
export function favoriteRecipes(recipe) {
    console.log('recipe****',recipe);
    return {
        type: FAVORITE_RECIPE,
        recipe
        
    }
}