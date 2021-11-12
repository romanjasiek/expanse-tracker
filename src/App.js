import { nanoid } from "nanoid";

import "./styles/app.scss";

import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const expenses = [
  {
    id: nanoid(),
    title: 'Toilet Paper',
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { 
    id: nanoid(), 
    title: 'New TV', 
    amount: 799.49, 
    date: new Date(2021, 2, 12) },
  {
    id: nanoid(),
    title: 'Car Insurance',
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: nanoid(),
    title: 'New Desk (Wooden)',
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];

const addExpenseHandler = (expense) => {
    console.log(expense);
};

const App = () => {
  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses expensesItem={expenses} />
    </div>
  );
};

export default App;