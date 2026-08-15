const Item = (props)=>{
    return (<li key={props.foodItems} class="list-group-item active">{props.foodItems}</li>);
}
export default Item;