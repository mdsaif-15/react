import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import AppName from './components/AppName'
import AddName from './components/AddName'
import ItemOne from './components/ItemOne'
import Itemtwo from './components/ItemTwo'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <center>
        <AppName />
        <AddName />
        <ItemOne />
        <Itemtwo />
      </center>
    </div>
  )
}
export default App