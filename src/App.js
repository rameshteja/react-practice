import logo from './logo.svg';
import './App.css';
import ExpenseItems from './components/ExpenseItems';

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

function  App() {
  const expense = [
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
  return (
    <div>
      <h2>First react app component</h2>
      <ExpenseItems title={expense[0].title} date = {expense[0].date} amount={expense[0].amount}></ExpenseItems>
      <ExpenseItems title={expense[1].title} date = {expense[1].date} amount={expense[1].amount}></ExpenseItems>
      <ExpenseItems title={expense[2].title} date = {expense[2].date} amount={expense[2].amount}></ExpenseItems>
      <ExpenseItems title={expense[3].title} date = {expense[3].date} amount={expense[3].amount}></ExpenseItems>
    </div>
  );
}
export default App;
