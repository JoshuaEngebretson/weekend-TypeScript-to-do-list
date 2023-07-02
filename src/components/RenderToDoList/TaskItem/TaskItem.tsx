import React from "react";
import axios from "axios";
import { Button } from "@mui/material";
import { Task } from "../RenderToDoList";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";

interface taskItemProps {
	task: Task;
	fetchToDoList: () => Promise<void>;
}

export const TaskItem = ({
	task,
	fetchToDoList,
}: taskItemProps): JSX.Element => {
	const {
		task: activity,
		task_note,
		assigned_to,
		created,
		completed,
		completed_date,
	} = task;

	const handleComplete = async (): Promise<void> => {
		try {
			const completeTask = await axios.put(`/todo/${task.id}`);
			fetchToDoList();
		} catch (error) {
			console.log(`Error completing ${task.task}`);
		}
	};

	const handleDelete = async (): Promise<void> => {
		try {
			const deleteTask = await axios.delete(`/todo/${task.id}`);
			fetchToDoList();
		} catch (error) {
			console.log(`Error deleting ${task.task}`);
		}
	};

	// If the task is completed, completedClass is equal to "completedTask"
	// Else completedClass is an empty string;
	const completedClass: string = completed ? "completedTask" : "";

	return (
		<tr className={completedClass}>
			<td>{activity}</td>
			<td>{task_note}</td>
			<td>{assigned_to}</td>
			<td>{created}</td>
			{/* If the task has been completed, render a td element that states Completed */}
			{/* Else render a Complete Task button */}
			{completed ? (
				<td>Completed</td>
			) : (
				<td>
					<Button
						onClick={handleComplete}
						variant="contained"
						color="success"
						sx={{ fontSize: ".7em" }}
					>
						Complete Task
					</Button>
				</td>
			)}
			<td>{completed_date}</td>
			<td>
				<Button
					onClick={handleDelete}
					variant="contained"
					color="error"
				>
					<DeleteForeverIcon />
				</Button>
			</td>
		</tr>
	);
};
