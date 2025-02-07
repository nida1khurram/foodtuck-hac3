
"use client"
import { useSession, signIn, signOut} from 'next-auth/react'
import React from 'react'

export default function Page() {
  const {data:session} = useSession();
  if(session && session.user){
    return(
<div>
 <p> {session.user.name}</p>
 <button onClick={()=> signOut()}>Sign Out</button>
</div>
    )
  }

  return (
    <>
      Not signed in <br />
      <button onClick={() => signIn("github")}>Sign in with Github</button>
    </>
  )
}





