const transReducer = ((state,action)=>{
    switch(action.type){
        case 'ADD_TRANS':{
            console.log(action.payload);
            return{
                transactions: [action.payload,...state.transaction]}
        }
     
        case 'DELETE_TRANS':{
            // console.log(action.payload);
            return{
              transactions:state.transactions.filter((transaction)=>transaction.id !== action.payload),...state}
        }
        default:{
            return state;
        }

    }

})


export default transReducer;