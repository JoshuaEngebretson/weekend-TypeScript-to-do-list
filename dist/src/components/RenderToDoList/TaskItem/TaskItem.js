"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskItem = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const axios_1 = __importDefault(require("axios"));
const material_1 = require("@mui/material");
const TaskItem = ({ task, fetchToDoList }) => {
    const completeTaskButton = () => {
        const handleComplete = () => {
            console.log(`clicked Complete Task for ${task.task}`);
        };
        if (!task.completed)
            return ((0, jsx_runtime_1.jsx)("th", { children: (0, jsx_runtime_1.jsx)(material_1.Button, { onClick: handleComplete, children: "Complete Task" }) }));
        return (0, jsx_runtime_1.jsx)("th", {});
    };
    const deleteTaskButton = () => {
        const handleDelete = async () => {
            try {
                const deleteTask = await axios_1.default.delete(`/todo/${task.id}`);
                fetchToDoList();
            }
            catch (error) {
                console.log(`Error deleting ${task}`);
            }
        };
        return ((0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)(material_1.Button, { onClick: handleDelete, children: "Delete Task" }) }));
    };
    return ((0, jsx_runtime_1.jsxs)("tr", { children: [(0, jsx_runtime_1.jsx)("td", { children: task.task }), (0, jsx_runtime_1.jsx)("td", { children: task.task_note }), (0, jsx_runtime_1.jsx)("td", { children: task.assigned_to }), (0, jsx_runtime_1.jsx)("td", { children: task.created }), completeTaskButton(), (0, jsx_runtime_1.jsx)("td", { children: task.completed_date }), deleteTaskButton()] }, task.id));
};
exports.TaskItem = TaskItem;
