"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ToDoListInputs = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const material_1 = require("@mui/material");
const axios_1 = __importDefault(require("axios"));
const defaultTaskInputs = {
    task: "",
    assignedTo: "",
    taskNote: "",
};
const ToDoListInputs = () => {
    const [taskInputs, setTaskInputs] = (0, react_1.useState)(defaultTaskInputs);
    const { task, assignedTo, taskNote } = taskInputs;
    const textFieldStyling = {
        margin: 1,
    };
    /**
     *
     * @returns Resets the taskInputs to their empty default empty state
     */
    const resetTaskInputs = () => {
        return setTaskInputs(defaultTaskInputs);
    };
    const handleChange = (event) => {
        const { name, value } = event.target;
        // In taskInputs, set the key/value pair where the key is equal to name
        setTaskInputs({ ...taskInputs, [name]: value });
    };
    /**
     * @param event the submit event from clicking on "Add Task"
     * @returns
     *  - If required fields are empty:
     *      - exits the function.
     *  - If the required fields are filled in:
     *      - console logs the taskInputs,
     *      - then reset the taskInputs.
     */
    const handleSubmit = async (event) => {
        event.preventDefault();
        if (!task || !assignedTo)
            return; // if required fields are empty, exit the function
        try {
            const res = await axios_1.default.post("/todo", taskInputs);
            console.log("res:", res);
            console.log("taskInputs:", taskInputs);
            resetTaskInputs();
        }
        catch (error) {
            console.log("Error inside handleSubmit:", error);
        }
    };
    return ((0, jsx_runtime_1.jsx)("main", { children: (0, jsx_runtime_1.jsxs)("form", { onSubmit: handleSubmit, children: [(0, jsx_runtime_1.jsx)(material_1.TextField, { name: "task", type: "text", label: "Enter Task", helperText: "Required", value: task, sx: textFieldStyling, onChange: handleChange }), (0, jsx_runtime_1.jsx)(material_1.TextField, { name: "assignedTo", type: "text", label: "Assigned To", helperText: "Required", value: assignedTo, sx: textFieldStyling, onChange: handleChange }), (0, jsx_runtime_1.jsx)(material_1.TextField, { name: "taskNote", type: "text", label: "Task Note", helperText: "Optional", value: taskNote, sx: textFieldStyling, onChange: handleChange }), (0, jsx_runtime_1.jsx)("br", {}), (0, jsx_runtime_1.jsx)(material_1.Button, { variant: "contained", type: "submit", children: "Add Task" })] }) }));
};
exports.ToDoListInputs = ToDoListInputs;
