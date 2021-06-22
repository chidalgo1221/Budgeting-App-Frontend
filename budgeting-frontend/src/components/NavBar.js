import { NavLink } from "react-router-dom"
import React from 'react';


const NavBar = () => {
    return(
        <header>
            <nav>
                <NavLink to= "/" className="home">Home</NavLink>
                <NavLink to= "/transactions" className="transact">Transactions</NavLink>
                <NavLink to= "/transactions/new" className="newtransact">New Transaction</NavLink>
            </nav>
        </header>
    )
}

export default NavBar;