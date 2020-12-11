import React,{ useState } from 'react';

export default function App() {
  const [ list, setList ] = useState('')
  const [addTodoList, setAddTodo] = useState([]);
  const [, setDeleteList] = useState([])
  const [updateList,setUpdateList] = useState([]);
  const [check,setCheck] = useState(!false);
  

  const handleChange=(e)=>{
    setList(e.target.value);
   
 }

 const addTodo=()=>{
  const newTodos = [...addTodoList, list];
   setAddTodo(newTodos)
 }
 
const deleBtn=(e)=>{
     setDeleteList(addTodoList.splice(e.target.value,1))
      
     }

const editBtn= (e)=>{
  setList(addTodoList[e.target.value])
  setCheck(false)
}


const updateBtn = (e)=>{    
      setUpdateList(addTodoList.splice(e.target.value,1,list))
       setCheck(!false)
}

const cancelBtn = ()=>{
  console.log('hello'); 
  setCheck(!false)
}

// console.log(list);

  return (
    <div>
     <h1>Todo App</h1>

     <input type="text" value={list}  name="todolist" onChange={handleChange}/>
            <button onClick={addTodo}>Add Todo</button>

     <ul>
        {addTodoList.map((el,i)=>{
          return <li key={i}>
          

            { 
            check  ? 
            <div>
            {el}
            <br/>
            <button value={i} onClick={deleBtn}>Delete</button>
            <button value={i}  onClick={editBtn}>Edit</button> 
            </div>
            : 
              <div>
                {el}
                <button value={i} onClick={updateBtn}>Update</button>
                <button onClick={cancelBtn}>Cancel</button> 
              </div>
              
              
            }
        
            </li>
        })}
     </ul>
    </div>
  );
}
