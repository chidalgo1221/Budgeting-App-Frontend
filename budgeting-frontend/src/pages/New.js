import React from 'react';
import NewTransaction from "../components/NewTransaction";

const New = ({addTransaction}) =>{
    return(
        <div>
            <NewTransaction addTransaction={addTransaction}/>
        </div>
    );
};

export default New;