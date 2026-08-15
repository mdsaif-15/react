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
    },
    {
      name: "Dring",
      dueDate: "4/10/2024"
    },
    {
      name :"Eat food",
      dueDate : "5/10/2024"
    },
    {
      name :"go to home",
      dueDate :"5/10/2024"
    },
    {
      name :"study",
      dueDate : "5/10/2024"
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