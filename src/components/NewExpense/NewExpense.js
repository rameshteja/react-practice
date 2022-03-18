import './NewExpense.css';
import ExpenseForm from './ExpenseForm';
const NewExpense = (props) => {
    const saveEnteredExpenseData = (enteredExpenseData) => {
        const expenseData ={
            ...enteredExpenseData,
            id: Math.random().toString()
        };
        props.onAddExpense(expenseData);
    }
    return (
        <div className='new-expense'>
            <ExpenseForm  onSaveExpenceData={saveEnteredExpenseData}/>
        </div>
    );
}

export default NewExpense;