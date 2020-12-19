import { combineReducers } from 'redux';
import recipes from './Reducers';

const rootReducer = combineReducers({
    recipes,
})

export default rootReducer;