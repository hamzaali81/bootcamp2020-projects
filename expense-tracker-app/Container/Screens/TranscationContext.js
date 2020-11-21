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

    function addTranscation(transObj){
        
        dispatch({
            type: "ADD_TRANS",
            payload: {
                amount: transObj.amount,
                desc:   transObj.desc
            }
        })
    }
    return (
    <TransContext.Provider value={{
        transcations: state,
            addTranscation}}>
                 {children}
    </TransContext.Provider>
    )
}

