import React,{ useState } from 'react';
import { Form, FormGroup,FormControl,FormLabel,Button  } from 'react-bootstrap';
import { connect } from 'react-redux';
import { setRecipes } from '../Redux/Action';


function SearchRecipes(props) {
  console.log(props);

  const [ ingredients,setIngredients ] = useState('');
  const [ dish,setDish ] = useState('');
  
  const search= ()=>{
    const url = `http://www.recipepuppy.com/api/?i=${ingredients}&q=${dish}`;
     console.log(ingredients,dish);
     console.log(url);
     fetch(url, {
       method: 'GET'    
     })
     .then((response)=> response.json())
    //  .then(json=> console.log(json))
     .then(json=> props.dispatch(setRecipes(json.results)))
  }
  
  return (
        <div>
            <h1>Search recipe</h1>
            <Form inline>
        <FormGroup>
          <FormLabel>Ingredients</FormLabel>
          {' '}
          <FormControl 
            type="text" 
            placeholder="garlic, chicken" 
            onChange={(e)=> setIngredients(e.target.value)}  
          />
        </FormGroup>
        {' '}
        <FormGroup>
          <FormLabel>Dish</FormLabel>
          {' '}
          <FormControl 
            type="text" 
            placeholder="adobo"
            onChange={(e)=> setDish(e.target.value)}
          />
        </FormGroup>
        {' '}
        <Button onClick={() => search()}>Submit</Button>
      </Form>
        </div>
    )
}

export default connect()(SearchRecipes);