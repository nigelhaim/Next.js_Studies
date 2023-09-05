import Image from 'next/image';
import React from 'react';
import { useEffect } from 'react';
import { Database, OPEN_READWRITE } from 'sqlite3';
import fs from 'fs';
import { user } from './models/user';
import dynamic from 'next/dynamic';

function Home(res:any) {
  let result: user[] = res;
  console.log("printing", result);
  return (
  <div>
    <h1>Hello world</h1>
    <h2>This is header 2</h2>
    <h3>Printing name from database { res[1].f_name }</h3>
    <div>
      <table>
      <tr>
        <th>Id</th>
        <th>First name</th>
        <th>Last name</th>
        <th>Role</th>
        <th>Username</th>
        <th>Password</th>
      </tr>
       {
         result.map((res) => (
           <tr key={res.id}>
             <td>{res.id}</td>
             <td>{res.f_name}</td>
             <td>{res.l_name}</td>
             <td>{res.role}</td>
             <td>{res.username}</td>
             <td>{res.password}</td>
           </tr>
         ))
       }
      </table>
    </div>
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

          db.each(`select * from user;`, (err:any,row:any) => {
            
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
  }
return res().then((result) => Home(result))
}
 
export default dynamic (() => Promise.resolve(getUsers), {ssr :false})
