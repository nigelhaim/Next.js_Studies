import type { NextAuthOptions } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
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
          //Retrive credentials from the database 
          const user = { id: "42", name: "nigelhaim", password: "adminadminadmin"}
          if(credentials?.username === user.name && credentials?.password === user.password){
              return user
          }
          else{
              return null
          }
      },
    })
  ], 
}
