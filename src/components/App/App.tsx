import React from "react";
import "./App.css";
import { ToDoListInputs } from "../ToDoListInputs/ToDoListInputs";
import { ToDoListHeader } from "../ToDoListHeader/ToDoListHeader";

function App() {
	return (
		<div className="App">
			<ToDoListHeader />

			<ToDoListInputs />
		</div>
	);
}

export default App;
