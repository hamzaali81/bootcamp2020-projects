import { createStore,applyMiddleware,compose } from 'redux';
import thunk from 'redux-thunk'
import mainReducer from './mainReducer';

// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION__ || compose;
const store = createStore(mainReducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
// console.log(store);

export default store;