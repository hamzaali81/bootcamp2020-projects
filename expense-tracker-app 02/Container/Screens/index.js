import React, { useContext, useState } from "react";
import "./style.css";
import { TransContext } from "./TranscationContext";
console.log("TransContext*****", TransContext);

export default function MainScreen() {
  let { transcations, addTranscation } = useContext(TransContext);
  console.log(transcations);

  let [newDes, setDec] = useState("");
  let [newAmount, setA] = useState(0);
  let { deleteTranscation } = useContext(TransContext);
  console.log(deleteTranscation);

  const handleAddition = (e) => {
    console.log(newDes, newAmount);
    if (Number(newAmount) === 0) {
      alert("Please enter correct values");
      return false;
    }
    e.preventDefault();

    addTranscation({
      amount: Number(newAmount),
      desc: newDes,
    });

    setDec("");
    setA(0);
  };


  const getIncome = () => {
    let income = 0;
    for (var i = 0; i < transcations.length; i++) {
      if (transcations[i].amount > 0) {
        income += transcations[i].amount;
      }
    }
    return income;
  };

  const getExpense = () => {
    let expense = 0;
    for (var i = 0; i < transcations.length; i++) {
      if (transcations[i].amount < 0) {
        expense += transcations[i].amount;
      }
    }
    return expense;
  };

  return (
    <div className="container">
      <h1 className="text-center">Expense Tracker</h1>
      <h3>
        Your balance <br />
        {getIncome() + getExpense()}
      </h3>
      <div className="expense-container">
        <h3>
          INCOME <br />
          {getIncome()}
        </h3>
        <h3>
          EXPENSE <br />
          {getExpense()}
        </h3>
      </div>

      <h3>History</h3>
      <ul className="transcation-list">
        {transcations.map(({ transaction }) => {
         
          return (
            <li>
              <span>{transaction.desc}</span>
              <span>{transaction.amount}</span>
              <button onClick={() => deleteTranscation(transaction.id)}>Delete</button>
           
            </li>
          );
        })}
      </ul>

      <hr />

      <h3>Add new transaction</h3>
      <hr />

      <form className="transaction-form" onSubmit={handleAddition}>
        <label>
          Enter Description <br />
          <input
            type="text"
            required
            onChange={(e) => setDec(e.target.value)}
            value={newDes}
          />
        </label>
        <br />
        <label>
          Enter Amount <br />
          <input
            type="number"
            required
            onChange={(e) => {
              setA(e.target.value);
            }}
            value={newAmount}
          />
        </label>
        <br />
        <input type="submit" value="Add transcation" />
      </form>
    </div>
  );
}
