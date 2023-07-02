"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ToDoListHeader = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const ToDoListHeader = ({ tasksTotal, tasksCompleted, }) => {
    return ((0, jsx_runtime_1.jsxs)("header", { className: "App-header", children: [(0, jsx_runtime_1.jsx)("h1", { children: "To-Do List" }), (0, jsx_runtime_1.jsxs)("p", { children: ["Tasks Completed: ", tasksCompleted, " / ", tasksTotal] })] }));
};
exports.ToDoListHeader = ToDoListHeader;
