import { useState } from 'react'
import '../styles/General.css'
import Editable from './Editable';

function General(props) {

    return (
        <div className="general">
            <div className='title'>About Me</div>

            <Editable text="Email" />
            <Editable text="Phone number" />
            <Editable text="Description" />
            <Editable text="Interests" />
        </div>
    )
}


export default General;