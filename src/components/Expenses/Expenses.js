import ExpenseItems from "./ExpenseItems";
const Expenses = (props) => {
	return (
		<div>
			<ExpenseItems title={props.expense[0].title} date = {props.expense[0].date} amount={props.expense[0].amount}></ExpenseItems>
			<ExpenseItems title={props.expense[1].title} date = {props.expense[1].date} amount={props.expense[1].amount}></ExpenseItems>
			<ExpenseItems title={props.expense[2].title} date = {props.expense[2].date} amount={props.expense[2].amount}></ExpenseItems>
			<ExpenseItems title={props.expense[3].title} date = {props.expense[3].date} amount={props.expense[3].amount}></ExpenseItems>
		</div>
	);
}

export default Expenses;