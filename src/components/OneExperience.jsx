import { useState } from 'react'
import '../styles/Editable.css'
import Editable from './Editable';

function OneExperience(props) {
    return (
        <div className="oneexperience">
            <Editable text="School name"/>
            <Editable text="Title of Study"/>
            <Editable text="Date of study"/>
            <Editable text="Brief Description"/>
        </div>
    )

}


export default OneExperience;