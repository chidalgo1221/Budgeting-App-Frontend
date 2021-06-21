import React from 'react';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.css';
import NavBar from './components/NavBar';
import Edit from './pages/Edit';
import Home from './pages/Home';
import Index from './pages/Index';
import New from './pages/New';
import NotFound from './pages/Notlocated';
import Show from './pages/Show';
import { apiURL } from './Util/apiURL';
const API = apiURL()

const App = () => {
  const [transactions, setTransactions] = useState([])

  const addTransaction = async (newTransaction) => {
    try {
      const res = await axios.post(`${API}/transactions`, newTransaction)
      setTransactions([...transactions, res.data])
    } catch (error) {
      console.log(error);
    }
  }

  const updateTransaction = async (updatedTransaction, index) => {
    try {
      await axios.put(`${API}/transactions/${index}`, updatedTransaction)
      const newTransaction = [...transactions]
      newTransaction[index] = updatedTransaction
      setTransactions(newTransaction)
    } catch (error) {
      console.log(error);
    }
  }

  const deleteTransaction = async (index) => {
    try {
      await axios.delete(`${API}/transactions/${index}`)
      const newTransactions =[...transactions]
      newTransactions.splice(index, 1)
      setTransactions(newTransactions)
    } catch (error) {
      console.log(error);
    }
  }

  const fetchInfo = async () => {
    try {
      const res = await axios.get(`${API}/transactions`)
      setTransactions(res.data)
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchInfo()
  }, [])

  return (
    <main className="App">
      <Router>
      <NavBar/>
      <Switch>
        <Route exact path={"/"} component={Home}/>
        <Route exact path={"/transactions"}>
          <Index transactions={transactions}/>
        </Route>
        <Route exact path={"/transactions/new"}>
          <New addTransaction={addTransaction}/>
        </Route>
        <Route exact path={"/transactions/:index"}>
          <Show deleteTransaction={deleteTransaction}/>
        </Route>
        <Route exact path={"/transactions/:index/edit"}>
          <Edit updateTransaction={updateTransaction}/>
        </Route>
        <Route path="*">
          <NotFound/>
        </Route>
      </Switch>
      </Router>
    </main>
  );
}

export default App;