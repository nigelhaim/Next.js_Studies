import Image from 'next/image';
import React from 'react';
import { Database, OPEN_READWRITE } from 'sqlite3';
import fs from 'fs';
import { user } from './models/user';
function Home(res) {
  let result: user[] = res;
  console.log("printing", result);
  return (
  <div>
    <h1>Hello world</h1>
    <h2>This is header 2</h2>
  </div>
  )
}
function getUsers(){

  const db = new Database('./src/app/database.db', OPEN_READWRITE, (err) => {
        if (err) return console.log(err.message)
        else{
          console.log("Connected Database");
        }
      });
  let getQuery = 'SELECT * FROM user;';
/*const res: user[] = [];
  db.all(getQuery, [], (err, rows) => {
       if(err) return console.error(err.message);
       rows.forEach(row => {
          let leader = false; 
          if(row.leader.toString() == "1"){
            leader = true;
          }
            let u = new user(Number(row.id), row.f_name.toString(), row.l_name.toString(), leader, row.username.toString(), row.password.toString());  
            res.push(u);
          //console.log("Pushing", u);
          //res.push(u(row.id, row.f_name, row.l_name, row.leader, row.username, row.password));
       })
  console.log("Returning ", res)
  });*/
  const res = () => {
    return new Promise((resolve, reject) => {
          let result : user []  = []; 
          try{

          db.each(`select * from user;`, (err,row) => {
            
                if(err){ console.log(err)}
                let leader = false;
                if(row.leader.toString() == "1"){
                  leader = true;
                }
                let u = new user(Number(row.id), row.f_name.toString(), row.l_name.toString(), leader, row.username.toString(), row.password.toString());  
                result.push(u)
                console.log("pushing", u)
              }, () => {
                resolve(result)
              })
          }
          catch(error){
            console.log(error);
          }
        })
    console.log(result)
  }
return res().then((result) => Home(result))
}
 
export default getUsers
