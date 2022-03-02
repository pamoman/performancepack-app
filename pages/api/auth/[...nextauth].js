import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

const options = ({
  providers: [
    GoogleProvider({
      clientId: process.env.OAUTH_CLIENT_ID,
      clientSecret: process.env.OAUTH_CLIENT_SECRET,
    }),
  ],
  session: {
    strategy: "jwt",
  },
  callbacks: {
    signIn: async ({ user, account, profile }) => {
      /* const isAllowedToSignIn = false;
      const email = user.email.split('@');

      if (email[1] === 'utb.lidkoping.se') {
        return true;
      } else {
        return '/unauthorized';
      } */

      return true;
    },
    session: async ( { session, token, user }) => {
      session.jwt = user?.jwt;
      session.id = user?.id;

      return session;
    },
    jwt: async ({ token, user, account }) => {
      const isSignIn = user ? true : false;
      const provider = account?.provider;

      if (isSignIn) {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/api/auth/${provider}/callback?access_token=${account?.accessToken}`
        );
        const data = await response.json();

        token.jwt = data?.jwt;
        token.id = data?.user?.id;
      }
      return token;
    },
  }
});

const Auth = (req, res) =>
  NextAuth(req, res, options);

export default Auth;