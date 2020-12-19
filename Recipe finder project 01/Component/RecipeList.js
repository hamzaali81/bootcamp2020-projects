import React from 'react';
import { useSelector } from 'react-redux';
import RecipeItem from './RecipeItem';
import { Link } from 'react-router-dom';

export default function RecipeList() {
    const recipelist = useSelector(({recipes}) => recipes);
    // console.log(recipelist);
    return (
        <div>
            <h4><Link to='/favorites'>Favorites</Link></h4>
            <ul>
                {
                    recipelist.map((recipe,i)=> {
                        // return <li key={i}>{el.title}</li>
                        return <RecipeItem recipe={recipe} key={i} favoriteButton={true}/>
                        // return <RecipeItem title={el.title} key={i} thumbnail={el.thumbnail} ingredients={el.ingredients} href={el.href}/>
                    })
                }
            </ul>
        </div>
    )
}
