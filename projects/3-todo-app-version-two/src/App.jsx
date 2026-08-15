import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import AppName from './components/AppName'
import AddName from './components/AddName'
import ItemOne from './components/ItemOne'
import Itemtwo from './components/ItemTwo'
import './App.css'
function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <center>
        <AppName />
        <AddName />
        <div className='Items-container'>
          <ItemOne />
          <Itemtwo />
        </div>
      </center>
    </div>
  )
}
export default App