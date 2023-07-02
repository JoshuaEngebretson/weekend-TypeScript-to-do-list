import React, { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";
import { ToDoListHeader } from "../ToDoListHeader/ToDoListHeader";
import { RenderToDoList } from "../RenderToDoList/RenderToDoList";

function App() {
	const [tasksCompleted, setTasksCompleted] = useState(0);
	const [tasksTotal, setTasksTotal] = useState(0);

	useEffect(() => {
		calculateTasksCompleted();
	}, []);

	const calculateTasksCompleted = async (): Promise<void> => {
		const {
			data: tasks,
		}: {
			// data has the following types
			data: [
				{
					assigned_to: string;
					completed: boolean;
					completed_date?: null | string;
					created: string;
					id: number;
					task: string;
					task_note?: string;
				}
			];
		} = await axios.get("/todo");
		setTasksTotal(tasks.length);
		const completedTasks = tasks.filter((item) => item.completed);
		setTasksCompleted(completedTasks.length);
	};

	return (
		<div className="App">
			<ToDoListHeader
				tasksTotal={tasksTotal}
				tasksCompleted={tasksCompleted}
			/>
			<RenderToDoList calculateTasksCompleted={calculateTasksCompleted} />
		</div>
	);
}

export default App;
