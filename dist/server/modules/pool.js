"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const pg_1 = __importDefault(require("pg"));
let pool;
// When our app is deployed to the internet
// we'll use the DATABASE_URL environment variable
// to set the connection info: web address, username/password, db name
if (process.env.DATABASE_URL) {
    pool = new pg_1.default.Pool({
        connectionString: process.env.DATABASE_URL,
        ssl: {
            rejectUnauthorized: false,
        },
    });
}
// When we're running this app on our own computer
// we'll connect to the postgres database that is
// also running on our computer (localhost)
else {
    pool = new pg_1.default.Pool({
        host: "localhost",
        port: 5432,
        database: "TypeScript-ToDo",
        idleTimeoutMillis: 30000, // 30 seconds before timeout/cancel query
    });
}
exports.default = pool;
