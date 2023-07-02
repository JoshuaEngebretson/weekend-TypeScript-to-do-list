import React, { useEffect, useState } from "react";
import axios from "axios";
import { Button } from "@mui/material";
import { Task } from "../RenderToDoList";

interface taskItemProps {
	task: Task;
	fetchToDoList: () => Promise<void>;
}

export const TaskItem = ({ task, fetchToDoList }: taskItemProps) => {
	const handleComplete = async () => {
		console.log(`clicked Complete Task for ${task.task}`);
		try {
			const completeTask = await axios.put(`/todo/${task.id}`);
			fetchToDoList();
		} catch (error) {
			console.log(`Error completing ${task.task}`);
		}
	};

	const handleDelete = async () => {
		try {
			const deleteTask = await axios.delete(`/todo/${task.id}`);
			fetchToDoList();
		} catch (error) {
			console.log(`Error deleting ${task.task}`);
		}
	};

	const completed: string = task.completed ? "completedTask" : "";

	return (
		<tr key={task.id} className={completed}>
			<td>{task.task}</td>
			<td>{task.task_note}</td>
			<td>{task.assigned_to}</td>
			<td>{task.created}</td>
			{task.completed ? (
				<td>Completed</td>
			) : (
				<td>
					<Button onClick={handleComplete}>Complete Task</Button>
				</td>
			)}
			<td>{task.completed_date}</td>
			<td>
				<Button onClick={handleDelete}>Delete Task</Button>
			</td>
		</tr>
	);
};
