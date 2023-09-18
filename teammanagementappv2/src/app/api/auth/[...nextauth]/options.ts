import type { NextAuthOptions } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import { getServerSession } from 'next-auth/next';
import { Database, OPEN_READWRITE } from 'sqlite3';
import { user } from '../../../models/user';
export const options: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials:{
        username:{
          label: "Username:",
          type: "text",
          placeholder: "Username"
        },
        password:{
          label: "Password:",
          type: "text",
          placeholder: "Your Password"
        },
      },
      async authorize(credentials){
        const db = new Database('./src/app/database.db', OPEN_READWRITE, (err) => {
              if (err) return console.log(err.message)
              else{
                console.log("Connected Database");
              }
            });
          let getQuery = 'SELECT * FROM user WHERE username ="' + credentials.username + '";';
          //console.log(getQuery);
          let lead = false;
            const res = () => {
              return new Promise((resolve, reject) => {
                let u;
                try{
                  db.get(getQuery, (err:any, rows:any)=>{
                if(err){ console.log(err)}
                    console.log(rows);
                    //console.log(rows);
                    if(err){
                      console.log("Error");
                      return;
                    }
                    if(typeof rows ==="undefined"){
                      console.log("Undefined");
                      reject(err);
                    }
                    if(rows.leader.toString() == "1"){
                      lead = true;
                    }
                    u = new user(Number(rows.id), rows.f_name.toString(), rows.l_name.toString(), lead, rows.username.toString(), rows.password.toString()) 
                    resolve(u)
                    console.log(u);
                  })
                }
                catch{
                  console.log("Error");
                }
          })
          }
         return res().then((u) => {
          console.log(u);
          if(credentials?.username == u.username && credentials?.password == u.password){
            return u
          }
          else{
            return null
          }
         })
      },
    })
  ], 
}

