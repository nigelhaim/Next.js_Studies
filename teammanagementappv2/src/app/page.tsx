import Image from 'next/image';
import React from 'react';
import { Database, OPEN_READWRITE} from 'sqlite3';
import fs from 'fs';
  const db = new Database('./database.db', OPEN_READWRITE, (err) => {
        if (err) return console.log(err.message);
        else{
          console.log("Connected Database");
        }
      });
  let getQuery = `SELECT * FROM task`;
  db.all(getQuery, [], (err, rows) => {
    if (err){
       console.log(err.message);
    };
    /*rows.forEach((row) => {
      console.log(row);
    });*/
    console.log(rows);
  })
export default function Home() {
  return (
  <div>
    <h1>Hello world</h1>
    <h2>This is header 2</h2>
  </div>
  )
}
