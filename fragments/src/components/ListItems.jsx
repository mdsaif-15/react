function ListItems() {
    let foodItems = ["Dal", "Green Vegetable", "Roti", "Salad", "Milk", "ghee"];
    return (
        <ul class="list-group">
            {foodItems.map(item => <li class="list-group-item active">{item}</li>)}

        </ul>);
}

export default ListItems;