import React,{ useContext } from 'react';
import { GlobalContext } from '../Context/GlobalState';
import Transaction from './Transaction';

export default function TransactionList() {
    const { transactions } = useContext(GlobalContext);
    // const context = useContext(GlobalContext);
     //context.transaction


    console.log(transactions);
    return (
        <>
      <h3>History</h3>
      <ul className="list">
          {
              transactions.map((transaction)=>(<Transaction key={transaction.id} transaction={transaction} />))
          }  
      </ul>
    </>
    )
}
