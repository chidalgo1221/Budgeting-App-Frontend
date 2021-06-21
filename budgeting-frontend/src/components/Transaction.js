
import { Link } from "react-router-dom";
import React from 'react';

const Transaction = ({ transaction, id }) => {
  return (
    <li>
      <div className="list">
        <div>
          <p className="date">{transaction.date}</p>
          <Link to={`/transactions/${id}`}>{transaction.name}</Link>
        </div>
        <p>{transaction.amount}</p>
      </div>
      <hr />
    </li>
  );
};

export default Transaction;