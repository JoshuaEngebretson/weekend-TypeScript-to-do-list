"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const toDoList_router_1 = __importDefault(require("./routes/toDoList.router"));
const app = (0, express_1.default)();
/* Body Parser Middleware */
app.use(body_parser_1.default.json());
app.use(body_parser_1.default.urlencoded({ extended: true }));
/* Routes */
app.use("/toDo", toDoList_router_1.default);
/* Serve Static Files */
app.use(express_1.default.static("build"));
/* App Set */
const PORT = process.env.port || 5000;
/* Listen */
app.listen(PORT, () => {
    console.log(`listening on port: ${PORT}`);
});
