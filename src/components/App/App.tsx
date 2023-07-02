import React, { useEffect, useState } from "react";
import "./App.css";

// const tasksCompleted =

function App() {
	const [taskInput, setTaskInput] = useState("");
	const [assignedToInput, setAssignedToInput] = useState("");
	const [taskNoteInput, setTaskNoteInput] = useState("");

	return (
		<div className="App">
			<header className="App-header">
				<h1>To-Do List</h1>
				<p>Tasks Completed: {}</p>
			</header>

			<main>
				<form>
					<p>
						<label htmlFor="taskInput">Enter Task</label>
						<input
							id="taskInput"
							type="text"
							placeholder="Required"
							value={taskInput}
						/>
						<br />
						<label htmlFor="taskInput">Assigned To</label>
						<input
							id="assignedToInput"
							type="text"
							placeholder="Required"
							value={assignedToInput}
						/>
						<br />
						<label htmlFor="taskInput">Task Note</label>
						<input
							id="taskNoteInput"
							type="text"
							placeholder="Optional"
							value={taskNoteInput}
						/>
					</p>
				</form>
			</main>
		</div>
	);
}

export default App;
