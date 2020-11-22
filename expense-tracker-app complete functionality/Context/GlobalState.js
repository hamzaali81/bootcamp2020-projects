import React,{ createContext,useReducer } from 'react';
import AppReducer from './AppReducer'
const initalState = {
  transactions: [ 
    {id: 1,text: 'Cash', amount: -20},
    {id: 2,text: 'Pepsi', amount: 300},
    {id: 3,text: 'Laptop', amount: 100},
    {id: 4,text: 'fees', amount: -60},
]
}

//Create context
export const GlobalContext = createContext(initalState);

//Provider component
export const GlobalProvider = ( {children} )=> {
 
    // Actions
    function deleteTransaction(id){
        dispatch({
            type: 'DELETE_TRANSACTION',
            payload: id
        })
    }
    function addTransaction(transaction){
        dispatch({
            type: 'ADD_TRANSACTION',
            payload: transaction
        })
    }
    const [state,dispatch] = useReducer(AppReducer, initalState)
 return (<GlobalContext.Provider value={{
     transactions: state.transactions,
     
     deleteTransaction,
     addTransaction
 }}>
{children}
</GlobalContext.Provider>)
  
}