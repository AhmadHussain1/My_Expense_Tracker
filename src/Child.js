import "./App.css";
import React, { useContext } from 'react';
import {  transContext } from "./TransContext";
function Child() {

let  transactions= useContext(transContext)
  
return (
    <div className="container">
      <h1 className="text-center"> Expense Tracker</h1>
      <h3>
        Your Balance <br />   $260
      </h3>

      <div className="expense-container">
        <h3> INCOME <br />   $500{" "} </h3>
        <h3> EXPENSE <br />  $250{" "}
        </h3>
      </div>

      <h3>History</h3>
      <hr />
      <ul className="trans-list">
              {transactions.map((trans,ind)=>{
              return(
                <li key={ind}>
              <span>{trans.Desc}</span>
            <span>{trans.amount}</span>
                 </li>
              )
          })}
      </ul>

      <h3>Add new transaction</h3>
      <hr />

      <form className="expense-form">  <label>
          Enter Discription
          <br />
          <input type="text" />
        </label>
        <br />
        <label> Enter Amount
          <br />
          <input type="number" required/>
        </label>
        <br />
        <input type="submit" value="Add new transaction" />
      </form>
    </div>
  );
}

export default Child;
