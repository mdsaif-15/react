import './App.css'
import ErrorMassage from './components/errorMessage.jsx'
import FoodItems from './components/ListItems.jsx'
import ListItems from './components/ListItems.jsx'
import Title from './components/title.jsx'

function App() {
  let foodItems = ["Dal", "Green Vegetable", "Roti", "Salad", "Milk", "ghee","mango"];
  return <div>
    <Title />
    <ErrorMassage Items ={foodItems} />
    <ListItems Items={foodItems}/>
  </div>
}
export default App
