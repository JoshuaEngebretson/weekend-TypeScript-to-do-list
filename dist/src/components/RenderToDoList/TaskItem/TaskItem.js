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
    const handleComplete = async () => {
        console.log(`clicked Complete Task for ${task.task}`);
        try {
            const completeTask = await axios_1.default.put(`/todo/${task.id}`);
            fetchToDoList();
        }
        catch (error) {
            console.log(`Error completing ${task.task}`);
        }
    };
    const deleteTaskButton = () => {
        const handleDelete = async () => {
            try {
                const deleteTask = await axios_1.default.delete(`/todo/${task.id}`);
                fetchToDoList();
            }
            catch (error) {
                console.log(`Error deleting ${task.task}`);
            }
        };
        return ((0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)(material_1.Button, { onClick: handleDelete, children: "Delete Task" }) }));
    };
    return ((0, jsx_runtime_1.jsxs)("tr", { children: [(0, jsx_runtime_1.jsx)("td", { children: task.task }), (0, jsx_runtime_1.jsx)("td", { children: task.task_note }), (0, jsx_runtime_1.jsx)("td", { children: task.assigned_to }), (0, jsx_runtime_1.jsx)("td", { children: task.created }), task.completed ? ((0, jsx_runtime_1.jsx)("td", { children: "Completed" })) : ((0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)(material_1.Button, { onClick: handleComplete, children: "Complete Task" }) })), (0, jsx_runtime_1.jsx)("td", { children: task.completed_date }), deleteTaskButton()] }, task.id));
};
exports.TaskItem = TaskItem;
