import axios from "axios";
import { useEffect, useState } from "react";
import React from 'react';
import { Link,useHistory, useParams } from "react-router-dom";
import { apiURL } from "../Util/apiURL";
const API = apiURL();

const TransactionDetails = (props) => {
    const { deleteTransaction } = props;
    const [transaction, setTransaction] = useState({});
    let { id } = useParams();
    let history = useHistory();

    useEffect(() => {
        const fetchTransaction = async () => {
          try {
            const res = await axios.get(`${API}/transactions/${id}`);
            setTransaction(res.data);
          } catch (err) {
            console.log(err);
          }
        };
      fetchTransaction();
    }, [id]);
  
    const handleDelete = () => {
      deleteTransaction(id);
      history.push("/transactions");
    };

    return (
        <div>
            <p>From: {transaction.from}</p>
            <p>Name: {transaction.name}</p>
            <p>Amount: {transaction.amount}</p>
            <p>Date: {transaction.date}</p>
          <Link to={`/transactions`}>
          <button>Back</button>
        </Link>
        <Link to={`/transactions/new`}>
          <button>
            Create
          </button>
        </Link>
        <Link to={`/transactions/${id}/edit`}>
          <button>
            Edit
          </button>
        </Link>
        <button
          onClick={handleDelete}
        >
          Delete
        </button>
      </div>
    );
  };
  
  export default TransactionDetails;