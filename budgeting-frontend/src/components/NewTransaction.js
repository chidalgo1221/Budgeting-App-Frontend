import { useState } from "react";
import {useHistory } from "react-router-dom";
import React from 'react';

const NewTransactionForm = (props) => {
    const [transaction, setTransaction] = useState({
      date: "",
      name: "",
      from: "",
      amount: 0,
    });
    let history = useHistory()

    const handleTextChange = (e) => {
      setTransaction({ ...transaction, [e.target.id]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        props.addTransaction(transaction);
        history.push("/transactions");
      };

    return (
        <div>
          <h1 className="header"> Add a new item</h1>
          <form onSubmit={handleSubmit}>
            <label htmlFor="date">
              Date
            </label>
            <input 
              id="date"
              value={transaction.date}
              type="date"
              onChange={handleTextChange}
              placeholder="date"
              required
            />
            <label htmlFor="name">
              Name
            </label>
            <input
              id="name"
              value={transaction.name}
              type="text"
              onChange={handleTextChange}
              placeholder="name"
              required
            />
    
            <label htmlFor="amount">
              Amount
            </label>
            <input
              id="amount"
              value={transaction.amount}
              type="number"
              onChange={handleTextChange}
              placeholder="amount"
              required
            />
    
            <label htmlFor="from">
              From
            </label>
            <input
              id="from"
              value={transaction.from}
              type="text"
              onChange={handleTextChange}
              placeholder="from"
              required
            />
            <br />
            <button type="submit">
              New Item
            </button>
          </form>
        </div>
      );
    };
    
    export default NewTransactionForm;