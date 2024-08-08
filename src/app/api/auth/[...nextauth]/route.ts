import NextAuth from "next-auth";
import Google from "next-auth/providers/google";

const handler = NextAuth({
    providers: [
        Google({
          clientId: "992442067049-k207r5c40biofiq82kognbojpk8gjovh.apps.googleusercontent.com",
          clientSecret: "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",
        }),
        // ...add more providers here
      ],
})

export { handler as GET, handler as POST }