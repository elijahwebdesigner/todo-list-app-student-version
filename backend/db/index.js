const { Pool } = require("pg");
const fs = require("fs");
const path = require("path");
require("dotenv").config();

//i belive this is a code to bring files to this program 

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: { rejectUnauthorized: false },
});

//this is to read the files of whatever is brung 

const schemaPath = path.join(__dirname, "schema.sql");
const schema = fs.readFileSync(schemaPath, "utf8");

//i dont know what schema is but i think its to read the files? 
(async () => {
  try {
    await pool.query(schema);
    console.log("✅ Tables ensured from schema.sql");
  } catch (err) {
    console.error("❌ Failed to run schema.sql:", err);
  }
  //this sends a error code if someone cant accsess it 
})();

module.exports = pool;
//exports it?
