import React,{ createContext,useReducer } from 'react';
import transReducer from './transReducer'

let intialtransactions = [
    { amount: 500, desc: "Cash" },
    { amount: -50, desc: "Cold Drink" },
    { amount: 100, desc: "Deposit" },
    { amount: -200, desc: "Utility Bill" },
  ];

export const TransContext = createContext(intialtransactions);
export const TranscationProvider = ({children})=>{
    let [ state, dispatch ] = useReducer(transReducer,intialtransactions);

    //actions
    function addTranscation(transaction){
        // console.log('transObj',transObj);
        dispatch({
            type: "ADD_TRANS",
            payload: {
                amount: transaction.amount,
                desc:   transaction.desc

            }
        })
    }
    function deleteTranscation(id){
        
        dispatch({
            type: "DELETE_TRANS",
            payload: id
            
        })
    }
    return (
    <TransContext.Provider value={{
        transcations: state.transcations,
            addTranscation,
            deleteTranscation
        
        }}
            
            >
                 {children}
    </TransContext.Provider>
    )
}

