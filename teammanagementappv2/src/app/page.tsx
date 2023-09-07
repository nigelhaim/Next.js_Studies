import { options } from "./api/auth/[...nextauth]/options"
import { getServerSession } from 'next-auth/next'
import { redirect } from 'next/navigation'

async function Home(){
  const session = await getServerSession(options)

  if(!session){
    redirect('/api/auth/signin?callbackUrl=/server')
  }
  console.log("Access granted");
  return(
     <div>
      <h1>Home</h1>
      { session ? (<h2>Welcome { session.user.name }</h2> ): (<h2>Please Login</h2>) }
      </div>
  )
}

export default Home
