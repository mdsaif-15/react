import style from "./todoItems.module.css"
import TodoItem from "./TodoItem";
const TodoItems = (props) => {
    console.log(props)
    return (<>
        <div className={style.itemsContainer}>
            {props.TodoItems.map((item) => < TodoItem todoName={item.name} todoDate={item.dueDate} />)}
        </div>
    </>);
}
export default TodoItems;