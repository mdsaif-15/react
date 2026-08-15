import Item from "./Item";
function FoodItems() {
    //let foodItems = [];
    let foodItems = ["Dal", "Green Vegetable", "Roti", "Salad", "Milk", "ghee","mango"];
    return (
        <ul class="list-group">
            {foodItems.map(item => <Item foodItems={item} ></Item>)}

        </ul>);
}

export default FoodItems;