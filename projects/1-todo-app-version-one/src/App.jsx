import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'


function App() {
  const [count, setCount] = useState(0)

  return (
    <center>
      <h1>Todo App</h1>
      <div class="row">
        <div class="col-6">
          <input type="text" placeholder='Enter todo here' />
        </div>
        <div class="col-4">
          <input type="date" />
        </div>
        <div class="col-2">
          <button type="button" class="btn btn-success">Add</button>
        </div>
      </div>
    </center>
  )
}

export default App
