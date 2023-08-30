import Image from 'next/image';
import React from 'react';
import { Database, OPEN_READWRITE, getValues } from 'sqlite3';
import fs from 'fs';

  const db = new Database('./src/app/database.db', OPEN_READWRITE, (err) => {
        if (err) return console.log(err.message)
        else{
          console.log("Connected Database");
        }
      });
  let getQuery = 'SELECT * FROM user';
const res = [];
db.all(getQuery, [], (err, rows) => {
       if(err) return console.error(err.message);
       rows.forEach(row => {
              console.log("pushing");
             res[row.id-1] = row;
           })
});
function Home() {
  console.log("printing", res);
  return (
  <div>
    <h1>Hello world</h1>
    <h2>This is header 2</h2>
    <h3>{ res }</h3> 
  </div>
  )
}
 
export default Home
