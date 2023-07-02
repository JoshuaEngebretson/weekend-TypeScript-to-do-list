import React, { useEffect, useState } from "react";
import axios from "axios";
import { Button } from "@mui/material";
import { TaskItem } from "./TaskItem/TaskItem";

export type Task = {
	assigned_to: string;
	completed: boolean;
	completed_date?: null | string;
	created: string;
	id: number;
	task: string;
	task_note?: string;
};

export const RenderToDoList = () => {
	const [toDoList, setToDoList] = useState<[Task] | []>([]);

	useEffect(() => {
		fetchToDoList();
	}, []);

	const fetchToDoList = async () => {
		const { data: list } = await axios.get("/todo");
		setToDoList(list);
	};

	return (
		<div>
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
