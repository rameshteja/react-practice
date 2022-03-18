import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react';
import ExpenseItems from './components/Expenses/ExpenseItems';
import NewExpense from './components/NewExpense/NewExpense';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

const App = () => {
  const expenses = [
    {
      id: 'e1',
      title : 'Toilet paper',
      amount: 90.25,
      date: new Date(2022, 7, 20)
    },
    {
      id: 'e2',
      title : 'New TV',
      amount: 100.25,
      date: new Date(2022, 2, 16)
    },
    {
      id: 'e3',
      title : 'Car Insurance',
      amount: 200.25,
      date: new Date(2022, 4, 18)
    },
    {
      id: 'e4',
      title : 'Bike',
      amount: 900.25,
      date: new Date(2020, 2, 2)
    }

  ];
  const addExpenseHandler = expense => {
    expenses.push(expense);
    console.log(expenses);
  }
  return (
    <div className='back'>
      <NewExpense onAddExpense = {addExpenseHandler}/>
      <ExpenseItems title={expenses[0].title} date = {expenses[0].date} amount={expenses[0].amount}></ExpenseItems>
      <ExpenseItems title={expenses[1].title} date = {expenses[1].date} amount={expenses[1].amount}></ExpenseItems>
      <ExpenseItems title={expenses[2].title} date = {expenses[2].date} amount={expenses[2].amount}></ExpenseItems>
      <ExpenseItems title={expenses[3].title} date = {expenses[3].date} amount={expenses[3].amount}></ExpenseItems>
    </div>
  );
}
export default App;
