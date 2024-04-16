require("dotenv").config();
const pg = require("pg");

const db = new pg.Pool({
  connectionString: process.env.POSTGRES_URL, // Use the connection URL from your .env file
  ssl: {
    rejectUnauthorized: false, // Only necessary if your PostgreSQL server requires SSL
  },
});

module.exports = db;
