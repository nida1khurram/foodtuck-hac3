import NextAuth from "next-auth"
import GithubProvider from "next-auth/providers/github"

const  handler = NextAuth({
  // Configure one or more authentication providers
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID!,
      clientSecret: process.env.GITHUB_SECRET!,
    }),
    // ...add more providers here
  ],
});


export { handler as GET, handler as POST };




// import NextAuth from "next-auth";
// import GoogleProvider from "next-auth/providers/google";

// export const authOptions = {
//   providers: [
//     GoogleProvider({
//       clientId: process.env.GITHUB_ID!,
//       clientSecret: process.env.GITHUB_SECRET!,
//     }),
//   ],
//   secret: process.env.NEXTAUTH_SECRET,
// };

// export default NextAuth(authOptions);







// Sign in
// appauth
// Appcart page
// Sign in page
// Componentsuimodal.tsx
// Components SessionWrapper
// Layout SessionWrapper
