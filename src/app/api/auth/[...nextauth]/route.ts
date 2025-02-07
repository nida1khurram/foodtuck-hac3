// import NextAuth from "next-auth";
// import GitHubProvider from "next-auth/providers/github";

// export const authOptions = {
//   providers: [
//     GitHubProvider({
//       clientId: process.env.GITHUB_ID!,
//       clientSecret: process.env.GITHUB_SECRET!,
//       authorization: {
//         params: { redirect_uri: `${process.env.NEXTAUTH_URL}/api/auth/callback/github` },
//       },
//     }),
//   ],
//   callbacks: {
//     async redirect({ url, baseUrl }:any) {
//       return baseUrl; // Ensures it works in both localhost & production
//     },
//   },
// };

// export default NextAuth(authOptions);



import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"
export const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
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




// Sign in
// appauth
// Appcart page
// Sign in page
// Componentsuimodal.tsx
// Components SessionWrapper
// Layout SessionWrapper
