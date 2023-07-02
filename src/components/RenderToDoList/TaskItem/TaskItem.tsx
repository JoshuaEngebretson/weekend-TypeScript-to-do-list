import React, { useEffect, useState } from "react";
import axios from "axios";
import { Button } from "@mui/material";
import { Task } from "../RenderToDoList";

interface taskItemProps {
	task: Task;
	fetchToDoList: () => Promise<void>;
}

export const TaskItem = ({ task, fetchToDoList }: taskItemProps) => {
	const completeTaskButton = () => {
		const handleComplete = () => {
			console.log(`clicked Complete Task for ${task.task}`);
		};

		if (!task.completed)
			return (
				<th>
					<Button onClick={handleComplete}>Complete Task</Button>
				</th>
			);
		return <th></th>;
	};
	const deleteTaskButton = () => {
		const handleDelete = async () => {
			try {
				const deleteTask = await axios.delete(`/todo/${task.id}`);
				fetchToDoList();
			} catch (error) {
				console.log(`Error deleting ${task}`);
			}
		};

		return (
			<td>
				<Button onClick={handleDelete}>Delete Task</Button>
			</td>
		);
	};

	return (
		<tr key={task.id}>
			<td>{task.task}</td>
			<td>{task.task_note}</td>
			<td>{task.assigned_to}</td>
			<td>{task.created}</td>
			{completeTaskButton()}
			<td>{task.completed_date}</td>
			{deleteTaskButton()}
		</tr>
	);
};
