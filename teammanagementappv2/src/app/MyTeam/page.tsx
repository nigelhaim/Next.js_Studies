import Image from 'next/image';
import React from 'react';
import { Database, OPEN_READWRITE } from 'sqlite3';
import fs from 'fs';
import { user } from '../models/user';
import dynamic from 'next/dynamic';
function Home(res:any) {
  let result: user[] = res;
  console.log("printing", result);
  return (
      <div>
        <h1>My Team</h1>
          <button id="showForm">Add a member</button>
          <div className="add_Employee">
            <form className="InputForm">
              <input name="FirstName" className="infoInput" />
              <br />
              <br />
              <input name="LastName" className="infoInput" />
              <br />
              <br />
              <select name="Role" className="infoSelect">
                <option>Leader</option>
                <option>Employee</option>
              </select>
              <br />
              <br />
              <input type="submit" value="Add Employee" />
            </form> 
          </div>
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
             <td>{ checkLeader(res) }</td>
             <td>{res.username}</td>
             <td>{res.password}</td>
           </tr>
         ))
       }
      </table>
    <script>console.log("Testgin");</script>
    </div>
  )
}
function checkLeader(res){
    let role = '';
    if(res.role == false){
       role = "Employee";
    }
    else{
      role = "Leader";
    }
    return role;
}
function getUsers(){

  const db = new Database('./src/app/database.db', OPEN_READWRITE, (err) => {
        if (err) return console.log(err.message)
        else{
          console.log("Connected Database");
        }
      });
  let getQuery = 'SELECT * FROM user;';
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
return res().then((result) => Home(result))
}
 
export default dynamic (() => Promise.resolve(getUsers), {ssr :false})
