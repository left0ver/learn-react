interface TodoListItemProps {
    count: number;
}
function TodoListItem (props:TodoListItemProps) {
    return (
        <div>
            count:{props.count}
        </div>
    )
}

export default TodoListItem