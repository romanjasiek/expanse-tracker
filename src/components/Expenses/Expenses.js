import { useState } from "react";

import ExpenseFilter from "./ExpenseFilter";
import Card from "../UI/Card";
import ExpensesList from "./ExpensesList";

const Expenses = (props) => {

  const [filteredYear, setFilteredYear] = useState("2021");

  
  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = props.expensesItem.filter(expense => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

    return (
      <Card className="expenses">
        <ExpenseFilter selected={filteredYear} onChangeFilter={filterChangeHandler}/>
        <ExpensesList expenseItems={filteredExpenses}/>
      </Card>
    );
}

export default Expenses;