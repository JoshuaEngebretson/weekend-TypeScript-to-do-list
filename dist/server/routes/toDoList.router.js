"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const pool_1 = __importDefault(require("../modules/pool"));
const toDoListrouter = (0, express_1.Router)();
// GET
toDoListrouter.get("/", async (req, res) => {
    let sqlText = `
        SELECT * FROM "to_do_list"
        ORDER BY "id";
    `;
    try {
        const { rows: taskList } = await pool_1.default.query(sqlText);
        res.send(taskList);
    }
    catch (dbErr) {
        // Log that there was an issue inside of this function
        console.log("SQL query in GET /toDo failed:", dbErr);
        // Send "Internal Server Error" status to client
        res.sendStatus(500);
    }
}); // End GET
// POST
toDoListrouter.post("/", async (req, res) => {
    let newTask = req.body;
    let sqlText = `
        INSERT INTO "to_do_list"
        ("task", "task_note", "assigned_to")
        Values
        ($1, $2, $3);
    `;
    let sqlValues = [newTask.task, newTask.taskNote, newTask.assignedTo];
    try {
        // Send sanitized sql inputs to the database
        const dbRes = await pool_1.default.query(sqlText, sqlValues);
        // Send "Created" status to client.js
        res.sendStatus(201);
    }
    catch (dbErr) {
        // Log the error sent back from SQL database
        console.log("Error adding new task:", dbErr);
        // Send "Internal Server Error" status to client.js
        res.sendStatus(500);
    }
}); // End POST
// PUT
toDoListrouter.put("/:id", async (req, res) => {
    let idToUpdate = req.params.id;
    let sqlText = `
        UPDATE "to_do_list"
        SET "completed"=true, "completed_date"=CURRENT_DATE
        WHERE "id"=$1;
    `;
    let sqlValues = [idToUpdate];
    try {
        // Send sanitized sql inputs to the database
        const dbRes = await pool_1.default.query(sqlText, sqlValues);
        // Send "Okay" status to client
        res.sendStatus(200);
    }
    catch (dbErr) {
        // Log that there was an issue inside of this function
        console.log("SQL query in PUT /toDo/:id failed:", dbErr);
        // Send "Internal Server Error" status to client
        res.sendStatus(500);
    }
}); // End PUT
// DELETE
toDoListrouter.delete("/:id", async (req, res) => {
    let idToDelete = req.params.id;
    let sqlText = `
        DELETE FROM "to_do_list"
        WHERE "id"=$1;
    `;
    let sqlValues = [idToDelete];
    try {
        const dbRes = await pool_1.default.query(sqlText, sqlValues);
        // Send "Okay" status to client
        res.sendStatus(200);
    }
    catch (dbErr) {
        // Log that there was an issue inside of this function
        console.log("SQL query in DELETE /toDo/:id failed:", dbErr);
        // Send "Internal Server Error" status to client
        res.sendStatus(500);
    }
}); // End DELETE
exports.default = toDoListrouter;
