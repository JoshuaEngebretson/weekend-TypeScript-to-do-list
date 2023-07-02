"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RenderToDoList = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const axios_1 = __importDefault(require("axios"));
const TaskItem_1 = require("./TaskItem/TaskItem");
require("./RenderToDoList.css");
const RenderToDoList = () => {
    const [toDoList, setToDoList] = (0, react_1.useState)([]);
    (0, react_1.useEffect)(() => {
        fetchToDoList();
    }, []);
    const fetchToDoList = async () => {
        const { data: list } = await axios_1.default.get("/todo");
        setToDoList(list);
    };
    return ((0, jsx_runtime_1.jsx)("div", { children: (0, jsx_runtime_1.jsxs)("table", { children: [(0, jsx_runtime_1.jsx)("thead", { children: (0, jsx_runtime_1.jsxs)("tr", { children: [(0, jsx_runtime_1.jsx)("th", { children: "Task" }), (0, jsx_runtime_1.jsx)("th", { children: "Task Note" }), (0, jsx_runtime_1.jsx)("th", { children: "Assigned To" }), (0, jsx_runtime_1.jsx)("th", { children: "Created" }), (0, jsx_runtime_1.jsx)("th", { children: "Mark Complete" }), (0, jsx_runtime_1.jsx)("th", { children: "Completed Date" }), (0, jsx_runtime_1.jsx)("th", { children: "Delete Task" })] }) }), (0, jsx_runtime_1.jsx)("tbody", { children: toDoList.map((task) => {
                        return ((0, jsx_runtime_1.jsx)(TaskItem_1.TaskItem, { task: task, fetchToDoList: fetchToDoList }, task.id));
                    }) })] }) }));
};
exports.RenderToDoList = RenderToDoList;
