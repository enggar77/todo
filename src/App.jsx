import { useEffect, useState } from 'react';
import Header from './components/Header';
import Tabs from './components/Tabs';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';

function App() {
	const [todos, setTodos] = useState([
		{
			input: 'Hello! Add your first todo!',
			complete: true,
		},
	]);

	const [selectedTab, setSelectedTab] = useState('All');

	const handleAddTodo = (newTodo) => {
		const newTodoList = [
			...todos,
			{
				input: newTodo,
				complete: false,
			},
		];
		setTodos(newTodoList);
		handleSaveData(newTodoList);
	};

	const handleDeleteTodo = (index) => {
		let newTodoList = todos.filter((todo, todoIndex) => todoIndex !== index);
		setTodos(newTodoList);
		handleSaveData(newTodoList);
	};

	const handleCompleteTodo = (index) => {
		let newTodoList = [...todos];
		let completedTodo = todos[index];
		completedTodo.complete = true;
		setTodos(newTodoList);
		handleSaveData(newTodoList);
	};

	const handleSaveData = (currentTodos) => {
		localStorage.setItem('todo-app', JSON.stringify({ todos: currentTodos }));
	};

	useEffect(() => {
		if (!localStorage || !localStorage.getItem('todo-app')) {
			return;
		} else {
			let db = JSON.parse(localStorage.getItem('todo-app'));
			setTodos(db.todos);
		}
	}, []);

	return (
		<>
			<Header todos={todos} />
			<Tabs todos={todos} selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
			<TodoList
				selectedTab={selectedTab}
				todos={todos}
				handleDeleteTodo={handleDeleteTodo}
				handleCompleteTodo={handleCompleteTodo}
			/>
			<TodoInput handleAddTodo={handleAddTodo} />
		</>
	);
}

export default App;
