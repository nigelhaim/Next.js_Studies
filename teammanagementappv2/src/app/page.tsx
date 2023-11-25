import { options } from "./api/auth/[...nextauth]/options"
import { getServerSession } from 'next-auth/next'
import { redirect } from 'next/navigation'

async function Home(){
  const session = await getServerSession(options)
  const user = session.u;
  console.log("Access granted");
  console.log("Welcome " + session.user );
  return(
     <div>
      <h1>Home</h1>
      { session ? (<h2>Welcome { user }</h2> ): (<h2>Please Login</h2>) }
      </div>
  )
}

export default Home
