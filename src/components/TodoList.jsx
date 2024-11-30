import TodoCard from './TodoCard';

const TodoList = (props) => {
	const { todos, selectedTab, handleDeleteTodo, handleCompleteTodo } = props;

	let filteredTodo;
	switch (selectedTab) {
		case 'All':
			filteredTodo = todos;
			break;
		case 'Completed':
			filteredTodo = todos.filter((todo) => todo.complete === true);
			break;
		case 'Open':
			filteredTodo = todos.filter((todo) => todo.complete === false);
	}

	return (
		<>
			{filteredTodo.map((todo, todoIndex) => {
				return (
					<TodoCard
						key={todoIndex}
						todo={todo}
						todoIndex={todos.findIndex((val) => val.input === todo.input)}
						handleDeleteTodo={handleDeleteTodo}
						handleCompleteTodo={handleCompleteTodo}
					/>
				);
			})}
		</>
	);
};

export default TodoList;
