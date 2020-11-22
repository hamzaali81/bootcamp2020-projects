import React from 'react';
import Header from './components/Header';
import Balance from './components/Balance';
import IncomeExpense from './components/IncomeExpnese';
import TransactionList from './components/TransactionList';
import AddTransaction from './components/AddTransaction';
import { GlobalProvider } from './Context/GlobalState'
import './App.css';

const App = () => {
  return (
  <GlobalProvider>
      <div>
    <Header />
    <div className="container">
      <Balance />
      <IncomeExpense />
      <TransactionList />
      <AddTransaction />
    </div>
    </div>
  </GlobalProvider>
  );
}

export default App;
