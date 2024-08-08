import NextAuth from "next-auth";
import Google from "next-auth/providers/google";

const handler = NextAuth({
    providers: [
        Google({
          clientId: process.env.GOOGLE_Id!,
          clientSecret: process.env.GOOGLE_SECRET!,
        }),
        // ...add more providers here
      ],
})

export { handler as GET, handler as POST }