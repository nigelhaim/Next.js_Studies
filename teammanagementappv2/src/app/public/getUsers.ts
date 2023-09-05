
import { user } from '../models/user';
import { Database, OPEN_READWRITE } from 'sqlite3';
function Return(res:any){
  let result: user[] = res;
  return result;
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
return res().then((result) => Return(result))
}

 
