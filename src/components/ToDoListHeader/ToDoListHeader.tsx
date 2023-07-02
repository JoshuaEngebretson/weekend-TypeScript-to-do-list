import React, { useEffect, useState } from "react";
import axios from "axios";

export const ToDoListHeader = (): JSX.Element => {
	const [tasksCompleted, setTasksCompleted] = useState(0);
	const [tasksTotal, setTasksTotal] = useState(0);

	const calculateTasksCompleted = async () => {
		const {
			data: tasks,
		}: {
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
		console.log("tasks:", tasks);
		setTasksTotal(tasks.length);
		const completedTasks = tasks.filter((item) => item.completed);
		setTasksCompleted(completedTasks.length);
	};
	useEffect(() => {
		calculateTasksCompleted();
	}, []);
	return (
		<header className="App-header">
			<h1>To-Do List</h1>
			<p>
				Tasks Completed: {tasksCompleted} / {tasksTotal}
			</p>
		</header>
	);
};
