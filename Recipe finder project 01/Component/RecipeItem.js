import React,{ useState } from 'react';
// import FavoriteRecipeList from './FavoriteRecipeList';
import { favoriteRecipes } from '../Redux/Action';
import { connect } from 'react-redux'; 
import '../App.css';

// console.log('favoriteRecipes******',favoriteRecipes);

function RecipeItem(props) {
    console.log('props*****',props);
    
    const { recipe } = props;
    console.log(recipe);
   const [favoriteRecipe, setfavoriteRecipe] = useState(false)
    
   const favorite = (recipe)=>{
    props.dispatch(favoriteRecipes(recipe))
       setfavoriteRecipe(true);
   }
    return (
        <div>
            {
                props.favoriteButton ?
                    
                favoriteRecipe 
                ? 
                <div className="star">&#9733;</div> 
                : 
                <div className="star" onClick={()=> favorite(recipe)}>&#9734;</div>
            
            :
            <div></div>
             
            }

            <a href={recipe.href}>
            <h4>{recipe.title}</h4>
            </a>
            <p>{recipe.ingredients}</p>
            <img src={recipe.thumbnail} alt={recipe.title}/>
        </div>
    )
}
export default connect()(RecipeItem);