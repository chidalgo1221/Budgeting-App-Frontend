
import { Link } from "react-router-dom";
import React from 'react';

const Transaction = ({ transaction, id }) => {
  return (
    <li className="details">
     <p>{transaction.date}</p>
          <Link to={`/transactions/${id}`}>{transaction.name}</Link>
        <p>{transaction.amount}</p>
      <hr />
    </li>
  );
};

export default Transaction;