// import { ADD } from '../Actions';

const intialState =  {
    user: 'biryani'
}

const reducer = (state= intialState, action)=>{
    console.log(action);
    switch(action.type){
        case 'ADD':
            return {
               ...state, user: action.payload 
            } 
        default :{
            return state
        }
    }
}
// const reducer = (state={}, action)=>{
//     console.log(action);
//     switch(action.type){
//         case 'ADD_TODO':
//             return {
//                ...state, 
//             } 
//         default :{
//             return state
//         }
//     }
// }


export {
   reducer
}