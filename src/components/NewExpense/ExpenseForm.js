import React, {useState} from 'react';
import './ExpenseForm.css';

const ExpenseForm = (props) => {
    const [title, setEnterdTitle] = useState('');
    const [amount, setEnterdAmount] = useState('');
    const [date, setEnterdDate] = useState('');
    const amountChangeHandler = (event) => {
        setEnterdAmount(event.target.value);
    }

    const inputChangeHandler = (event) => {
        setEnterdTitle(event.target.value);
    }

    const dateChangeHandler = (event) => {
        setEnterdDate(event.target.value);
    }
    
    const submitHandler = (event) => {
        event.preventDefault();
        const expenseData = {
            title: title,
            amount: amount,
            date: new Date(date)
        };
        props.onSaveExpenceData(expenseData);
        setEnterdTitle('');
        setEnterdAmount('');
        setEnterdDate('');

    }
    return (
        <form onSubmit={submitHandler}>
            <div className='new-expense__controls'>
                <div className='new-expense__control'>
                    <label>Title</label>
                    <input type='text' onChange={inputChangeHandler} />
                </div>
                <div className='new-expense__control'>
                    <label>Amount</label>
                    <input type='number' min='0.01' step='0.01' onChange={amountChangeHandler}/>
                </div>
                <div className='new-expense__control'>
                    <label>Date</label>
                    <input type='date' min='20019-03-20' max='22-12-30'onChange={dateChangeHandler} />
                </div>
            </div>
            <div className='new-expense__actions'>
                <button type='submit'>Add Expese</button>
            </div>
        </form>
    );
}

export default ExpenseForm;