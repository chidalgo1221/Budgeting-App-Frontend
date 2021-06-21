import Transaction from "./Transaction"
import React from 'react';

const Transactions = ({transactions}) => {
    let total = 0 
    transactions.forEach(transaction => total += Number(transaction.amount))
    return (
        <div>
            <h1>Bank Account Total: {total}</h1>
            <ul>
                {transactions.map((transaction, id) => {
                    return <Transaction key={id} id={id} transaction={transaction}/>
                })}
            </ul>
        </div>
    )
}

export default Transactions