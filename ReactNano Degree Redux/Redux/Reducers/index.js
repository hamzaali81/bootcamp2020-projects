// import { ADD } from '../Actions';
const intialState = {
  user:  'hamza',
  rollNumber: 32
};

const reducer = (state=intialState, action)=>{
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


export {
   reducer
}