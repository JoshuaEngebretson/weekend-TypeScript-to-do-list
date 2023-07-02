"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
require("./App.css");
// const tasksCompleted =
function App() {
    const [taskInput, setTaskInput] = (0, react_1.useState)("");
    const [assignedToInput, setAssignedToInput] = (0, react_1.useState)("");
    const [taskNoteInput, setTaskNoteInput] = (0, react_1.useState)("");
    return ((0, jsx_runtime_1.jsxs)("div", { className: "App", children: [(0, jsx_runtime_1.jsxs)("header", { className: "App-header", children: [(0, jsx_runtime_1.jsx)("h1", { children: "To-Do List" }), (0, jsx_runtime_1.jsx)("p", { children: "Tasks Completed: " })] }), (0, jsx_runtime_1.jsx)("main", { children: (0, jsx_runtime_1.jsx)("form", { children: (0, jsx_runtime_1.jsxs)("p", { children: [(0, jsx_runtime_1.jsx)("label", { htmlFor: "taskInput", children: "Enter Task" }), (0, jsx_runtime_1.jsx)("input", { id: "taskInput", type: "text", placeholder: "Required", value: taskInput }), (0, jsx_runtime_1.jsx)("br", {}), (0, jsx_runtime_1.jsx)("label", { htmlFor: "taskInput", children: "Assigned To" }), (0, jsx_runtime_1.jsx)("input", { id: "assignedToInput", type: "text", placeholder: "Required", value: assignedToInput }), (0, jsx_runtime_1.jsx)("br", {}), (0, jsx_runtime_1.jsx)("label", { htmlFor: "taskInput", children: "Task Note" }), (0, jsx_runtime_1.jsx)("input", { id: "taskNoteInput", type: "text", placeholder: "Optional", value: taskNoteInput })] }) }) })] }));
}
exports.default = App;
