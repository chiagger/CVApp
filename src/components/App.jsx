import { useState } from 'react'
import '../styles/App.css'
import Header from './Header'
import General from './General'
import Education from './Education'
import Experience from './Experience'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='app'>
      <Header />
      <div className='content'>
        <General />
        <div className='right'>
          <Education />
          <Experience />
        </div>
      </div>
      
    </div>
  )
}

export default App
