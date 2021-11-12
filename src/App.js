import { useState } from "react";
import { nanoid } from "nanoid";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearchDollar } from '@fortawesome/free-solid-svg-icons'

import "./styles/app.scss";

import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
import Footer from "./components/UI/Footer";

const DUMMY_EXPENSES = [
  {
    id: nanoid(),
    title: 'Sample Entry',
    amount: 9.99,
    date: new Date(2021, 1, 1),
  },
];


const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
    return [expense, ...prevExpenses]
    });
  };

  return (
    <div>
      <h1 className="new-expense"><FontAwesomeIcon icon={faSearchDollar} /> Expense Tracker</h1>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses expensesItem={expenses} />
      <Footer />
    </div>
  );
};

export default App;