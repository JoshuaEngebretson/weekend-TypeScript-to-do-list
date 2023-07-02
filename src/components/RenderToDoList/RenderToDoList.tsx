import React, { useEffect, useState } from "react";
import axios from "axios";
import { TaskItem } from "./TaskItem/TaskItem";
import "./RenderToDoList.css";
import { ToDoListInputs } from "../ToDoListInputs/ToDoListInputs";

export type Task = {
	assigned_to: string;
	completed: boolean;
	completed_date?: null | string;
	created: string;
	id: number;
	task: string;
	task_note?: string;
};

interface RenderToDoListProps {
	calculateTasksCompleted: () => Promise<void>;
}

export const RenderToDoList = ({
	calculateTasksCompleted,
}: RenderToDoListProps): JSX.Element => {
	const [toDoList, setToDoList] = useState<[Task] | []>([]);

	useEffect(() => {
		fetchToDoList();
	}, []);

	/**
	 * - Fetch the toDoList array from the database
	 * - Then setToDoList with the resulting list
	 */
	const fetchToDoList = async (): Promise<void> => {
		const { data: list } = await axios.get("/todo");
		setToDoList(list);
		calculateTasksCompleted();
	};

	return (
		<div>
			<ToDoListInputs fetchToDoList={fetchToDoList} />
			<table>
				<thead>
					<tr>
						<th>Task</th>
						<th>Task Note</th>
						<th>Assigned To</th>
						<th>Created</th>
						<th>Mark Complete</th>
						<th>Completed Date</th>
						<th>Delete Task</th>
					</tr>
				</thead>
				<tbody>
					{toDoList.map((task) => {
						return (
							<TaskItem
								key={task.id}
								task={task}
								fetchToDoList={fetchToDoList}
							/>
						);
					})}
				</tbody>
			</table>
		</div>
	);
};
