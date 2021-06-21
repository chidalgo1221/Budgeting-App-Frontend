import React from 'react';
import Transactions from "../components/Transactions";

const Index = ({transactions}) => {
    return (
        <div>
            <Transactions transactions={transactions}/>
        </div>
    )
};

export default Index;