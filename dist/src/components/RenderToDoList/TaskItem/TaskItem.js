"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskItem = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const axios_1 = __importDefault(require("axios"));
const material_1 = require("@mui/material");
const DeleteForever_1 = __importDefault(require("@mui/icons-material/DeleteForever"));
const TaskItem = ({ task, fetchToDoList, }) => {
    const { task: activity, task_note, assigned_to, created, completed, completed_date, } = task;
    const handleComplete = async () => {
        try {
            const completeTask = await axios_1.default.put(`/todo/${task.id}`);
            fetchToDoList();
        }
        catch (error) {
            console.log(`Error completing ${task.task}`);
        }
    };
    const handleDelete = async () => {
        try {
            const deleteTask = await axios_1.default.delete(`/todo/${task.id}`);
            fetchToDoList();
        }
        catch (error) {
            console.log(`Error deleting ${task.task}`);
        }
    };
    // If the task is completed, completedClass is equal to "completedTask"
    // Else completedClass is an empty string;
    const completedClass = completed ? "completedTask" : "";
    return ((0, jsx_runtime_1.jsxs)("tr", { className: completedClass, children: [(0, jsx_runtime_1.jsx)("td", { children: activity }), (0, jsx_runtime_1.jsx)("td", { children: task_note }), (0, jsx_runtime_1.jsx)("td", { children: assigned_to }), (0, jsx_runtime_1.jsx)("td", { children: created }), completed ? ((0, jsx_runtime_1.jsx)("td", { children: "Completed" })) : ((0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)(material_1.Button, { onClick: handleComplete, variant: "contained", color: "success", sx: { fontSize: ".7em" }, children: "Complete Task" }) })), (0, jsx_runtime_1.jsx)("td", { children: completed_date }), (0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)(material_1.Button, { onClick: handleDelete, variant: "contained", color: "error", children: (0, jsx_runtime_1.jsx)(DeleteForever_1.default, {}) }) })] }));
};
exports.TaskItem = TaskItem;
