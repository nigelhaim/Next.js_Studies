"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sqlite3_1 = require("sqlite3");
// Open a SQLite database, stored in the file db.sqlite 
const db = new sqlite3_1.Database('db.sqlite');
// Fetch a random integer between -99 and +99 (test)
db.get('SELECT RANDOM() % 100 as result', (_, res) => console.log(res));
// Read and execute the SQL query in ../schema.createTable.sql
//db.exec(fs.readFileSync(__dirname + '/schema/createTable.sql').toString());
//db.exec(fs.readFileSync(__dirname + '/schema/insertValues.sql').toString());
console.log("Added Values");
//# sourceMappingURL=sqlite.js.map