import React from "react";
import "./App.css";
import { ToDoListInputs } from "../ToDoListInputs/ToDoListInputs";
import { ToDoListHeader } from "../ToDoListHeader/ToDoListHeader";
import { RenderToDoList } from "../RenderToDoList/RenderToDoList";

function App() {
	return (
		<div className="App">
			<ToDoListHeader />
			<ToDoListInputs />
			<RenderToDoList />
		</div>
	);
}

export default App;
