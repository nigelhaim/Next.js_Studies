
const sqlite3 = require('sqlite3').verbose();
    const db = new sqlite3.Database('../database.db', sqlite3.OPEN_READWRITE, () => {
      
          console.log("Connected Database");
      });
  let getQuery = `SELECT * FROM user;`;

  db.all(getQuery, [], (err, rows) =>{
    if(err) console.error(err.getMessage);
      console.log(rows);
  })

  db.close()
