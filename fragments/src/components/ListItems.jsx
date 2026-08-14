function ListItems() {
    // "Dal", "Green Vegetable", "Roti", "Salad", "Milk", "ghee"
    //let foodItems = [];
    let foodItems = ["Dal", "Green Vegetable", "Roti", "Salad", "Milk", "ghee"];

    if (foodItems.length === 0) {
        return (<p>
            I am still hungry

        </p>
        );
    }
    return (
        <ul class="list-group">
            {foodItems.map(item => <li key={item} class="list-group-item active">{item}</li>)}

        </ul>);
}

export default ListItems;