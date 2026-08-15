import './App.css'
import ErrorMassage from './components/errorMessage.jsx'
import ListItems from './components/ListItems.jsx'
import Title from './components/title.jsx'

function App() {
  //let foodItems = ["Dal", "Green Vegetable", "Roti", "Salad", "Milk", "ghee","mango"];
  return <div>
    <Title />
    <ErrorMassage />
    <ListItems />
  </div>
}
export default App
