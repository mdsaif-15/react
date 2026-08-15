import Item from "./Item";
function FoodItems({ Items }) {
    //let foodItems = [];
    return (
        <ul class="list-group">
            {Items.map(item => <Item foodItems={item} ></Item>)}

        </ul>);
}

export default FoodItems;