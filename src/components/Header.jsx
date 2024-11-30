const Header = (props) => {
	const { todos } = props;
	const isPlural = todos.length !== 1;

	return (
		<header>
			<h1 className='text-gradient'>
				You have {todos.length} open {isPlural ? 'tasks' : 'task'}.
			</h1>
		</header>
	);
};

export default Header;
