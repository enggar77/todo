const Tabs = (props) => {
	const tabs = ['All', 'Open', 'Completed'];
	const { todos, selectedTab, setSelectedTab } = props;

	return (
		<nav className='tab-container'>
			{tabs.map((tab, tabIndex) => {
				let numOfTask = 0;
				switch (tab) {
					case 'All':
						numOfTask = todos.length;
						break;
					case 'Open':
						numOfTask = todos.filter((todo) => !todo.complete).length;
						break;
					case 'Completed':
						numOfTask = todos.filter((todo) => todo.complete).length;
				}

				return (
					<button
						className={'tab-button ' + (tab === selectedTab ? ' tab-selected' : '')}
						key={tabIndex}
						onClick={() => setSelectedTab(tab)}
					>
						<h4>
							{tab}
							<span>&nbsp;({numOfTask})</span>
						</h4>
					</button>
				);
			})}
			<hr />
		</nav>
	);
};

export default Tabs;
