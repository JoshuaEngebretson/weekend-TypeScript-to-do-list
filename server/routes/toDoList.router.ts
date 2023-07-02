import { Request, Response, Router } from "express";
import pool from "../modules/pool";

interface NewTask {
	task: string;
	taskNote: string;
	assignedTo: string;
}

const toDoListrouter = Router();

// GET
toDoListrouter.get("/", async (req: Request, res: Response) => {
	let sqlText = `
        SELECT * FROM "to_do_list"
        ORDER BY "id";
    `;
	try {
		const { rows: taskList } = await pool.query(sqlText);
		res.send(taskList);
	} catch (dbErr) {
		// Log that there was an issue inside of this function
		console.log("SQL query in GET /toDo failed:", dbErr);
		// Send "Internal Server Error" status to client
		res.sendStatus(500);
	}
}); // End GET

// POST
toDoListrouter.post("/", async (req: Request, res: Response) => {
	let newTask: NewTask = req.body;

	let sqlText = `
        INSERT INTO "to_do_list"
        ("task", "task_note", "assigned_to")
        Values
        ($1, $2, $3);
    `;
	let sqlValues = [newTask.task, newTask.taskNote, newTask.assignedTo];

	try {
		// Send sanitized sql inputs to the database
		const dbRes = await pool.query(sqlText, sqlValues);
		// Send "Created" status to client.js
		res.sendStatus(201);
	} catch (dbErr) {
		// Log the error sent back from SQL database
		console.log("Error adding new task:", dbErr);
		// Send "Internal Server Error" status to client.js
		res.sendStatus(500);
	}
}); // End POST

// PUT
toDoListrouter.put("/:id", async (req: Request, res: Response) => {
	let idToUpdate = req.params.id;

	let sqlText = `
        UPDATE "to_do_list"
        SET "completed"=true, "completed_date"=CURRENT_DATE
        WHERE "id"=$1;
    `;
	let sqlValues = [idToUpdate];

	try {
		// Send sanitized sql inputs to the database
		const dbRes = await pool.query(sqlText, sqlValues);
		// Send "Okay" status to client
		res.sendStatus(200);
	} catch (dbErr) {
		// Log that there was an issue inside of this function
		console.log("SQL query in PUT /toDo/:id failed:", dbErr);
		// Send "Internal Server Error" status to client
		res.sendStatus(500);
	}
}); // End PUT

// DELETE
toDoListrouter.delete("/:id", async (req: Request, res: Response) => {
	let idToDelete = req.params.id;

	let sqlText = `
        DELETE FROM "to_do_list"
        WHERE "id"=$1;
    `;
	let sqlValues = [idToDelete];

	try {
		const dbRes = await pool.query(sqlText, sqlValues);
		// Send "Okay" status to client
		res.sendStatus(200);
	} catch (dbErr) {
		// Log that there was an issue inside of this function
		console.log("SQL query in DELETE /toDo/:id failed:", dbErr);
		// Send "Internal Server Error" status to client
		res.sendStatus(500);
	}
}); // End DELETE

export default toDoListrouter;
