


// import NextAuth from "next-auth"
// import GithubProvider from "next-auth/providers/github"

// const handler = NextAuth({
//   providers: [
//     GithubProvider({
//       clientId: process.env.GITHUB_ID!,
//       clientSecret: process.env.GITHUB_SECRET!,
//     }),
//   ],
//   debug: process.env.NODE_ENV === "development",
// })

// export { handler as GET, handler as POST }

// // Sign in
// // app/auth
// // App/cart page
// // Sign in/page
// // Components/ui/modal.tsx
// // Components/ SessionWrapper
// // Layout/ SessionWrapper


import NextAuth from "next-auth"
import GithubProvider from "next-auth/providers/github"

export const authOptions = {
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID!,
      clientSecret: process.env.GITHUB_SECRET!,
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  pages: {
    signIn: "/signin",
    error: "/signin", // Redirect to signin page on error
  },
}

const handler = NextAuth(authOptions)
export { handler as GET, handler as POST }

