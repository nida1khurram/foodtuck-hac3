<<<<<<< HEAD
// "use client"
// import { useSession, signIn, signOut } from "next-auth/react"
// import { useEffect } from "react"
// import Link from 'next/link'
// import { AiOutlineMail } from "react-icons/ai";
// import { TiLockClosedOutline } from "react-icons/ti";
// import Image from 'next/image';
// import { TopHeader } from '@/components/header/topHeader';
// import { PHeader } from '@/components/header/t2';
// import { Container } from '@/components/container'

// export default function SignIn() {
//   return (
//     <Container>
   
//        {/* import header */}
//                 <TopHeader />
//                 <PHeader title='Sign in page'/>
//                  {/* import header end*/}
//     <div className="h-[564px] flex py-[120px] items-center justify-center bg-gray-50">
//       <div className="w-[424px] py-8 px-9 bg-white shadow-sm">
//         <h2 className="text-xl px-37 font-bold mb-8">Sign In</h2>
        
//         {/* <form className="space-y-4">
//           <div className="relative">
//             <AiOutlineMail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
//             <input
//               type="email"
//               placeholder="Email"
//               className="w-full pl-10 pr-4 py-2 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#FF9F0D]"
//             />
//           </div>

//           <div className="relative">
//             <TiLockClosedOutline className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
//             <input
//               type="password"
//               placeholder="Password"
//               className="w-full pl-10 pr-4 py-2 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#FF9F0D]"
//             />
//           </div>

//           <div className="flex items-center">
//             <input
//               type="checkbox"
//               id="remember"
//               className="h-5 w-5 text-[#FF9F0D] focus:ring-[#FF9F0D] border-gray-300"
//             />
//             <label htmlFor="remember" className="ml-2 text-sm text-gray-600">
//               Remember me?
//             </label>
//           </div>

//           <button
//             type="submit"
//             className="w-full  h-11 bg-[#FF9F0D] text-white py-2  hover:bg-orange-600 transition-colors"
//           >
//             Sign In
//           </button>
//           <div className="mt-6 text-right">
//           <Link href="/forgot-password" className="text-sm text-gray-600 hover:text-orange-500">
//             Forgot password?
//           </Link>
//         </div>
//         </form> */}

//         <div className="mt-0 ">
//           <div className="relative">
//             <div className="absolute inset-0 flex items-center">
//               <div className="w-full border-t border-gray-200"></div>
//             </div>
//             <div className="relative flex justify-center text-sm">
//               {/* <span className="px-4 bg-white text-gray-500">OR</span> */}
//             </div>
//           </div>

//           <div className="mt-6 space-y-3">

//           <button className="w-full flex items-center justify-center gap-3 px-4 py-2 border text-base border-gray-200 hover:bg-gray-50 transition-colors">
//             <Image src="/signup/apple.png" alt="google-logo" width={5} height={5}  className="h-5 w-5"/>
//             Sign in with Github
//             </button>

//           <button className="w-full flex items-center justify-center gap-3 px-4 py-2 border text-base border-gray-200 hover:bg-gray-50 transition-colors">
//               Don't have account ? <Link href={'/signUp'}> <p className='font-bold text-orange-400 hover:text-orange-600'>Sign up</p> </Link>
//             </button>

//             {/* <button className="w-full flex items-center justify-center gap-3 px-4 py-2 border text-base border-gray-200 hover:bg-gray-50 transition-colors">
//               <Image src="/signup/google.png" alt="google-logo" width={5} height={5}  className="h-5 w-5"/>
//               Sign up with Google
//             </button> */}

          
//           </div>
//         </div>
//       </div>
//     </div>
    
//     </Container>
//   )
// }








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
=======
"use client"

import { signIn } from "next-auth/react"
import { useSearchParams } from "next/navigation"
import { useState } from "react"
import { Container } from "@/components/container"
import { TopHeader } from "@/components/header/topHeader"
import { PHeader } from "@/components/header/t2"
import { Button } from "@/components/ui/button"
import { Alert, AlertDescription } from "@/components/ui/alert"

export default function SignIn() {
  const searchParams = useSearchParams()
  const error = searchParams.get("error")
  const [isLoading, setIsLoading] = useState(false)

  const handleSignIn = async () => {
    try {
      setIsLoading(true)
      await signIn("github", {
        callbackUrl: "/checkout",
      })
    } catch (error) {
      console.error("Sign in error:", error)
    } finally {
      setIsLoading(false)
    }
>>>>>>> a74457dfb43b7974c9725e4725ef4bc5e376ac8a
  }

  return (
    <>
      Not signed in <br />
      <button onClick={() => signIn("github")}>Sign in with Github</button>
    </>
  )
}




>>>>>>> a74457dfb43b7974c9725e4725ef4bc5e376ac8a
