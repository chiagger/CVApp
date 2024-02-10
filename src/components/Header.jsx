import { useState } from 'react'
import '../styles/Header.css'
import Editable from './Editable'

function Header() {
    const [count, setCount] = useState(0)
  
    return (
      <div className="header">
       <Editable text="Your Name"/>
       <Editable text="Your Job"/>
      </div>
    )
  }
  
export default Header
  