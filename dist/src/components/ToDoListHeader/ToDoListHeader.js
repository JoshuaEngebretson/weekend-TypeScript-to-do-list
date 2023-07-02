"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ToDoListHeader = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const axios_1 = __importDefault(require("axios"));
const ToDoListHeader = () => {
    const [tasksCompleted, setTasksCompleted] = (0, react_1.useState)(0);
    const [tasksTotal, setTasksTotal] = (0, react_1.useState)(0);
    const calculateTasksCompleted = async () => {
        const { data: tasks, } = await axios_1.default.get("/todo");
        console.log("tasks:", tasks);
        setTasksTotal(tasks.length);
        const completedTasks = tasks.filter((item) => item.completed);
        setTasksCompleted(completedTasks.length);
    };
    (0, react_1.useEffect)(() => {
        calculateTasksCompleted();
    }, []);
    return ((0, jsx_runtime_1.jsxs)("header", { className: "App-header", children: [(0, jsx_runtime_1.jsx)("h1", { children: "To-Do List" }), (0, jsx_runtime_1.jsxs)("p", { children: ["Tasks Completed: ", tasksCompleted, " / ", tasksTotal] })] }));
};
exports.ToDoListHeader = ToDoListHeader;
