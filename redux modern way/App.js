import React from 'react';
// import Form from './Components/form';
import { useSelector,useDispatch } from 'react-redux'
import {add} from './Redux/Actions';
export default function App() {

  // const user = useSelector((state)=> console.log(state) );
  const user = useSelector((state)=> state.reducer.user);
  
  const dispatch = useDispatch();
    console.log(user);
  return (
    <div>
      <h1>Todo App</h1>
      <h2>{user}</h2>
      <button onClick={()=> dispatch(add())}>Click Me</button>
     {/* <Form /> */}
    </div>
  );
}
