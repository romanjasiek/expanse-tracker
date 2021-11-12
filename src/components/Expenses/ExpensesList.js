import ExpenseItem from "./ExpenseItem";
import { nanoid } from "nanoid";

const ExpensesList = (props) => {

    if (props.expenseItems.length === 0) {
        return <h2 className="expenses-list__fallback">No Expenses found.</h2>;
    }

    return <ul className="expenses-list">
        {props.expenseItems.map((expense) => <ExpenseItem 
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
        id={expense.id}
        key={nanoid()}/>)}
    </ul>
}

export default ExpensesList;