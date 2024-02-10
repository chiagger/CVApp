import { useState } from 'react'
import '../styles/Editable.css'
import Editable from './Editable';

function OneJob(props) {
    return (
        <div className="onejob">
            <Editable text="Company Name"/>
            <Editable text="Position Title"/>
            <Editable text="Date from and until"/>
            <Editable text="Brief Description"/>
        </div>
    )

}


export default OneJob;