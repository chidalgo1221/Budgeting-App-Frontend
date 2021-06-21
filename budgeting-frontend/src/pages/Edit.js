import editForm from "../components/editForm"
import React from 'react';


const Edit = ({updateTransaction}) => {
    return (
        <section>
            <editForm updateTransaction={updateTransaction} />
        </section>
    )
}

export default Edit