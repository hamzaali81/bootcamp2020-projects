import React,{ useState,useEffect } from 'react';

const App = () => {

  const [intialState,finalState] = useState({
    username: '',
    password: '',
  
  });
const [err ,setErr] = useState('')
  
const handleChange=(e)=>{
   console.log(e.target.value);
    finalState({
   ...intialState, [e.target.name]: e.target.value});

  }
 
  const handleSubmit= (e)=>{
    e.preventDefault();

    if(!intialState.username){
      alert('ok',intialState.err);
      setErr('field is required') 
      
    }
      else  if(intialState.username.length <= 4){
             setErr('length not match')
        }
        else {
          setErr('')
        }
     
  }

return(
  
  <div>
     <h1>Hello</h1>
     <form onSubmit={handleSubmit}>
       <label >Username:</label>
    
       
        <input name="username" type="text" value={intialState.name} onChange={handleChange}/>
<small style={{color: 'red'}}>{err}</small>

   <br/> <label>Password:</label>
     <input name="password"  type="password" value={intialState.password} onChange={handleChange}/>
      <input type="submit" value="Submit"/>
     </form>
  </div>
)
}

export default App;