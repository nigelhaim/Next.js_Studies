import Image from 'next/image';
import React from 'react';
import { Database, OPEN_READWRITE, getValues } from 'sqlite3';
import fs from 'fs';
/*
  const db = new Database('./database.db', OPEN_READWRITE, (err) => {
        if (err) return console.log(err.message);``
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
    });
    console.log(rows);
  })*/
function Home({ results }) {
  //const res = getServerSideProps();
  const res = { results };
  console.log("Printing results");
  console.log(res);
  return (
  <div>
    <h1>Hello world</h1>
    <h2>This is header 2</h2>
    res.forEach(element => {
     console.log(element.id); 
    });
  </div>
  )
}
const db = new Database('./src/app/database.db', OPEN_READWRITE, null);
  let getQuery = 'SELECT * FROM user';
export async function getServerSideProps(){
  console.log("Getting data from the database")
    const results = new Promise((req,res) => {
      try{
        db.all(getQuery, (err, rows) => {
          if(rows) res(rows);
          else{
            console.log(err);
            return "Error";
          }
        });
      }catch(error){
        console.log(`Error: ${error}`);
      }
      setTimeout(()=>{
            res("Error");
          },300);
    });
    results.catch((err) => {
          console.log(err);
        })
    return { props : { results:results }}
  }
getServerSideProps();
export default Home
