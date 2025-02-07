


import NextAuth from "next-auth/next"
// import GithubProvider from "next-auth/providers/github"
import GoogleProvider from 'next-auth/providers/google'

const handler = NextAuth({
  providers: [
    GoogleProvider({
      // clientId: process.env.GITHUB_ID!,
      // clientSecret: process.env.GITHUB_SECRET!,
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
  ],
  debug: process.env.NODE_ENV === "development",
})

export { handler as GET, handler as POST }


// Sign in
// appauth
// Appcart page
// Sign in page
// Componentsuimodal.tsx
// Components SessionWrapper
// Layout SessionWrapper
