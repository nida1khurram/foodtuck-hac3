
// import NextAuth from "next-auth"
// import GoogleProvider from "next-auth/providers/google"
// export const authOptions = {
//   providers: [
//     GoogleProvider({
//       clientId: process.env.GOOGLE_CLIENT_ID!,
//       clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
//     }),
//   ],
//   debug: process.env.NODE_ENV === "development",
// }
// const handler = NextAuth(authOptions)
// export { handler as GET, handler as POST }

import NextAuth, { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";

// Define the authOptions with the correct type
const authOptions: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
  ],
  debug: process.env.NODE_ENV === "development",
};

// Create the handler using NextAuth
const handler = NextAuth(authOptions);

// Export the handler for GET and POST requests
export { handler as GET, handler as POST };



// Sign in
// app/auth
// App/cart page
// Sign in/page
// Components/ui/modal.tsx
// Components/ SessionWrapper
// Layout/ SessionWrapper
