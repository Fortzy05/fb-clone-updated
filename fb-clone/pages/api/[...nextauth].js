import NextAuth from "next-auth/next";
import Providers from "next-auth/providers";



export default NextAuth({
  providers: [
    Providers.Facebook({
      clientId: process.env.FACEBOOK_CLIENT_ID,
      clientSecret: process.env.FACEBOOK_CLIENT_SECRET,
    }),
  ],
});

