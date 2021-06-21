import React from 'react';
import TransactionDetails from "../components/TransactionDetails";

const Show = ({deleteTransaction}) => {
  return (
    <div>
      <TransactionDetails  deleteTransaction={deleteTransaction}/>
    </div>
  );
};

export default Show;