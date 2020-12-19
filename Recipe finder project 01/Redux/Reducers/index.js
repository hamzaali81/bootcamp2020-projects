import { SET_RECIPES } from '../Action';
import { FAVORITE_RECIPE } from '../Action';


function recipes(state =[],action) {
    console.log(state);
    switch(action.type){
        case SET_RECIPES:
            return action.items;
        case FAVORITE_RECIPE:
            state = [...state,action.recipe]
        return state;
            default:
            return state;
    }
}

export default recipes;