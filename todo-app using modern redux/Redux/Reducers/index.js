import { ADD_TODO,DELETE_TODO,EDIT_TODO } from '../Actions';

const intialState =  {
    data: []
}

const todos = (state= intialState, action)=>{
    console.log(action);
    switch(action.type){
        case ADD_TODO:
            return {
               ...state,
               data: [
                   ...state.data,
                   {
                       message: action.message,
                       id: action.id
                   },
               ]
            } 
        case DELETE_TODO:{
            // console.log(action);
           
    //    let listFilter = state.data.filter((el)=> el.id !== action.id)
    //    console.log(listFilter);
            return {
           data: state.data.filter((el)=> el.id !== action.id)
            }
        }
            
        case EDIT_TODO:{
                //   console.log('state*****',state.data);
                  console.log(state.data.map((el)=> el.message));
            return {
                
            }
        }
        default :{
            return state
        }
    }
}


export default todos;