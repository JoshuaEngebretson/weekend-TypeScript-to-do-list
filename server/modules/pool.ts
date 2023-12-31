import pg, { Pool, QueryResult } from "pg";
let pool: Pool;

// When our app is deployed to the internet
// we'll use the DATABASE_URL environment variable
// to set the connection info: web address, username/password, db name
if (process.env.DATABASE_URL) {
	pool = new pg.Pool({
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
	pool = new pg.Pool({
		host: "localhost", // where to find the database
		port: 5432, // port for finding the database
		database: "TypeScript-ToDo", // database name
		idleTimeoutMillis: 30000, // 30 seconds before timeout/cancel query
	});
}

export default pool;
