
const sqlite3 = require('sqlite3').verbose();
    const db = new sqlite3.Database('../database.db', sqlite3.OPEN_READWRITE, () => {
      
          console.log("Connected Database");
      });
/*
  let getQuery = `SELECT * FROM user;`;
  db.all(getQuery, [], (err, rows) =>{
    if(err) console.error(err.getMessage);
    rows.forEach((row) => {
      console.log(row);
    })
  })
*/
let dateIn = new Date();
let dateOut = new Date();
let getQuery = `SELECT * FROM shift`;
db.all(getQuery, [], (err,rows) => {
  if(err) console.error(err.getMessage);
  rows.forEach((row) => {
    console.log(row);
    let sallary = 0;
    let Hours;
    let Mins; 
    dateIn = row.timeIn;
    dateOut = row.timeOut;
    const InDate = new Date(dateIn);
    const OtDate = new Date(dateOut);
    //let Hours = new Date(OtDate.getHours() - InDate.getHours());
    Hours = new Number(OtDate.getHours() - InDate.getHours());
    Mins = new Number(OtDate.getMinutes() - InDate.getMinutes());
    if(Mins < 0){
      Hours--;
    }
    Mins = Math.abs(Mins);
    sallary += Hours * 10;
    sallary += Mins * 0.17;
    console.log("Number of work hours is :",Hours);
    console.log("Number of work mins is :",Mins);
    console.log("The sallary is: ", sallary);
    console.log("The final sallary is: ", Math.round(sallary));
  })
})
  db.close()
