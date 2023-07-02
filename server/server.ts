import express, { Express, Request, Response } from "express";
import bodyParser from "body-parser";
import toDoListrouter from "./routes/toDoList.router";

const app: Express = express();

/* Body Parser Middleware */
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

/* Routes */
app.use("/toDo", toDoListrouter);

/* Serve Static Files */
app.use(express.static("build"));

/* App Set */
const PORT = process.env.port || 5000;

/* Listen */
app.listen(PORT, () => {
	console.log(`listening on port: ${PORT}`);
});
