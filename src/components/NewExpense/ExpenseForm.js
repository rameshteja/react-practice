import './ExpenseForm.css';
import React, { useState } from 'react';

const ExpenseForm = () => {
    const [titlle, setTitle] = useState('');
    const [amount, setAmount] = useState('');
    const [date, setdate] = useState('');
    const inputChangeHandler = (event) => {
        setTitle(event.target.value);
    }
    const amountChangeHandler = (event) => {
        setAmount(event.target.value);
    }

    const dateChangeHandler = (event) => {
        setdate(event.target.value);
    }
    const formData = {
        title: titlle,
        amount: amount,
        date: date
    };
    console.log(formData);
    return (
        <form>
            <div className='new-expense__controls'>
                <div className='new-expense__control'>
                    <label>Title</label>
                    <input type='text' onChange={inputChangeHandler}/>
                </div>
                <div className='new-expense__control'>
                    <label>Amount</label>
                    <input type='number' min=".01" step="0.01" onChange={amountChangeHandler}/>
                </div>
                <div className='new-expense__control'>
                    <label>Date</label>
                    <input type='date' min='20019-03-20' max='22-12-30' onChange={dateChangeHandler}/>
                </div>
            </div>
            <div className='new-expense__actions'>
                <button type='submit'>Add Expese</button>
            </div>
        </form>
    );
}

export default ExpenseForm;