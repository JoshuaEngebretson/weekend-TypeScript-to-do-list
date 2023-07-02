import React, { ChangeEvent, FormEvent, useState } from "react";
import { Button, TextField } from "@mui/material";
import axios from "axios";

const defaultTaskInputs = {
	task: "",
	assignedTo: "",
	taskNote: "",
};

interface ToDoListInputsProps {
	fetchToDoList: () => Promise<void>;
}

export const ToDoListInputs = ({
	fetchToDoList,
}: ToDoListInputsProps): JSX.Element => {
	const [taskInputs, setTaskInputs] = useState(defaultTaskInputs);
	const { task, assignedTo, taskNote } = taskInputs;

	const textFieldStyling = {
		margin: 1,
	};

	/**
	 *
	 * @returns Resets the taskInputs to their empty default empty state
	 */
	const resetTaskInputs = () => {
		return setTaskInputs(defaultTaskInputs);
	};

	const handleChange = (
		event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	): void => {
		const { name, value } = event.target;
		// In taskInputs, set the key/value pair where the key is equal to name
		setTaskInputs({ ...taskInputs, [name]: value });
	};

	/**
	 * @param event the submit event from clicking on "Add Task"
	 * @returns
	 *  - If required fields are empty:
	 *      - exits the function.
	 *  - If the required fields are filled in:
	 *      - console logs the taskInputs,
	 *      - then reset the taskInputs.
	 */
	const handleSubmit = async (
		event: FormEvent<HTMLFormElement>
	): Promise<void> => {
		event.preventDefault();
		if (!task || !assignedTo) return; // if required fields are empty, exit the function

		try {
			const res = await axios.post("/todo", taskInputs);
			console.log("res:", res);
			console.log("taskInputs:", taskInputs);
			resetTaskInputs();
			fetchToDoList();
		} catch (error) {
			console.log("Error inside handleSubmit:", error);
		}
	};

	return (
		<div>
			<form onSubmit={handleSubmit}>
				<TextField
					name="task"
					type="text"
					label="Enter Task"
					helperText="Required"
					value={task}
					sx={textFieldStyling}
					onChange={handleChange}
				/>
				<TextField
					name="assignedTo"
					type="text"
					label="Assigned To"
					helperText="Required"
					value={assignedTo}
					sx={textFieldStyling}
					onChange={handleChange}
				/>
				<TextField
					name="taskNote"
					type="text"
					label="Task Note"
					helperText="Optional"
					value={taskNote}
					sx={textFieldStyling}
					onChange={handleChange}
				/>
				<br />
				<Button variant="contained" type="submit">
					Add Task
				</Button>
			</form>
		</div>
	);
};
