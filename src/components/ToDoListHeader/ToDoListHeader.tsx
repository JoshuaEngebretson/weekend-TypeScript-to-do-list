interface toDoListHeaderProps {
	tasksTotal: number;
	tasksCompleted: number;
}

export const ToDoListHeader = ({
	tasksTotal,
	tasksCompleted,
}: toDoListHeaderProps): JSX.Element => {
	return (
		<header className="App-header">
			<h1>To-Do List</h1>
			<p>
				Tasks Completed: {tasksCompleted} / {tasksTotal}
			</p>
		</header>
	);
};
