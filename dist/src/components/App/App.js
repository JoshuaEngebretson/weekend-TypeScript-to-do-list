"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
require("./App.css");
const ToDoListInputs_1 = require("../ToDoListInputs/ToDoListInputs");
const ToDoListHeader_1 = require("../ToDoListHeader/ToDoListHeader");
function App() {
    return ((0, jsx_runtime_1.jsxs)("div", { className: "App", children: [(0, jsx_runtime_1.jsx)(ToDoListHeader_1.ToDoListHeader, {}), (0, jsx_runtime_1.jsx)(ToDoListInputs_1.ToDoListInputs, {})] }));
}
exports.default = App;
