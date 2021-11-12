import { useState}  from "react";

import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";

const ExpenseItem = (props) => {

    const [title, setTitle] = useState(props.title);

    // const clickHandler = () => {
    //   setTitle("Updated!");
    //   console.log("Button clicked");
    // };

    return (
      <li>
      <Card className="expense-item">
        <ExpenseDate date={props.date} />
        <div className="expense-item__description">
          <h2>{title} <br /><span className="expense-item__id">ID: {props.id}</span></h2>
          {/* <span className="expense-item__id">ID: {props.id}</span> */}
        </div>
        <div className="expense-item__price">{props.amount} €</div>
        {/* <button onClick={clickHandler}>Change Title</button> */}
      </Card>
      </li>
    );
}

export default ExpenseItem;