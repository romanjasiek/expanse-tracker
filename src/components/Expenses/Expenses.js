import { useState } from "react";

import ExpenseItem from "./ExpenseItem";
import ExpenseFilter from "./ExpenseFilter";
import Card from "../UI/Card";

const Expenses = (props) => {

  const [filteredYear, setFilteredYear] = useState("2021");
  
  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

    return (
      <Card className="expenses">
        {/* <ExpenseFilter selected={filteredYear} onChangeFilter={filterChangeHandler}/> */}
        <ExpenseFilter selected={filteredYear} onChangeFilter={filterChangeHandler}/>
        <ExpenseItem
          title={props.expensesItem[0].title}
          date={props.expensesItem[0].date}
          amount={props.expensesItem[0].amount}
          id={props.expensesItem[0].id}
        />
        <ExpenseItem
          title={props.expensesItem[1].title}
          date={props.expensesItem[1].date}
          amount={props.expensesItem[1].amount}
          id={props.expensesItem[1].id}
        />
        <ExpenseItem
          title={props.expensesItem[2].title}
          date={props.expensesItem[2].date}
          amount={props.expensesItem[2].amount}
          id={props.expensesItem[2].id}
        />
        <ExpenseItem
          title={props.expensesItem[3].title}
          date={props.expensesItem[3].date}
          amount={props.expensesItem[3].amount}
          id={props.expensesItem[3].id}
        />
      </Card>
    );
}

export default Expenses;