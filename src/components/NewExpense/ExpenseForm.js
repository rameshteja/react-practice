import './ExpenseForm.css';

const ExpenseForm = () => {
    const inputChangeHandler = (event) => {
        console.log(event.target.value);
    }
    return (
        <form>
            <div className='new-expense__controls'>
                <div className='new-expense__control'>
                    <label>Title</label>
                    <input type='text' onChange={inputChangeHandler}/>
                </div>
                <div className='new-expense__control'>
                    <label>Amount</label>
                    <input type='number' min='0.01' max='0.01' />
                </div>
                <div className='new-expense__control'>
                    <label>Date</label>
                    <input type='date' min='20019-03-20' max='22-12-30' />
                </div>
            </div>
            <div className='new-expense__actions'>
                <button type='submit'>Add Expese</button>
            </div>
        </form>
    );
}

export default ExpenseForm;