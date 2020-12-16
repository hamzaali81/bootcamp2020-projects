import React from 'react';
import { useSelector,useDispatch } from 'react-redux';
import { deleteTodo,editTodo } from '../../Redux/Actions';

export default function List(props) {
    const data = useSelector(({todos}) => todos.data);
    console.log(data);
    const dispatch = useDispatch();
    console.log('prop',props);

    return (
        <div>
         
          <ul>
          {data.map((el,id)=>{
              console.log(id);
              return <li key={el.id}>{el.message}
              <button onClick={()=>dispatch(deleteTodo(el.id))}>Delete</button>
              <button onClick={()=>dispatch(editTodo(el.message))}>Edit</button>
              </li>
          })}  

          </ul>
        </div>
    )
}
