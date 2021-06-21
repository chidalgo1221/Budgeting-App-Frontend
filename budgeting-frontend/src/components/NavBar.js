import { NavLink } from "react-router-dom"
import React from 'react';


const NavBar = () => {
    return(
        <header>
            <nav>
                <NavLink to= "/">Home</NavLink>
                <NavLink to= "/transactions" >Transactions</NavLink>
                <NavLink to= "/transactions/new">New Transaction</NavLink>
            </nav>
        </header>
    )
}

export default NavBar;