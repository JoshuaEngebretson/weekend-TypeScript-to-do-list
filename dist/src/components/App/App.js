"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const axios_1 = __importDefault(require("axios"));
require("./App.css");
const ToDoListHeader_1 = require("../ToDoListHeader/ToDoListHeader");
const RenderToDoList_1 = require("../RenderToDoList/RenderToDoList");
function App() {
    const [tasksCompleted, setTasksCompleted] = (0, react_1.useState)(0);
    const [tasksTotal, setTasksTotal] = (0, react_1.useState)(0);
    (0, react_1.useEffect)(() => {
        calculateTasksCompleted();
    }, []);
    const calculateTasksCompleted = async () => {
        const { data: tasks, } = await axios_1.default.get("/todo");
        setTasksTotal(tasks.length);
        const completedTasks = tasks.filter((item) => item.completed);
        setTasksCompleted(completedTasks.length);
    };
    return ((0, jsx_runtime_1.jsxs)("div", { className: "App", children: [(0, jsx_runtime_1.jsx)(ToDoListHeader_1.ToDoListHeader, { tasksTotal: tasksTotal, tasksCompleted: tasksCompleted }), (0, jsx_runtime_1.jsx)(RenderToDoList_1.RenderToDoList, { calculateTasksCompleted: calculateTasksCompleted })] }));
}
exports.default = App;
