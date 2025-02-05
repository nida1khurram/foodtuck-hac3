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
  }

  return (
    <Container>
      <TopHeader />
      <PHeader title="Sign in" />
      <div className="min-h-[564px] flex items-center justify-center bg-gray-50">
        <div className="w-[424px] py-8 px-9 bg-white shadow-sm rounded-lg">
          <h2 className="text-xl font-bold mb-8">Sign In</h2>

          {error && (
            <Alert variant="destructive" className="mb-6">
              <AlertDescription>
                {error === "OAuthAccountNotLinked"
                  ? "To confirm your identity, sign in with the same account you used originally."
                  : "There was an error signing in with GitHub. Please try again."}
              </AlertDescription>
            </Alert>
          )}

          <Button
            onClick={handleSignIn}
            disabled={isLoading}
            className="w-full h-12 bg-[#24292F] hover:bg-[#24292F]/90 text-white"
          >
            {isLoading ? "Signing in..." : "Sign in with GitHub"}
          </Button>
        </div>
      </div>
    </Container>
  )
}












// "use client"
// import { useSession, signIn, signOut } from "next-auth/react"
// import { useEffect } from "react"

// export default function Component() {
//   const { data: session, status } = useSession()

//   useEffect(() => {
//     // Redirect to sign-in page if not authenticated
//     if (status === "unauthenticated") {
//       window.location.href = "/signin"
//     } else if (status === "authenticated") {
//       alert("You are signed in")
//       window.location.href = "/checkout"
//     }
//   }, [status])

//   if (status === "authenticated" && session?.user) {
//     return (
//       <>
//         Signed in as {session.user.email ?? "User"} <br />
//         {session.user.name ?? "User Name"} <br />
//         <img src={session.user.image ?? "default-image.jpg"} alt="User" />
//         <button onClick={() => signOut()}>Sign out</button>
//       </>
//     )
//   }
//   return (
//     <>
//       Not signed in <br />
//       <button onClick={() => signIn("github")}>Sign in with Github</button>
//     </>
//   )
// }




