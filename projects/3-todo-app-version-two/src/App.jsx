import AppName from './components/AppName'
import AddTodo from './components/AddTodo'
import './App.css'
import TodoItem from './components/TodoItem'
import TodoItems from './components/TodoItems'
function App() {
  const todoItems = [
    {
      name: "Milk",
      dueDate: "4/10/2023"
    },
    {
      name: "Go To collage",
      dueDate: "4/10/2023"
    },
    {
      name: "Bath",
      dueDate: "Today"
    }

  ]

  return (
    <div>
      <center>
        <AppName />
        <AddTodo />
        <TodoItems TodoItems={todoItems} />
      </center>
    </div>
  )
}
export default App