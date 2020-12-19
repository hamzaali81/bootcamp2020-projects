import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

// import { createStore,applyMiddleware,compose } from 'redux';
// import reducers from './Redux/Reducers';
import { Provider } from 'react-redux';
import store from './Redux/store';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import SearchRecipes from './Component/SearchRecipes';
import RecipeList from './Component/RecipeList';
import FavoriteRecipeList from './Component/FavoriteRecipeList';


// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION__ || compose;
// const store  = createStore(
//   reducers,
//    composeEnhancers(
//      applyMiddleware()
//    )
//   );
// console.log(store);



ReactDOM.render(
  <Provider store={store}>
      <BrowserRouter>
    <Switch>
      <Route exact path='/' component={App}/>
      <Route path='/favorites' component={FavoriteRecipeList}/>
    </Switch>
   </BrowserRouter>
    
    {/* <App/> */}
 </Provider>
  ,
  document.getElementById('root')
);

// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION__ || compose;

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
