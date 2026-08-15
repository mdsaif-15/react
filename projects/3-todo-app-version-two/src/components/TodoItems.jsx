import TodoItem from "./TodoItem";
const TodoItems = ({ TodoItems }) => {
    return (<>
        <div className='Items-container'>
            {TodoItems.map((item) => <TodoItem todoName={item.name} todoDate={item.dueDate} />)}
        </div>
    </>);
}
export default TodoItems;